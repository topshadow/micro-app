import { DeleteOutlined, MenuUnfoldOutlined, SplitCellsOutlined } from "@ant-design/icons";
import { ProSkeleton } from "@ant-design/pro-components";
import { Layout, Button, Menu, MenuProps } from "antd";
import { CSSProperties, useEffect, useRef, useState } from "react";
import css from './frame.module.css';
const { Header, Content, Sider } = Layout;


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
    const [loading, setLoading] = useState(true);

    return (
        <div
            style={{
                background: '#fafafa',
                padding: 24,
            }}
        >
            {loading ? <ProSkeleton type="list" /> : null}
            <iframe ref={iframeEl} src={subApp.url} onLoad={e => setTimeout(() => {
                setLoading(false)
            }, 1000)} allowFullScreen={true} style={{ border: 'none', width: '100%', minHeight: '700px', padding: '12px' }} ></iframe>
        </div>


    )

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
        type, onClick
    } as MenuItem;
}
let pluginLayoutCss = `width: 100%;
min-height: 200px;
/* padding: 12px; */
position: fixed;
right: 20px;
bottom: 57px;
width: 400px;
height: 300px;
border: none;`;

export interface CommandData {
    taskId?: number;
    type: 'invoke' | 'get';
    command: 'calender' | 'change-layout';
    data?: { layout: SubAppLayout }
}
export enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}
export interface SubApp {
    title: string;
    url: string;
    layout: SubAppLayout
    onLayoutChange?: (layout) => void,
    icon: any;
    preload?: boolean;
    active?: boolean;
    display?: boolean;
}

export function Frame({ appUrl, layoutStyle, onClose }: { appUrl: SubApp, layoutStyle?: CSSProperties, onClose?: any }) {
    const [showClose, setShowClose] = useState(false);

    return <Layout className="frame" style={{
        borderRadius: '8px',
        boxShadow: '8px 8px 8px 8px #e2e2e2',
        position: 'relative', ...layoutStyle
    }} onMouseEnter={() => setShowClose(true)} onMouseLeave={() => setShowClose(false)}>
        <DeleteOutlined onClick={onClose} style={{ position: 'absolute', fontSize: '15px', cursor: 'pointer', right: '20px', top: '20px', display: showClose ? 'block' : 'none' }} />
        <Content
            style={{
                // padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            {appUrl ? <SubAppCom title={appUrl.title} icon={appUrl.icon} url={appUrl.url} layout={appUrl.layout} onLayoutChange={(layout) => { appUrl.layout = layout; }}></SubAppCom> : null}

        </Content>


    </Layout>

}