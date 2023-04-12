import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
let currentContentControl: any;
import { createRoot } from 'react-dom/client';
import { Button, Form, Input } from 'antd';
setTimeout(() => oldWindow = window, 3000);


/** 电子病历组件 */
interface MetaComponent {
  label: string;
  componentType: 'checkbox' | 'select';
  table: string;
  fields: string | string[];
  labelKey: string;
  valueKey: string;


}
/** 电子病历元数据 */
interface EmrMeta {
  components: MetaComponent[];

}

function loadEmr() {
  return fetch('http://localhost:3000/api/graphql', {
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
    return JSON.parse(data.data.emr.meta || '{}');

  })

}

interface Meta {
  componentType: 'checkbox';
  table?: string;
  fields?: string

}
window.currentMeta = null;

declare var window: any;
function changeComponent() {

  debugger;

  currentContentControl.Tag = JSON.stringify(window.currentMeta);
  window.Asc.plugin.executeMethod("RemoveContentControl", [511]);
  window.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": 511, Tag: JSON.stringify(window.currentMeta), PlaceHolderText: 'checkbox', Lock: 3, }]);

  debugger;



}

window.setCurrentControl = null;
let oldWindow: any = null;
let ctrl = window;
function init() {
  // oldWindow = window;
  // ctrl['oldWindow'] = window;






  window.Asc.plugin.init = function (text: string) {
    // let checkbox = document.getElementById('checkbox') as any;
    // checkbox.onclick = function () {
    // window.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": 511, Tag: JSON.stringify({ componentType: 'checkbox' }), PlaceHolderText: 'checkbox', Lock: 3, }]);
    // }

  }


  window.Asc.plugin.event_onClick = function (isSelectionUse: boolean) {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj: any) {
      window.Asc.plugin.currentContentControl = obj;
      debugger;
      currentContentControl = obj;
      var controlTag = obj ? obj.Tag : "";
      let meta = {} as any;
      try {
        meta = JSON.parse(controlTag);
        window.setCurrentControl(meta);

      } catch (e) {
        alert(e);
        meta = {}
      }
      // if (meta.componentType) {
      //   // alert(meta.componentType);
      //   showComponentSetting(meta)
      // }
    })
  }
  

  window.Asc.plugin.button = function (id: string) {
    this.executeCommand("close", "");
  };

}


enum Mode {
  Design,
  Preview
}

function Main() {
  const [mode, setMode] = useState(Mode.Design);
  const [control, setControl] = useState(null);
  const [meta, setMeta] = useState(null);
  loadEmr().then(meta => setMeta);
  window.setCurrentControl = setControl;

  return <div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button style={{ width: '45%' }} type={mode == Mode.Design ? 'primary' : 'default'} onClick={() => { setMode(Mode.Design); window.parent.setMode('design'); }}>设计</Button>
      <Button style={{ width: '45%' }} type={mode == Mode.Preview ? 'primary' : 'default'} onClick={() => { setMode(Mode.Preview); window.parent.setMode('preview') }} >预览 </Button>

    </div>
    <div>
      {/* <h3>控件内容</h3> */}
      {/* <hr /> */}
    </div>
    <div>
      {control ? DynamicControl(control as any) : null}
      {!control || <div style={{ position: 'fixed', bottom: '15px', width: '100%' }}>
        <hr></hr>
        <Button type={'primary'} style={{ width: '100%', }} onClick={changeComponent}>更新</Button>

      </div>}
    </div>
  </div>
}

function DynamicControl(meta: Meta) {
  let component = null;
  switch (meta.componentType) {
    case 'checkbox':
      return <DynamicCheckBox meta={meta}></DynamicCheckBox>
  }
}
function DynamicCheckBox(prop: { meta: Meta }) {
  const [meta, setMeta] = useState(Object.assign({}, prop.meta));
  meta.table
  const [fields, setFields] = useState(meta.fields);

  window.currentMeta = meta;

  return <div>
    <div>复选框</div>
    <Form.Item
      label="数据表"
      name="username"
      rules={[{ required: true, message: '请输入用户表!' }]}
    >
      <Input placeholder={'数据表'} value={prop.meta.table} onChange={(v) => { meta.table = v.target.value; setMeta({ ...meta }) }} defaultValue={prop.meta.table} />
    </Form.Item>
    <Form.Item
      label="数据表"
      name="username"
      rules={[{ required: true, message: '请输入用户表!' }]}
    >
      <Input placeholder={'字段列表'} value={prop.meta.fields} onChange={(v) => { meta.fields = v.target.value; setMeta({ ...meta }) }} defaultValue={prop.meta.fields} />
    </Form.Item>


  </div >
}

createRoot(document.getElementById('root') as HTMLDivElement).render(<React.StrictMode><Main></Main><App /></React.StrictMode>);


(function (window) {
  window.Asc; debugger; init(); setTimeout(() => {
    debugger;
    window.Asc.plugin.executeMethod("PasteText", ["ONLYOFFICE for developers"]);
    window.Asc.plugin.info.data = 'test'
  }, 5000);
})(window)
