import { useEffect, useState } from 'react';
// import { Split, default as SplitPane } from 'react-split-pane';
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import './spanel.module.css';
import ResizeHandle from "./ResizeHandle";
import styles from "./spanel.module.css";
import Head from 'next/head';

export default function App() {
    const [showFirstPanel, setShowFirstPanel] = useState(true);
    const [showLastPanel, setShowLastPanel] = useState(true);
    const [isBrwoser, setIsBrowser] = useState(false);

    useEffect(() => typeof window != 'undefined' ? setIsBrowser(true) : null);

    return (isBrwoser ?

        <div className={styles.Container}>
            <Head>
                <link href={'/root.css'} rel={'stylesheet'} ></link>
            </Head>
            <div className={styles.TopRow}>
                <a
                    className={styles.Link}
                    href="https://github.com/bvaughn/react-resizable-panels"
                >
                    github.com/bvaughn/react-resizable-panels
                </a>

                <p>
                    <button
                        className={styles.Button}
                        onClick={() => setShowFirstPanel(!showFirstPanel)}
                    >
                        {showFirstPanel ? "hide" : "show"} top panel
                    </button>
                    &nbsp;
                    <button
                        className={styles.Button}
                        onClick={() => setShowLastPanel(!showLastPanel)}
                    >
                        {showLastPanel ? "hide" : "show"} bottom panel
                    </button>
                </p>
            </div>
            <div className={styles.BottomRow}>
                <PanelGroup autoSaveId="example" direction="horizontal">
                    
                    {showFirstPanel && (
                        <>
                            <Panel className={styles.Panel} defaultSize={20} order={1}>
                                <div className={styles.PanelContent}>top</div>
                            </Panel>
                            <ResizeHandle />
                        </>
                    )}
                    <Panel className={styles.Panel} order={2}>
                        <div className={styles.PanelContent}>middle</div>
                    </Panel>
                    {showLastPanel && (
                        <>
                            <ResizeHandle />
                            <Panel className={styles.Panel} defaultSize={20} order={3}>
                                <div className={styles.PanelContent}>bottom</div>
                            </Panel>
                        </>
                    )}
                </PanelGroup>
            </div>
        </div> : null
    );
}
