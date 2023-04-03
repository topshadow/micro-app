

import { ActionType, arrayMoveImmutable, CheckCard, DragSortTable, ProColumns, ProTable, useRefFunction } from '@ant-design/pro-components';
import { useContext, useEffect, useRef, useState } from 'react';
import { gql, useMutation, useQuery } from "@apollo/client";
import { App } from '../../prisma/generated/type-graphql';
import { AuthContext } from '../../libs/client/authContext';
// import { updateTenantSetting } from '../../libs/client/auth';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';


export function updateTenantSetting() {
    return useMutation(gql`
    mutation ($data:TenantUpdateInput!,$tenantId:String){
        updateOneTenant(data:$data,where:{id:$tenantId}){
          
          id
        }
      }
    `)
}


export default () => {



    const refreshTokenFunction = () => {
        let { loading: loadingToken, data: refreshToken } = useQuery<{ token: string }>(gql`query{
        refreshToken{
          token,
          success,
          message
        }
      }`);

    }

    let authContext = useContext(AuthContext);

    let [checkedApps, setCheckedApps] = useState<string[]>([]);
    const [updateTenant, { data: data2, loading: loading2, error }] = updateTenantSetting();

    useEffect(() => {
        if (authContext) {
            let appSettings = authContext.tenant.appSettings;
            if (appSettings) {
                setCheckedApps((appSettings as any).checkedApps || []);


            }
        }
    }, [authContext])

    let { loading, data } = useQuery<{ apps: App[] }>(gql`query{
            apps{
              id,
              name,
              readmeUrl,
              icon,
              description
            }
          }`);

    const change = (value) => {
        console.log(value);
        setCheckedApps(value);
        let setAppSettings = JSON.stringify({ appList: data.apps.filter(app => value.includes(app.id)) });
        debugger;

        updateTenant({ variables: { tenantId: authContext.tenantId, data: { appSettings: { set: setAppSettings } } } })

    }

    return !loading ? <><CheckCard.Group
        multiple
        onChange={change}
        value={checkedApps}
        defaultValue={checkedApps}
    >
        {data.apps.map(app =>
            <CheckCard
                title={app.name}
                description={app.description}
                value={app.id}
                checked={checkedApps.includes(app.id)}
            />)}
    </CheckCard.Group>
        <Button>更新</Button>
        <Apps data={data.apps} onReorder={(apps) => { debugger; updateTenant({ variables: { tenantId: authContext.tenantId, data: { appSettings: { set: JSON.stringify({ appList: apps }) } } } }) }}   ></Apps>
        {JSON.stringify(checkedApps)}
        {JSON.stringify(authContext)}</> : 'loading'

};







export let Apps = ({ onReorder, data }: { onReorder?: (data) => void, data: any[] }) => {
    let remoteData = data.map((item, index) => ({ ...item, index, sort: index }));

    const columns: ProColumns[] = [
        {
            title: '排序',
            dataIndex: 'sort',

        },
        {
            title: '名称',
            dataIndex: 'name',
            className: 'drag-visible',
        },
        {
            title: '应用描述',
            dataIndex: 'description',
        },
        {
            title: '设置',
            dataIndex: 'address',
        },
    ];

    const actionRef = useRef<ActionType>();
    const [dataSource1, setDatasource1] = useState(remoteData);

    const handleDragSortEnd1 = (newDataSource: any) => {
        if (onReorder) {
            onReorder(newDataSource);


        }
        setDatasource1(newDataSource);
        message.success('修改列表排序成功');

    };



    return (
        <>
            <DragSortTable
                headerTitle="应用排序"
                columns={columns}
                rowKey="index"
                pagination={false}
                dataSource={dataSource1}
                dragSortKey="sort"
                onDragSortEnd={handleDragSortEnd1}
            />


        </>
    );
};