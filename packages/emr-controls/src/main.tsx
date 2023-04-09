import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
declare var asc_docs_api: any;
import { AutoSelect } from 'low-components';
setTimeout(() => {
  (window as any)['asc_docs_api'].prototype.asc_registerCallback('asc_onHideContentControlsActions', () => { let customEl = document.getElementById('my-custom'); if (customEl) customEl.remove() });
  (window as any)['asc_docs_api'].prototype.asc_registerCallback('asc_onShowContentControlsActions', (arg: { pr: { get_Tag: () => any; }; }, x: any, y: any) => {
    debugger;
    let useCustom = true;
    let data: null = null;
    let formPr = arg.pr.get_Tag();
    try {
      data = JSON.parse(formPr);

    } catch (e) {
      alert('error json ')
      useCustom = false;
    }
    /**非自定义组件 */
    if (!useCustom) {
      alert('not custom')
      return;
    }

    // alert('x:' + x + ' y:' + y + ' tag:' + formPr);
    debugger;
    // let str = `<div >
    // <div style="width: 100px;word-wrap: break-word;height: 80px;position: absolute;left: -90px;background: #e2e2e2;    background: #fff;
    // box-shadow: 3px 3px 3px 3px #e2e2e2;
    // border-radius: 6px;
    // padding: 5px;">组件内容:${formPr}
    // ${data.componentType == 'input-email' ? '<input type="email" style="max-width:100%">' : '<input  style="max-width:100%"/>'}
    // </div>
    // </div>`;
    let divEl = document.createElement('div') as any;
    // divEl.innerHTML = str;
    divEl.id = "my-custom";
    divEl.style = `position: absolute; z-index: 10000; left: ${x}px; top: ${y}px;`;

    let editor_sdk = document.getElementById('editor_sdk') as HTMLDivElement;
    editor_sdk.appendChild(divEl);
    setTimeout(() => {
      debugger;
      ReactDOM.createRoot(document.getElementById('my-custom') as HTMLDivElement).render(<React.StrictMode><Custom meta={data}></Custom></React.StrictMode>)

    }, 200);

    setTimeout(() => {
      editor_sdk.childNodes.forEach((n: any) => {
        if (n.id) {
          // alert(n.id)
          if (n.id.indexOf('menu-container-asc-gen') != -1) {
            n.remove();
          }

        }
      }, 300);

    })
  });
}, 5000);

function Custom(opt: { meta: any }) {
  alert(JSON.stringify(opt.meta));


  return <>
    <div style={{
      width: '100px',
      wordWrap: 'break-word',
      height: '80px',
      position: 'absolute',
      left: '-90px',
      background: '#e2e2e2',
      boxShadow: '3px 3px 3px 3px #e2e2e2',
      borderRadius: '6px',
      padding: '5px'
    }}>
      <h1>hello</h1>
      <AutoSelect fields={opt.meta.fields} table={opt.meta.table} labelKey="name" valueKey='id' defaultValue={1} placeholder={'选择用户'}></AutoSelect>
    </div>

  </>
}

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
