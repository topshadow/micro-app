import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AutoSelect } from './components/AutoSelect';
import './index.css'
// 全局变量声明

/** 当前电子病历的元数据 
 * components    组件定义的列表
 */
let global_meta = {};
/** 当前模式 design   preview */
let mode = 'design';
declare var window: any;
window.addEventListener('message', (e: any) => {
  debugger;
});

window.setMode = function (setMode: any) {
  mode = setMode;
}


function clearCustomElement() {
  let customEl = document.getElementById('my-custom'); if (customEl) {
    customEl.remove();
    let els = document.getElementsByClassName('ant-select-dropdown ')
    for (let el of els) {
      el.remove()
    }
  }
}
fetch('http://localhost:3000/api/graphql', {
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    query: `query {
    emr(where:{id:"clg4rlpci00007m4w0vzmn03w"}){
      title,
      id,
      meta,
      createAt,
      updateAt
    }
  }`
  }),
  method: 'post'

}).then(async rtn => {
  let data = await rtn.json();
  global_meta = JSON.parse(data.data.emr.meta || '{}');

  debugger;
})

function getComponentHtml(type, data) {
  let componentHtml = `<input />`
  switch (type) {
    case 'checkbox':
      componentHtml = `<div>` + data.map(li => ` <input type='checkbox' />` + li.label).join('\n') + `<br></div>`
      break;
    case 'radio':
      componentHtml = `<input type='radio' />`
      break;
    case 'dropdown':
      componentHtml = `<select >
          ${data.map(li => `<option value="${li.value}">${li.label}</option>`).join('\n')}
          </select>`
  }
  let str = `<div >
  <div style="width: 100px;word-wrap: break-word;height: 80px;position: absolute;left: -90px;background: #e2e2e2;    background: #fff;
  box-shadow: 3px 3px 3px 3px #e2e2e2;
  border-radius: 6px;
  padding: 5px;">组件内容:
${componentHtml}
  </div>
  </div>`;
  return str;
}

setTimeout(() => {
  window;
  debugger;
  window.Asc.a = 'test-a';
  let editor_sdk = document.getElementById('editor_sdk') as HTMLDivElement;

  // window.Asc.plugin.a = 'test-a';
  window.asc_docs_api.prototype.asc_registerCallback('asc_onHideContentControlsActions', () => { clearCustomElement() });
  window.asc_docs_api.prototype.asc_registerCallback('asc_onShowContentControlsActions', (arg, x, y) => {
    
    clearCustomElement();
    debugger;
    let formPr = arg.pr.get_Tag();
    let data = JSON.parse(formPr);
    let datasource = data.datasource;
    let html = ``;

    html = `暂无数据源`
    let divEl = document.createElement('div') as any;
    divEl.innerHTML = html;
    divEl.id = "my-custom";

    divEl.style = `position: absolute; z-index: 10000; left: ${x - 253}px; top: ${y + 30}px;`;
    editor_sdk.appendChild(divEl);
    ReactDOM.createRoot(divEl).render(
      <AutoSelect allowSearch={false} table='users' left={x} top={y} fields={['id', 'name', 'username']} labelKey={'username'} valueKey={'id'} maxItemDisplay={5} />
      // <div>hello</div>
    )


    // alert('x:' + x + ' y:' + y + ' tag:' + formPr);
    debugger;




    setTimeout(() => {
      editor_sdk.childNodes.forEach(n => {
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

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
