<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {DeleteOutlined, DownOutlined,CarryOutOutlined,DownloadOutlined,FolderOpenOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  InsertRowBelowOutlined,
  CalendarOutlined

} from '@ant-design/icons-vue'
import {Tabs,TabPane,Button,Tree,Input,Textarea,InputNumber,Modal,Select,Checkbox,FormItem}from 'ant-design-vue';
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue';
import { TreeDataItem } from 'ant-design-vue/lib/tree';
import {eventBus} from './lib/events';
import {client} from './lib/datasource/client';

import gql from 'graphql-tag';
import { FormContextManager } from './lib/form-context-manager';
const selectedEmr=ref<Emr>({meta:''})
const isDebug=ref(true)
const controll= ref({});
const controllList= ref<Control[]>([]);
const jsonTree= ref<Control[]>([]);
const treeData=ref<TreeDataItem[]>([]);
const selectItemId=ref(null);
const showControlJson=ref(false);
const emrs=ref<Emr[]>([]);
const showEmrTitleModal=ref(false);
const formContextManager =ref(new FormContextManager())



const activeKey= ref('design');
const controlIndex=ref(0);
const controlId=ref('');
const controlPid=ref('');
const controlParentPosition=ref(0);
const controlJson=ref('');
const selectedControl=ref<Control|null>(null);
const formValue = ref<any>({});
const showConditionModal=ref(false);
const selectedEmrMeta=ref(null);
onMounted(()=>{

  loadEmrs();
  eventBus.$on('all-dom-tree',(d: string)=>{
  selectedEmr.value.meta=d;
  showEmrTitleModal.value=true;
  })
  eventBus.$on('domtree',(args:Control[])=>{
    // console.log(args)
    controllList.value=[];
    treeData.value=[];
    setTimeout(() => {
      controllList.value=args;
    treeData.value=transformTreeItems(args);

      
    }, 100);
    eventBus.$on('control-value-change',(event:ControlValueChangeEvent)=>{
      console.log('app start',event);
    formValue.value[event.control.id as string]=event.newValue;
// console.log(formValue);
      controllList.value.forEach(c=>{
        if(c.conditions){
          c.conditions.forEach(cc=>{
            console.log('条件',c.conditions);
            // 删除控件
            if(formValue.value[cc.fieldControlId]!=cc.value){
              Asc.scope.control=c;


              Asc.plugin.callCommand(function(){
                let {control}=Asc.scope;

                let doc=Api.GetDocument();
                console.log('doc',doc);
                myUtil.deleteControlById(doc,control.id)
              },false,true);
            }else{
              Asc.scope.control=c;
              Asc.plugin.callCommand(function(){
                let {control}=Asc.scope;
                
                myUtil.recoverControlGroup(Api,control.pid,control);
              })

            }
          })
        }
      })
    })
  });
  eventBus.$on('selectControl',(ctrl:Control)=>{
    controll.value=ctrl;
  })
})

function loadEmrs(){
  emrs.value=[]
  client.query({query:gql`query{
  emrs{
    id,
    title,
    meta
  }
}`}).then(rtn=>{
  console.log(rtn.data);
  emrs.value=rtn.data.emrs;
});

}
function uploadEmr(){
  
    client.query({
      query:gql`query MyQuery ($title:String!,$content:String!){
  putEmrContent(title:$title,content:$content){
    success
  }
  
}`,
variables:{
content:selectedEmr.value.meta,
title:selectedEmr.value.title 
}
    }).then(rtn=>{
      loadEmrs();
    })
    showEmrTitleModal.value=false;
}
function transformTreeItems(controls: Control[]):TreeDataItem[]{
 let top= controls.filter(c=>!c.pid);
  return top.map(item=>{return { key:item.id,title:item.label+''+item.id+'-p'+item.parentPosition+'-pid-'+item.pid,children:transformTreeItem(item,controls)   } as TreeDataItem })
}
function transformTreeItem(control:Control,controls:Control[]):TreeDataItem[]{
       return controls.filter(c=>c.pid==control.id).map(item=>{
            return {key:item.id,title:item.label+''+item.id+'-p'+item.parentPosition+'-pid-'+item.pid,children:  transformTreeItem(item,controls)} as TreeDataItem
        });
}


function refreshTrees(){
window.Asc.plugin.callCommand(function(){
console.log('refresh tree');
let json= myUtil.getAllControlTags(Api.GetDocument());
  console.log(json);
  frames[0].window.eventBus.$emit('domtree',json)
  // window.refreshTree();
})

}
function selectItem(e:string[]){
  console.log(e);
  if(e.length>0){
    let selectedItem= controllList.value.find(c=>c.id==e[0]);
    let exsist= controllList.value.filter(c=>c.id==e[0]);
    console.log('exsit',exsist)
 selectedControl.value=selectedItem  as Control;
 console.log(selectedControl.value);

  }
 
}

function deleteSelectControl(){
  if(selectedControl.value){
    
      Asc.scope.id=selectedControl.value.id;
    Asc.plugin.callCommand(function(){
      let {id}=Asc.scope;
      let doc =Api.GetDocument();
      myUtil.deleteControlById(doc, id);
    },false,true)
    
  }
}
function getControlComponentTypeById(id: string | number | undefined){
  let control = controllList.value.find(c=>c.id==id);
  if(control){
    return control.componentType
  }
}
function recoverControl(){
  if(selectedControl.value){
    console.log(controllList.value);
    JSON.parse(selectedControl.value.originGroupJson as string);
    Asc.scope.control=selectedControl.value;
  
    Asc.plugin.callCommand(function(){
      let {control}=Asc.scope;
      console.log('恢复组件树');
      console.log(control);
      
      myUtil.recoverControlGroup(Api,control.pid,control);
      
    },false,true)
  }
}
function addCondition(){
showConditionModal.value=true;
}

function setControlCondition(control:Control){
 let mainWindow= window.parent.window;
  mainWindow.myUtil.setControlCondition(control);
}

function saveEmr(){
  Asc.plugin.callCommand(function(){
   let doc= Api.GetDocument();
    let pluginWindow=frames[0].window;
    pluginWindow.eventBus.$emit('all-dom-tree',doc.ToJSON())
  },false,true)

}
function deleteSelectedEmr(){
  if(selectedEmrMeta.value){
     let c= emrs.value.find(emr=>emr.meta==selectedEmrMeta.value);
      if(c){
        c.id;
        debugger;
        client.mutate({mutation:gql`mutation($id:String!){
  deleteOneEmr(where:{id:$id}){
    createAt
  }
}`,variables:{id:c.id}}).then(r=>{
  loadEmrs();
})
      }
    }
}

function reloadEmr(e:string){
  Asc.scope.json=e;
  console.log(e);
  selectedEmrMeta.value=e;
  Asc.plugin.callCommand(function(){
    let {json}=Asc.scope;
   let dom= Api.FromJSON(json);
   console.log(dom);
   console.log(dom.GetContent,dom.GetClassType,dom.GetTag,dom.prototype,dom.type,Object.keys(dom))

    // console.log(dom.ToJSON());
    Api.GetDocument().RemoveAllElements();
    dom.forEach((item,index)=>{
      Api.GetDocument().AddElement(index,item);

    })
    
  },false,true)
}
</script>



<template>
  <Modal title="保存模板" :visible="showEmrTitleModal" @ok="uploadEmr()" @cancel="showEmrTitleModal=false">
  <FormItem label="显示emr">
    <Input v-model:value="selectedEmr.title" />
    </FormItem>
  </Modal>
  <FormItem label="选择文档">
    
    <Select @change="e=>reloadEmr(e)" :options="emrs.map(e=>{return {label:e.title,value:e.meta}})"></Select>
    <Button type="dashed" @click="deleteSelectedEmr()">删除模板</Button>
  </FormItem>
  <FormItem label="调试模式">
    <Checkbox v-model:checked="isDebug"></Checkbox>

  </FormItem>
  <div v-if="isDebug">
  <div style="max-height:100px;padding: 10px 5px;overflow-y: scroll">

    {{ JSON.stringify(controll) }}

  </div>
  <div style="">
    {{ JSON.stringify(formValue) }}
  </div>
</div>
  <Tabs>
    <TabPane key="design" tab="设计"></TabPane>
    <TabPane key="new" tab="新增">
      <NewComponent :formContextManger="formContextManager" :isDebug="isDebug"></NewComponent>
    </TabPane>
    <TabPane key="preview" tab="预览">预览模式</TabPane>
    <TabPane key="domtree" tab="文档树">
      
      
      <Button @click="refreshTrees()">刷新</Button>
      <Button @click="saveEmr()">保存为模板</Button>
      <div v-if="selectedControl">
        
        <Button @click="showControlJson=true">显示控件元数据</Button>
        <Button @click="deleteSelectControl()">删除</Button>
        <Button @click="recoverControl()">插入</Button>
        <Button @click="addCondition()"> 添加条件 </Button>
      </div>
         
      
      
    <div style="max-height:500px;overflow-y: scroll;padding-bottom: 30px">
      
    <Tree :show-icon="true" :tree-data="treeData" @select="selectItem">
      <template #icon="{componentType,key}">
        <InsertRowBelowOutlined v-if="getControlComponentTypeById(key)=='select'" />
        <FolderOpenOutlined v-if="getControlComponentTypeById(key)=='group'" />
        <CheckCircleOutlined v-if="getControlComponentTypeById(key)=='radio'" />
        <CheckSquareOutlined v-if="getControlComponentTypeById(key)=='checkbox'" />
        <CalendarOutlined v-if="getControlComponentTypeById(key)=='datetime'"></CalendarOutlined>
        

      </template>
</Tree>
  </div>
      
    </TabPane>
  </Tabs>

  <Modal v-model:visible="showControlJson" title="控件元数据" @ok="showControlJson=false">
      {{ JSON.stringify(selectedControl) }}
  </Modal>
  <Modal v-model:visible="showConditionModal" title="条件显示" @ok="showConditionModal=false;setControlCondition(selectedControl)">
    <div v-if="selectedControl">
      {{ selectedControl.placeholder }}
      <Button @click="selectedControl?.conditions?selectedControl.conditions=[{conditionType:'=',fieldControlId:'',value:'','andOr':'and'}]: selectedControl?.conditions.push({conditionType:'=',fieldControlId:'',value:'',andOr:'and'})">添加条件</Button>
      <div v-for="condition of selectedControl.conditions">
        {{ JSON.stringify(condition) }}
        <div style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;">
          <Select v-model:value="condition.fieldControlId" :options="controllList.filter(c=>c.componentType!='group').map(c=>{return {label:c.placeholder,value:c.id}})"></Select>
          <Select v-model:value="condition.conditionType" :options="[{label:'等于',value:'='},{label:'大于',value:'>'},{label:'小于',value:'<'},{label:'包含',value:'contains'} ]"></Select>
          <Input v-model:value="condition.value" />
          <Select v-model:value="condition.andOr" :options="[{label:'且',value:'and'},{label:'或',value:'or'} ]"></Select>
          
        </div>
      </div>

    </div>

  </Modal>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
