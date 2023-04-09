import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}

interface CommandData {
    taskId?: number;
    type: 'invoke' | 'get';
    command: 'calender' | 'change-layout';
    data?: { layout: SubAppLayout }
}
function callCalender() {
    // alert('发送事件')

    let hellofromApp2: CommandData = { taskId: Date.now(), type: 'invoke', command: 'calender' };
    // window.parent.window['hello'] = hellofromApp2;
    window.parent.postMessage(hellofromApp2, '*')
}

function changeAppLayout(layout) {
    let command: CommandData = { command: 'change-layout', data: { layout: SubAppLayout.embed }, type: 'invoke' };
    window.parent.postMessage(command, '*');
}
export default function Home() {
    let [getDate, setDate] = useState();

    useEffect(() => {
        if (typeof window != 'undefined') {
            // alert('start event listener')
            window.addEventListener('message', (msg) => {
                let data = msg.data as CommandData;
                if (data.command == 'calender') {
                    setDate(msg.data.date.toString())

                }
                // alert(`data` + data.data.date);
            });
        }
    })
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className={styles.title}>
                    <div>布局管理

                        <button onClick={() => changeAppLayout(SubAppLayout.embed)}>内嵌布局</button>
                        <button onClick={() => changeAppLayout(SubAppLayout.fullscreen)}>全屏布局</button>
                    </div>
                    <div>排班时间:{getDate ? getDate : ''}</div>
                    <button onClick={() => callCalender()}>打开排班系统</button>
                    Welcome to <a href="https://nextjs.org">Next.js2!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing <code>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
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

            <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

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
    )
}
