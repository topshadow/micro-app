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
    whereCondition?: WhereCondition<any>;
    min?: number;
    max?: number;
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
        {opt.fields} {opt.min} {opt.max}
        <div style={{ height: MaxHeight + 'px', overflowY: 'scroll' }}>
            {values.join('-')}
            {options.map(option => <div><Checkbox style={{ height: ItemHeight + 'px' }} onChange={(e) => {
                // let value = e.target.checked;
                // debugger;
                // if (values.includes(opti)) {
                //     let index = values.indexOf(value);
                //     values.splice(index, 1)
                // } else {
                //     values.push(value);
                // }
                // setValues(values)
                debugger;

                if (e.target.checked) {
                    if (!values.includes(option[opt.valueKey])) {
                        if (opt.max && values.length >= opt.max) {
                            alert('不得大于最大项' + opt.max)
                        } else {
                            values.push(option[opt.valueKey]);
                        }
                    } else {
                        let index = values.indexOf(option[opt.valueKey]);
                        if (opt.min && values.length <= opt.min) {
                            alert('不得小于最小项' + opt.min)
                        } else {
                            values.splice(index, 1);

                        }

                    }

                } else {
                    let index = values.indexOf(option[opt.valueKey]);
                    values.splice(index, 1);

                }
                setValues(values.map(v => v))

                // if (opt.min || opt.max) {
                //     let length = values.length;
                //     if (opt.min && opt.min <= length) {
                //         alert('不允许小于最小项' + opt.min)
                //     } else if (opt.max && opt.max >= length) {
                //         alert('不允许大于最多项' + opt.max)
                //     }

                // }
            }} defaultChecked={values.includes(option[opt.valueKey])} checked={values.includes(option[opt.valueKey])}>{option[opt.labelKey]}</Checkbox></div>)}
        </div>
    </>

}   