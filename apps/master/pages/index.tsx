import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Breadcrumb, Calendar, Layout, Menu, MenuProps, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { gql, useQuery } from "@apollo/client";

import { Button, Space, Modal } from 'antd';
import type { Dayjs } from 'dayjs';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { eventBus, CalendarEvent } from '../libs/plugin';
import MenuItem from 'antd/es/menu/MenuItem';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
import './index.module.css'
import { LoginResult } from '../libs/auth/auth';
let pluginLayoutCss = `width: 100%;
min-height: 200px;
/* padding: 12px; */
position: fixed;
right: 20px;
bottom: 57px;
width: 400px;
height: 300px;
border: none;`;

interface CommandData {
  taskId?: number;
  type: 'invoke' | 'get';
  command: 'calender' | 'change-layout';
  data?: { layout: SubAppLayout }
}
enum SubAppLayout {
  fullscreen = 'fullscreen',
  embed = 'embed'
}
interface SubApp {
  url: string;
  layout: SubAppLayout
  onLayoutChange?: (layout) => void
}

type MenuItem = Required<MenuProps>['items'][number];

function MainLayout(opt: { children: any }) {

  return <div>
    <main>
      {opt.children}
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </a>
    </footer>


    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
  </div>

}

function SubAppCom(subApp: SubApp) {
  const iframeEl = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (typeof window != 'undefined') {
      window.addEventListener('message', (msg: { data: CommandData }) => {
        if (msg.data.command == 'change-layout') {
          debugger;
          if (subApp.layout == SubAppLayout.embed) {
            debugger;
            // subApp.layout = SubAppLayout.fullscreen;
            subApp.onLayoutChange(SubAppLayout.fullscreen)

          } else {
            subApp.onLayoutChange(SubAppLayout.embed)
          }
        }
      });
    }
  });

  return <iframe ref={iframeEl} src={subApp.url} allowFullScreen={true} style={{ width: '100%', minHeight: '700px', padding: '12px' }} ></iframe>

}

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,

//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   },
// );
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined size={8} style={{ fontSize: '12px' }} />),
  getItem('Option 2', '2', <DesktopOutlined size={8} style={{ fontSize: '12px' }} />),
  getItem('Option 3', '3', <ContainerOutlined size={8} style={{ fontSize: '12px' }} />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];
function logout() {
  document.cookie = 'path=/';
  location.href = '/auth/login'
}
export default function Home() {
  const [collopse, setCollpse] = useState(true);
  const apps: SubApp[] = [{
    url: 'http://192.168.10.101:3001/Samples/TypeScript/Demo/index.html',
    layout: SubAppLayout.embed
  },
  {
    url: 'http://localhost:3001',
    layout: SubAppLayout.fullscreen
  }
  ];
  const [appUrl, setAppUrl] = useState<SubApp>(apps[0]);
  const [calendarEvent, setCalendarEvent] = useState<CalendarEvent | null>();
  const [isModalOpen, setModelOpen] = useState(false);
  const [taskId, setTaskId] = useState<string>();
  let currentDiv = null;
  let task = {} as any;

  useEffect(() => {

    if (typeof window != 'undefined') {
      setCalendarEvent(new CalendarEvent((data) => { alert('ok'); setModelOpen(true); setTaskId(id => data.taskId) }))

    }
    return () => { calendarEvent ? calendarEvent.removeListener() : null };

  }, []);


  let datePicker = <Modal title="Basic Modal" open={isModalOpen} width={'900px'} onCancel={() => setModelOpen(false)}>
    <Calendar onPanelChange={(v) => calendarEvent.emit(v.toDate())} />;

  </Modal>;


  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Layout >
        <Header style={{
          backgroundColor: "#fff", padding: 0, height: '45px',
          display: 'flex'

        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '60px',
            cursor: 'pointer',
            flexShrink: 0
          }} onClick={() => setCollpse(!collopse)}><MenuUnfoldOutlined /></div>

          <div className="logo" />
          <div style={{ width: '100%', alignItems: 'center', display: 'flex' }}>
            <div style={{ width: '100%' }}>菜单</div>
            <div style={{ width: '60px' }}>
              <Button type='link' color={'primary'} onClick={() => logout()} >注销</Button>
            </div>
          </div>
          <Menu theme={"light"} onClick={() => alert`1`} mode="horizontal" defaultSelectedKeys={['2']} />
        </Header>
        <Layout>
          <Sider collapsedWidth={'60'} collapsed={collopse} style={{ width: 'auto', borderRight: '1px solid #e2e2e2', boxShadow: '2px 2px 2px 2px #e2e2e2' }}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="vertical"
              theme="light"
              inlineCollapsed={true}
              items={items}

              style={{ height: 'calc(100vh - 70px)', }}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <SubAppCom url={appUrl.url} layout={appUrl.layout} onLayoutChange={(layout) => { appUrl.layout = layout; }}></SubAppCom>

            </Content>
          </Layout>
        </Layout>
        <Layout style={{
          position: 'fixed',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '25px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0px 5px',
          background: 'rgb(112,82,151)', color: '#fff'
        }} >
          <div style={{ width: '100vw', padding: "5px" }} >
            <span style={{ width: '250px', display: 'inline-block' }}>应用数量</span>
            <span style={{ width: '250px', display: 'inline-block' }}>
              工具条

            </span>
          </div>

        </Layout>
      </Layout>
      {datePicker}

      {/* {appUrl.layout == SubAppLayout.embed ? <MainLayout>   <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', padding: '12px' }}>
          <Button>按钮</Button>
          <div>应用列表</div>
          <div style={{ padding: '12px' }} onClick={() => { setAppUrl(apps[0]) }}>应用1</div>
          <div style={{ padding: '12px' }} onClick={() => { setAppUrl(apps[1]) }}>应用2</div>

        </div>
        <SubAppCom url={appUrl.url} layout={appUrl.layout} onLayoutChange={(layout) => { appUrl.layout = layout; }}></SubAppCom>

      </div></MainLayout> : <SubAppCom url={appUrl.url} layout={appUrl.layout} onLayoutChange={(layout) => { appUrl.layout = layout }}></SubAppCom>}
 */}


    </div >
  )
}
