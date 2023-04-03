import Head from 'next/head';
import { createContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Breadcrumb, Calendar, Layout, Menu, MenuProps, theme } from 'antd';
import { AliwangwangOutlined, LaptopOutlined, MergeCellsOutlined, CheckOutlined, NotificationOutlined, SplitCellsOutlined, UserOutlined, WindowsOutlined } from '@ant-design/icons';
import { gql, useQuery } from "@apollo/client";


import { Button, Space, Modal } from 'antd';
import type { Dayjs } from 'dayjs';
// import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import { eventBus, CalendarEvent } from '../libs/plugin';
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
import { useDebug } from '../libs/dev/debug';
import { ProSkeleton } from '@ant-design/pro-components';
import { Frame, SubApp, SubAppLayout } from '../libs/components/frame';
import { Panel, PanelGroup } from 'react-resizable-panels';
import ResizeHandle from './app-manage/ResizeHandle';

type MenuItem = Required<MenuProps>['items'][number];


function logout() {
  document.cookie = 'path=/';
  location.href = '/auth/login'
}
function getItem(
  label: React.ReactNode,
  key: React.Key,
  onClick: any,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type, onClick,
    display: true

  } as MenuItem;
}
enum ViewMode {
  Single = 'single',
  Multi = 'multi',
}
function getViewMode() {
  if (typeof window != 'undefined') {
    return localStorage.getItem('viewMode') || ViewMode.Single as ViewMode

  } else {
    return ViewMode.Single;
  }
}
function setViewMode(mode: ViewMode) {
  localStorage.setItem('viewMode', mode)
}

export const ViewModeContext = createContext({ mode: ViewMode.Single });


export default function Home() {
  const [apps, setApps] = useState<SubApp[]>([
    { title: '助手', url: 'http://192.168.10.101:3001/Samples/TypeScript/Demo/index.html', layout: SubAppLayout.embed, icon: <AliwangwangOutlined />, display: true, active: true },
    { title: '应用管理', url: '/app-manage', layout: SubAppLayout.embed, icon: <WindowsOutlined />, display: true },
    // { title: '应用管理2', url: '/app-manage2', layout: SubAppLayout.embed, icon: <WindowsOutlined />, display: true },
    // { title: '应用管理3', url: '/app-manage3', layout: SubAppLayout.embed, icon: <WindowsOutlined />, display: true },
  ]);
  let curentUserQuery = gql`query{
    currentUser{
      id,
      name,
      username,
      tenant{
        id,
        name,
        appSettings
      }
      
    }
  }`;

  const { loading, data } = useQuery<{ currentUser: { id: string, name: string, tenant: { id, name, appSettings } } }>(curentUserQuery);
  if (!loading) {
    if (data) {
      let appList = JSON.parse(data.currentUser.tenant.appSettings).appList;
      console.log(appList)
      // setApps(appList);

    }
  }






  const [count, setCount] = useState(0);



  const [collopse, setCollpse] = useState(true);
  const [isModalOpen, setModelOpen] = useState(false);
  const [calendarEvent, setCalendarEvent] = useState<CalendarEvent | null>();
  const [taskId, setTaskId] = useState<string>();
  const [currentApp, setCurrentApp] = useState<SubApp | null>(null);
  const [sidebar, setSidebar] = useState(false);
  let debug = useDebug();

  const [hideAppUrls, setHideAppUrls] = useState([]);
  // @ts-ignore
  const [items, setItems] = useState<(MenuItem & { display: boolean })[]>(apps.map(app => getItem(app.title, app.url, () => activeApp(app), app.icon)).concat(getItem('排班', '排班', null, <MailOutlined></MailOutlined>, apps.map(app => getItem(app.title, 'toggle-' + app.title, (item) => { hideAppUrls.indexOf(app.url) < 0 ? setHideAppUrls(hideAppUrls.concat(app.url)) : setHideAppUrls(hideAppUrls.splice(hideAppUrls.indexOf(app.url), 1)) }, (<div>{hideAppUrls.indexOf(app.url) <= -1 ? <CheckOutlined /> : null}</div>))))));
  let menuItems = items.filter(item => {
    let app = hideAppUrls.find(url => url == item.key);
    if (app) {
      return app.display
    } else {
      return true;
    }
  })

  useEffect(() => {

    if (typeof window != 'undefined') {
      setCalendarEvent(new CalendarEvent((data) => { alert('ok'); setModelOpen(true); setTaskId(id => data.taskId) }))

    }
    return () => { calendarEvent ? calendarEvent.removeListener() : null };

  }, []);

  let datePicker = <Modal title="Basic Modal" open={isModalOpen} width={'900px'} onCancel={() => setModelOpen(false)}>
    <Calendar onPanelChange={(v) => calendarEvent.emit(v.toDate())} />;

  </Modal>;
  let toggleMode = () => {

    if (getViewMode() == ViewMode.Single) {

      setViewMode(ViewMode.Multi);
      apps.forEach(app => app.active = false);
      if (currentApp) {
        currentApp.active = true;
      }

    } else {
      setViewMode(ViewMode.Single);
    }
  }
  let activeApp = (app: SubApp) => {
    if (getViewMode() == ViewMode.Single) {
      apps.forEach(app => app.active = false);
    }
    app.active = true;

    setCurrentApp(app);
    setApps(apps)
  }


  return <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="./favicon.ico" />
      <link rel='stylesheet' href={'/css'} />
    </Head>
    <ViewModeContext.Provider value={{ mode: ViewMode.Single }}>
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
            <div style={{ width: '100%' }}>菜单
              {debug ? <Button>调试</Button> : ''}
            </div>
            <div style={{ width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <>
                <Button onClick={() => setSidebar(!sidebar)}>侧边栏</Button>
                {getViewMode()}
                {getViewMode() == ViewMode.Single ? <SplitCellsOutlined title='多面板' style={{ cursor: 'pointer', marginRight: '30px' }} onClick={() => toggleMode()} /> : <MergeCellsOutlined title='单面板' style={{ cursor: 'pointer', marginRight: '30px' }} onClick={() => toggleMode()} />}
                <Button type='link' color={'primary'} onClick={() => logout()} >注销</Button>

              </>

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
              items={menuItems}


              style={{ height: 'calc(100vh - 70px)', }}
            />
          </Sider>
          <div style={{ width: '100%', height: 'calc(100vh - 100px)' }} >
            <PanelGroup autoSaveId="example" direction="horizontal">

              <>

                {apps.map(app => (<>
                  <Panel className={styles.Panel} defaultSize={20} order={1} style={{ display: app.active ? 'block' : 'none' }}>
                    <Frame appUrl={app} layoutStyle={{ display: app.active ? 'block' : 'none', height: 'calc(100vh - 100px)' }} onClose={() => { app.active = false; setApps(apps); setCount(count + 1) }} ></Frame>

                  </Panel>
                  {app.active && apps.filter(app => app.active)[apps.filter(app => app.active).length - 1] != app ? <ResizeHandle /> : null}


                </>))}
              </>
              {sidebar ? (<>
                <ResizeHandle />
                <Panel className={styles.Panel} defaultSize={20} order={1} >
                  辅助面板
                </Panel>
              </>
              ) : false}

            </PanelGroup>

          </div>
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
          <div style={{ width: 'calc(100vw - 10px)', padding: "5px" }} >
            <span style={{ width: '250px', display: 'inline-block' }}>应用:{apps.filter(app => app.active).length}/{apps.length} </span>
            <span style={{ width: '250px', display: 'inline-block' }}>
              工具条
            </span>
          </div>
        </Layout>
      </Layout>
    </ViewModeContext.Provider>
    {datePicker}
  </div>;

}
