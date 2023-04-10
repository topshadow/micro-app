import { Input, Radio, RadioChangeEvent, Space } from "antd";
import { useEffect, useState } from "react";
import React from "react";
import { Datasource } from "datasource";
import { WhereCondition } from "datasource/dist/prisma/where";

export interface AutoRadioOptions {
    url: string;
    table: string;
    fields: string[];
    labelKey: string;
    valueKey: string;
    /**每一项数据的高度 默认20px */
    itemHeight: number;
    /** 最多同时显示多少项数据 */
    maxItemDisplay: number;
    whereCondition: WhereCondition<any>


}

export function AutoRadio(opt: AutoRadioOptions) {
    const [value, setValue] = useState(null);
    const datasource = new Datasource(opt.table, opt.fields);
    const [options, setOptions] = useState<any[]>([]);
    useEffect(() => {
        datasource.queryObject().exec().then(rtn => {
            let items = rtn.data[opt.table] as any[];
            setOptions(items)
        })

    }, []);
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const itemHeight = opt.itemHeight | 22
    const MaxHeight = opt.maxItemDisplay * (itemHeight + 8);
    return <Radio.Group onChange={onChange} value={value} style={{ maxHeight: MaxHeight, overflowY: 'scroll' }}>
        <Space direction="vertical">
            {options.map(option => <Radio style={{ height: itemHeight }} value={option[opt.valueKey]}>{option[opt.labelKey]}</Radio>)}
        </Space>
    </Radio.Group>

}
