<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {DeleteOutlined} from '@ant-design/icons-vue'
import {Tabs,TabPane,Button,Tree,Input,Textarea,InputNumber}from 'ant-design-vue';
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue';
import { TreeDataItem } from 'ant-design-vue/lib/tree';
import {eventBus} from './lib/events';

const controll= ref({});
const controllList= ref<Control[]>([]);
const jsonTree= ref<Control[]>([]);
const treeData=ref<TreeDataItem[]>([]);





const activeKey= ref('design');
const controlIndex=ref(0);
const controlId=ref('');
const controlPid=ref('');
const controlParentPosition=ref(0);
const controlJson=ref('');

onMounted(()=>{
  
  eventBus.$on('domtree',(args:Control[])=>{
    console.log(args)
    controllList.value=args;
    treeData.value=transformTreeItems(args);
  });
  eventBus.$on('selectControl',(ctrl:Control)=>{
    controll.value=ctrl;
  })
})


function transformTreeItems(controls: Control[]):TreeDataItem[]{
 let top= controls.filter(c=>!c.pid);
  return top.map(item=>{return { key:item.id,title:item.componentType+'-'+item.placeholder,children:transformTreeItem(item,controls) } as TreeDataItem })
}
function transformTreeItem(control:Control,controls:Control[]):TreeDataItem[]{
       return controls.filter(c=>c.pid==control.id).map(item=>{
            return {key:item.id,title:item.componentType+'-'+ item.placeholder,children:  transformTreeItem(item,controls)} as TreeDataItem
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

</script>


<template>
  
  {{ JSON.stringify(controll) }}
  <Tabs>
    <TabPane key="design" tab="设计"></TabPane>
    <TabPane key="new" tab="新增">
      <NewComponent></NewComponent>
    </TabPane>
    <TabPane key="preview" tab="预览">预览模式</TabPane>
    <TabPane key="domtree" tab="文档树">
      
      
      <Button @click="refreshTrees()">刷新</Button>
      
      
         
      
      
    <div style="max-height:500px;overflow-y: scroll;padding-bottom: 30px">
    <Tree :tree-data="treeData"></Tree>
  </div>
      
    </TabPane>
  </Tabs>
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
