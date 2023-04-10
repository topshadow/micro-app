import { Datasource } from 'datasource';

import { useEffect, useState } from 'react';
import React from 'react';
import './AutoSelect.module.css';
import { WhereCondition } from 'datasource/dist/prisma';
import { Select } from 'antd';
interface AutoSelectOption {
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
    whereCondition: WhereCondition<any>

    allowSearch: boolean;
    searchKey: string;
    left: number;
    top: number;
}

export function AutoSelect(opt: AutoSelectOption) {
    let itemHeight = opt.itemHeight || 20;
    let minWidth = opt.minWidth || 250;
    let maxItemDisplay = opt.maxItemDisplay || 5;
    const datasource = new Datasource(opt.table, opt.fields);
    const [options, setOptions] = useState<any[]>([]);
    const [value, setValue] = useState<any>(opt.defaultValue);
    const [keyword, setKeyword] = useState('');
    useEffect(() => {
        let whereCondition = opt.whereCondition;
        if (whereCondition && keyword && opt.allowSearch) {
            whereCondition[opt.searchKey] = {
                contains: keyword
            }
        } else if (keyword && opt.allowSearch) {
            whereCondition = {};
            whereCondition[opt.searchKey] = {
                contains: keyword
            }

        }
        datasource.queryObject().where(whereCondition).exec().then(rtn => {

            let items = rtn.data[opt.table] as any[];
            items = items.map(item => Object.assign({}, item));
            items.forEach(item => { item.label = item[opt.labelKey]; item.value = item[opt.valueKey] })
            setOptions(items)
        });

    })
    const itemStyle: React.CSSProperties = {
        height: itemHeight,
        overflow: 'hidden',
        textOverflow: 'clip',
        width: '100%'




    }
    // const getValueByKey=(key:string,data:any)=>{
    //         if(!data){return null}
    //         if(key.includes('.')){
    //             let keyArrs= key.split('.').pop();

    //         }
    // }
    //  {opt.allowSearch ? <div style={{ ...itemStyle }}><input style={{ width: '100%', border: 'none', outline: 'none', lineHeight: itemHeight + 'px' }} placeholder={opt.placeholder} onChange={(e) => setKeyword(e.target.value)} defaultValue={keyword}></input> </div> : null}

    // {options.map((option, index) => <div onClick={() => setValue(option[opt.valueKey])} key={index} style={{ ...itemStyle, backgroundColor: value == option[opt.valueKey] ? 'red' : '' }}  >
    // {/* {option[opt.valueKey]} */}
    // {option[opt.labelKey]}</div>)
    // }
    let dropdownStyle = {};
    if (!opt.allowSearch) {
        dropdownStyle = { position: 'relative', top: '-30px' }


    }

    return <>
        <Select open={true} style={{ position: 'relative', left: opt.left - 250 + 60 + 'px', top: -20 + 'px', zIndex: -1, width: minWidth, backgroundColor: '#fff' }} dropdownStyle={{ left: opt.left - 40 + 'px', top: opt.top + maxItemDisplay * itemHeight + (opt.allowSearch ? 60 : 30) + 'px', zIndex: 10000 }} defaultValue={opt.defaultValue} showSearch={opt.allowSearch} bordered={true} options={options} >

        </Select></>

}   