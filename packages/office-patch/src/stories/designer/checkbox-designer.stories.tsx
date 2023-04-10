// import { DatasourceObject } from '../datasource';

import React, { useState } from "react";
import { AutoCheckbox } from "../../components/AutoCheckbox";
import { FormDesigner } from "../../designer/form.designer";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
    title: 'Designer/CheckboxDesiger',
    component: (args) => {
        const [setting, setSetting] = useState(args);

        return <div style={{ display: 'flex' }}>
            <div style={{ width: '350px', flexShrink: 0 }}>
                <FormDesigner {...setting} onStateChange={(s) => setSetting(s)} />


            </div>
            <div style={{ width: '100%', paddingLeft: '20px' }}>
                {setting.table}
                <AutoCheckbox {...setting}></AutoCheckbox>
            </div>
        </div>
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic = {
    args: {
        type: 'checkbox',
        table: 'users',
        fields: ['id', 'name'],
        labelKey: 'name',
        valueKey: 'id',
        placeholder: '选择用户'


    },
};

export const Compilex = {
    args: {
        type: 'checkbox',
        table: 'users',
        fields: ['id', 'username', 'tenant.id', 'tenant.name', 'tenant.createAt'],
        labelKey: 'username',
        valueKey: 'id'

    },
};

export const PrismaComplexQuery = {
    args: {
        type: 'checkbox',
        table: 'users',
        fields: ['id', 'username'],
        labelKey: 'username',
        valueKey: 'id',
        placeholder: '选择用户',
        maxItemDisplay: 10,
        itemHeight: 20,
        defaultValue: ['clftrd6eh00007mawr0350xm9'],




    },

};


export const SearchExample = {
    title: '分页',
    args: {
        type: 'checkbox',
        table: 'users',
        fields: ['id', 'username'],
        labelKey: 'username',
        valueKey: 'id',
        placeholder: '选择用户',
        maxItemDisplay: 10,
        itemHeight: 20,
        defaultValue: ['clftrd6eh00007mawr0350xm9'],
        allowSearch: true,
        searchKey: 'name',




    },

}

