import { Datasource } from 'datasource';

import { useEffect, useState } from 'react';
import React from 'react';
import './AutoSelect.module.css';
import { Checkbox } from 'antd';
import { WhereCondition } from 'datasource/dist/prisma';

export interface AutoCheckboxOptions {
    type: 'checkbox';
    table: string;
    fields: string[];
    labelKey: string;
    valueKey: string;
    minWidth?: number;
    defaultValue: any;
    placeholder: string;
    /**每一项数据的高度 默认20px */
    itemHeight: number;
    /** 最多同时显示多少项数据 */
    maxItemDisplay: number;
    allowSearch: boolean;
    searchKey: string;
    whereCondition?: WhereCondition<any>
}

export function AutoCheckbox(opt: AutoCheckboxOptions) {

    let itemHeight = opt.itemHeight || 20;
    let minWidth = opt.minWidth || 250;
    let maxItemDisplay = opt.maxItemDisplay || 5;
    const [table, setTable] = useState(opt.table)

    const [options, setOptions] = useState<any[]>([]);
    const [values, setValues] = useState<any[]>(opt.defaultValue || []);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        debugger;
        const datasource = new Datasource(opt.table, opt.fields);

        datasource.queryObject().where(opt.whereCondition).exec().then(rtn => {

            let items = rtn.data[opt.table] as any[];
            setOptions(items)
        });

    }, [keyword, opt.table])
    // const itemStyle: React.CSSProperties = {
    //     height: itemHeight,
    //     overflow: 'hidden',
    //     textOverflow: 'clip',
    //     width: '100%'




    // }
    const ItemHeight = opt.itemHeight || 21;
    const MaxHeight = itemHeight * opt.maxItemDisplay;


    return <>
        {opt.fields}
        <div style={{ height: MaxHeight + 'px', overflowY: 'scroll' }}>
            {options.map(option => <div><Checkbox style={{ height: ItemHeight + 'px' }} defaultChecked={values.includes(option[opt.valueKey])}>{option[opt.labelKey]}</Checkbox></div>)}
        </div>
    </>

}   