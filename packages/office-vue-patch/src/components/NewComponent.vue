<template>
<div  v-if="attrs.isDebug">
  {{ JSON.stringify(meta) }}

</div> 

<Tabs>
<TabPane key="basic" tab="基础">
  <FormItem label="组件标签">
    <Input v-model:value="meta.label" placeholder="组件标签" />
  </FormItem>
    <FormItem label="组件类型">
    <Select v-model:value="meta.componentType" :options="options" ></Select>

</FormItem>
<FormItem label="提示文本">
  <Input v-model:value="meta.placeholder" placeholder="提示文本" />
</FormItem>


</TabPane>
<TabPane key="datasource" tab="数据源" style="padding: 20px;">
 
  <FormItem label="远程数据">
    <Checkbox v-model:checked="meta.useDatasource"></Checkbox>
  </FormItem>
  <div v-if="meta.useDatasource">
    
    <FormItem label="数据库表">
    <Select v-model:value="meta.table" :options="datasourceOptions" ></Select>
    
    

</FormItem>
<FormItem label="字段列表">
    <Select v-model:value="meta.fields" mode="multiple" :options="fieldsOptions" ></Select>
    
</FormItem>
</div>
<div v-if="!meta.useDatasource">
<FormItem label="数据项">
  <Button @click="addNewOption()">新增</Button>
            
  <div v-for="option in meta.options" style="display: grid;grid-template-columns: 3fr 3fr 1fr 1fr;">
        <Input v-model:value="option.label" placeholder="标签" />
        <Input v-model:value="option.value" placeholder="值" />
        <Button @click="addNewOption(options.indexOf(option))">新增</Button>
        <Button @click="removeOption(option)">移除</Button>
        


      </div>


    </FormItem>
  </div>
</TabPane>
<TabPane key="validation" tab="数据校验"></TabPane>
<TabPane key="datasync" tab="数据同步"></TabPane>
<TabPane key="domtree" tab="文档树"></TabPane>



</Tabs>


<Button type="primary" style="width:100%;position:fixed;bottom:20px" @click="addMetaControl">插入控件</Button>
</template>
<script setup lang="ts">
import {ref,reactive,useAttrs} from 'vue';
import {Button} from 'ant-design-vue';

import {Form,FormItem,Select,Tabs,TabPane,Input,Checkbox} from 'ant-design-vue';

import {addControl} from '../lib/meta/control';
const attrs= useAttrs();


function addNewOption(index?:number){
  if(index){
    meta.value.options.splice(index+2,0,{label:'',value:''})
  }else{
    meta.value.options.push({label:'',value:''});

  }
}
function removeOption(option:any){
 let index= meta.value.options.indexOf(option);
  meta.value.options.splice(index,1);
}

const meta= ref<Control>({options:[],componentType:'select',placeholder:'',fields:[],useDatasource:true,conditions:[]} as Control)


const  options =  ref([
  {label:'表单组',value:'group'},
  {label:'表单组-可复数',value:'group-multiple'},
  
  
  {label:"选择控件",value:'select'},
  {label:'复选框',value: 'checkbox'},
  {label: '单选框' ,value:'radio'},
  {label: '日期控件' ,value:'datetime'},
  

]);
const  datasourceOptions =  ref([{
    label:"用户表",value:'users'},
  {label:'租户表',value: 'tenants'},
]);

const  fieldsOptions =  ref([{
    label:"id",value:'id'},
  {label:'用户名',value: 'username'},
  {label:'名称',value: 'name'},
  
]);





function addMetaControl(){
  meta.value.id=Date.now();
  Asc.scope.control=meta.value;
  Asc.plugin.callCommand(function(){
    myUtil.addControl(Api,Asc.scope.control)
  },false,true)
  
}




</script> 