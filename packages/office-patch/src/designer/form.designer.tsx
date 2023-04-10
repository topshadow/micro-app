import { Button, Checkbox, CheckboxOptionType, Form, Input, Select, Tabs, Tag, Tooltip } from "antd";
import React, { useState } from "react";
import { AutoCheckboxOptions } from "../components/AutoCheckbox";
import { NumberDesigner } from "./components/number-designer";
import { EditOutlined, DeleteOutlined, QuestionCircleFilled } from '@ant-design/icons';
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
    let jsonschemaComponents: any[] = []
    let datasyncComponents: any[] = [];
    let ruleComponents: any[] = [];

    // const [state, setState] = useState(prop);

    switch (prop.type) {
        case 'checkbox':
            label = '单选框';
            designerCompoennts = [
                {
                    label: '数据主键',
                    children: <Input defaultValue={prop.maxItemDisplay} value={prop.maxItemDisplay} onChange={(num) => changeProp(prop, 'key', num)} ></Input>
                },
                {
                    label: '最多显示',
                    children: <NumberDesigner defaultValue={prop.maxItemDisplay} value={prop.maxItemDisplay} onValueChange={(num) => changeProp(prop, 'maxItemDisplay', num)}></NumberDesigner >
                },
                {
                    label: '每条行高',
                    children: <NumberDesigner defaultValue={prop.itemHeight} value={prop.itemHeight} onValueChange={(num) => changeProp(prop, 'itemHeight', num)}></NumberDesigner>

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
            }];
            jsonschemaComponents = [{
                label: '最小长度',
                tooltip: '设置为0则无限制,多选为数量项限制',
                children: <>
                    <Input type={'number'} defaultValue={prop.min} onChange={(e) => changeProp(prop, 'min', e.target.value)}></Input>
                </>
            },

            {
                label: '最大长度',
                tooltip: '设置为0则无限制,多选为数量项限制',
                children: <>
                    <Input type={'number'} defaultValue={prop.max} onChange={(e) => changeProp(prop, 'max', e.target.value)}></Input>
                </>
            },
            {
                label: '是否必填',
                tooltip: '多选时最少一项',
                children: <>
                    <Checkbox onChange={e => changeProp(prop, 'required', e.target.checked)} checked={prop.required}></Checkbox>

                </>
            },


            ];
            datasyncComponents = [
                {
                    label: '数据库表',
                    children: <>
                        <Select defaultValue={prop.table} value={prop.syncTable} options={[{ label: '用户', value: 'users' }, { label: '租户', value: 'tenants' }]} onChange={(syncTable) => changeProp(prop, 'syncTable', syncTable)} ></Select></>
                },


                {
                    label: '字段列表',
                    children: <>
                        <Select mode="multiple"
                            defaultValue={prop.syncFields} value={prop.syncFields} options={[{ label: 'id', value: 'id' }, { label: '名称', value: 'name' }, { label: '用户名', value: 'username' }]} onChange={(syncFields) => changeProp(prop, 'syncFields', syncFields)} ></Select></>

                },
                {
                    label: '同步方式',
                    tooltip: '控件选值为独立同步',
                    children: <>
                        <Select defaultValue={prop.syncWay} value={prop.syncWay} options={[{ label: '表单提交', value: 'submit' }, { label: '控件选值', value: 'onChange' }]} onChange={(syncWay) => changeProp(prop, 'syncWay', syncWay)} ></Select></>
                },

            ];
            ruleComponents = [
                {
                    label: '条件显示',
                    children: <>条件显示</>
                }
            ]

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
            children: jsonschemaComponents.map(item => {
                return <Form.Item
                    label={item.label}
                    name="username"
                ><div style={{ display: 'flex' }}>
                        {item.tooltip ? <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}><Tooltip title={item.tooltip}>

                            <QuestionCircleFilled />
                        </Tooltip>  </div> : null}
                        {item.children}
                    </div>
                </Form.Item>

            }
            )
        },
        {
            key: 'datasync',
            label: '数据同步',
            children: datasyncComponents.map(item => {
                return <Form.Item
                    label={item.label}
                    name="username"
                ><div style={{ display: 'flex' }}>
                        {item.tooltip ? <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}><Tooltip title={item.tooltip}>
                            <QuestionCircleFilled />
                        </Tooltip>  </div> : null}
                        {item.children}
                    </div>
                </Form.Item>

            }
            )
        },
        {
            key: 'rule',
            label: '复杂规则',
            children: datasyncComponents.map(item => {
                return <Form.Item
                    label={item.label}
                    name="username"
                ><div style={{ display: 'flex' }}>
                        {item.tooltip ? <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}><Tooltip title={item.tooltip}>
                            <QuestionCircleFilled />
                        </Tooltip>  </div> : null}
                        {item.children}
                    </div>
                </Form.Item>

            }
            )
        },

    ]

    return <div>
        {label}

        <Tabs items={items} defaultActiveKey="display">

        </Tabs>
    </div>
}