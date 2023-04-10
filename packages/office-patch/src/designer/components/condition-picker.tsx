import React, { useState } from 'react';
import { Button, Input, Modal, Select } from 'antd';

export interface ConditionPickerProp {
    open?: boolean;
    onOk: (condition: { conditionKey?: string, condition?: string, conditionValue?: string }) => void;
    conditionKey?: string;
    condition?: string;
    conditionValue?: string;
}


export function ConditionPicker(prop: ConditionPickerProp) {
    // const [open, setOpen] = useState(false);
    const [conditionKey, setConditionKey] = useState(prop.conditionKey);
    const [condition, setCondition] = useState(prop.condition);
    const [conditionValue, setConditionValue] = useState(prop.conditionValue);



    return <>

        <Modal title="过滤条件" open={prop.open} width={'800px'} onOk={() => prop.onOk({ condition, conditionKey, conditionValue })} onCancel={() => prop.onOk({ condition, conditionKey, conditionValue })} okText="确定" cancelText={'取消'}>
            <div>变量描述 例如 $orgId , $userId,$roleId,    $today,等等</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                <Select onChange={(e) => setConditionKey(e)} value={conditionKey} defaultValue={conditionKey} placeholder={'属性名'} options={[{ label: 'id', value: 'id' }, { label: '用户名', value: 'username' }, { label: '名称', value: 'name' }]}></Select>
                <Select onChange={(e) => setCondition(e)} value={condition} placeholder={'条件'} options={[{ label: '包含', value: 'contains' }, { label: '大于', value: 'gt' }, { label: '小于', value: 'lt' }]}></Select>
                <div style={{ display: 'flex' }}>
                    <Input placeholder='值,可以使用表达式' value={conditionValue} onChange={(e) => setConditionValue(e.target.value)}>

                    </Input>
                    <Select placeholder={'选择值类型'} options={[
                        { label: '文本', value: 'text' }, { label: '组织', value: 'org' }, { label: '数字', value: 'number' }, { label: '变量', value: 'var' }]}></Select>

                </div>

            </div>

        </Modal>
    </>
}



