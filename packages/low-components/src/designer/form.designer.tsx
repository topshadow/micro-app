import { Button, CheckboxOptionType, Form, Input, Select, Tabs, Tag } from "antd";
import React, { useState } from "react";
import { AutoCheckboxOptions } from "../components/AutoCheckbox";
import { NumberDesigner } from "./components/number-designer";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ConditionPicker } from "./components/condition-picker";
import { WhereCondition } from "datasource/dist/prisma";
// import { PlaceholderDesigner } from "./components/placeholder-designer";

function changeProp(prop: { onStateChange: (state: any) => void }, key: string, value: any) {
    let changeObject: any = {};
    changeObject[key] = value;
    prop.onStateChange(Object.assign({}, prop, changeObject))
}

enum ConditionDesignMode {
    Add,
    Update
}
function ConditionDesign(opt: { whereCondition?: WhereCondition<any>, prop: any }) {
    let whereCondition: WhereCondition<any> = {};
    const [mode, setMode] = useState<ConditionDesignMode>(ConditionDesignMode.Add);
    const [showModal, setShowModal] = useState(false);


    if (opt.whereCondition) {
        whereCondition = opt.whereCondition;
    }
    let conditions = Object.keys(whereCondition).map(key => {
        let conditionObject = whereCondition[key];

        let condition = conditionObject ? Object.keys(conditionObject)[0] : null;
        let conditionValue = conditionObject ? Object.values(conditionObject[Object.keys(conditionObject)[0]])[0] : null;
        return { key, condition, conditionValue }
    });
    return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button type={'primary'} size={'small'} onClick={() => { setMode(ConditionDesignMode.Add); setShowModal(true) }}>添加</Button>
        {showModal + ""}
        {conditions.map(c => <div>
            <div>
                <Tag bordered={false}>
                    <>
                        {c.key} {c.condition}  {c.conditionValue}

                    </>
                </Tag>
                <EditOutlined style={{ marginRight: '10px', cursor: 'pointer' }} />
                <DeleteOutlined style={{ cursor: 'pointer' }} onClick={() => { delete whereCondition[c.key]; changeProp(opt.prop, 'whereCondition', whereCondition) }} />
                {/* <ConditionPicker open={showModal} onOk={() => setShowModal(false)}></ConditionPicker> */}
            </div>


        </div>

        )}
        <ConditionPicker open={showModal} onOk={(s) => {
            let condition: any = {};
            debugger;
            condition[s.condition as any] = s.conditionValue;
            whereCondition[s.conditionKey as string] = condition;
            changeProp(opt.prop, 'whereCondition', whereCondition);
            setShowModal(false);
        }} ></ConditionPicker>

    </div>

}

export function FormDesigner(prop: AutoCheckboxOptions & { onStateChange: (state: any) => void }) {
    let label = '';
    let designerCompoennts: any[] = [];
    let datasourceComponents: any[] = [];
    // const [state, setState] = useState(prop);

    switch (prop.type) {
        case 'checkbox':
            label = '单选框';
            designerCompoennts = [
                {
                    label: '最多显示',
                    children: <NumberDesigner defaultValue={prop.maxItemDisplay} value={prop.maxItemDisplay} onValueChange={(num) => changeProp(prop, 'maxItemDisplay', num)}></NumberDesigner >
                },
                {
                    label: '每条行高',
                    children: <NumberDesigner defaultValue={prop.itemHeight} value={prop.maxItemDisplay} onValueChange={(num) => changeProp(prop, 'itemHeight', num)}></NumberDesigner>

                },
                {
                    label: '提示文本',
                    children: <Input defaultValue={prop.placeholder} value={prop.placeholder} onChange={(placeholder) => changeProp(prop, 'placeholder', placeholder)}></Input>
                }
            ]
            datasourceComponents = [{
                label: '数据库表',
                children: <>
                    <Select defaultValue={prop.table} value={prop.table} options={[{ label: '用户', value: 'users' }, { label: '租户', value: 'tenants' }]} onChange={(table) => changeProp(prop, 'table', table)} ></Select></>

            },

            {
                label: '字段列表',
                children: <>
                    <Select mode="multiple"
                        defaultValue={prop.fields} value={prop.fields} options={[{ label: 'id', value: 'id' }, { label: '名称', value: 'name' }, { label: '用户名', value: 'username' }]} onChange={(fields) => changeProp(prop, 'fields', fields)} ></Select></>

            },
            {
                label: '显示字段',
                children: <>
                    <Input defaultValue={prop.labelKey} value={prop.labelKey} onChange={(v) => changeProp(prop, 'labelKey', v.target.value)}></Input>
                </>
            },

            {
                label: '取值字段',
                children: <>
                    <Input defaultValue={prop.valueKey} value={prop.valueKey} onChange={(v) => changeProp(prop, 'valueKey', v.target.value)}></Input>
                </>
            },

            {
                label: '过滤条件',
                children: <>
                    <ConditionDesign prop={prop} whereCondition={prop.whereCondition} ></ConditionDesign>
                </>
            }]

            break;
    };
    const items = [
        {
            key: 'display',
            label: '显示',
            children: designerCompoennts.map(item => {
                return <Form.Item
                    label={item.label}
                    name="username"

                >
                    {item.children}
                </Form.Item>
            })
        },

        {
            key: 'datasource',
            label: '数据源',
            children: datasourceComponents.map(item => {
                return <Form.Item
                    label={item.label}
                    name="username"

                >
                    {item.children}
                </Form.Item>
            })
        },

        {
            key: 'validation',
            label: '数据校验',
            children: designerCompoennts
        },

    ]

    return <div>
        {label}

        <Tabs items={items} defaultActiveKey="display">

        </Tabs>
    </div>
}