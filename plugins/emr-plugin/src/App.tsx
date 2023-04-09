import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'antd';
declare var asc_docs_api: any;
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: `条件显示`,
        children: `Content of Tab Pane 1`,
    },
    {
        key: '2',
        label: `数据源`,
        children: `Content of Tab Pane 2`,
    },
    {
        key: '3',
        label: `数据校验`,
        children: `Content of Tab Pane 3`,
    },
];

const App: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;