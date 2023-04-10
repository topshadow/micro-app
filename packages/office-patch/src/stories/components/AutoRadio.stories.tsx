// import { DatasourceObject } from '../datasource';

import React from "react";
import { AutoRadio } from "../../components/AutoRadio";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
    title: 'Example/AutoRadio',
    component: (args) => <AutoRadio {...args}></AutoRadio>,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic = {
    args: {
        table: 'users',
        fields: ['id', 'name'],
        labelKey: 'name',
        valueKey: 'id',
        placeholder: '选择用户'


    },
};

export const Compilex = {
    args: {
        table: 'users',
        fields: ['id', 'username', 'tenant.id', 'tenant.name', 'tenant.createAt'],
        labelKey: 'username',
        valueKey: 'id'

    },
};

export const PrismaComplexQuery = {
    args: {
        table: 'users',
        fields: ['id', 'username'],
        labelKey: 'username',
        valueKey: 'id',
        placeholder: '选择用户',
        maxItemDisplay: 10,
        itemHeight: 20,
        defaultValue: 'clftrd6eh00007mawr0350xm9',




    },

};


export const SearchExample = {

    args: {
        table: 'users',
        fields: ['id', 'username'],
        labelKey: 'username',
        valueKey: 'id',
        placeholder: '选择用户',
        maxItemDisplay: 10,
        itemHeight: 20,
        defaultValue: 'clftrd6eh00007mawr0350xm9',
        allowSearch: true,
        searchKey: 'name',




    },

}

