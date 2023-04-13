<template>
{{ JSON.stringify(meta) }}

<Tabs>
<TabPane key="basic" tab="基础">
    <FormItem label="组件类型">
    <Select v-model:value="meta.componentType" :options="options" ></Select>

</FormItem>
<FormItem label="提示文本">
<Input v-model:value="meta.placeholder" placeholder="提示文本" />
</FormItem>


</TabPane>
<TabPane key="datasource" tab="数据源">
    <FormItem label="数据库表">
    <Select v-model:value="meta.table" :options="datasourceOptions" ></Select>
    
</FormItem>
<FormItem label="字段列表">
    <Select v-model:value="meta.fields" mode="multiple" :options="fieldsOptions" ></Select>
    
</FormItem>

</TabPane>
<TabPane key="validation" tab="数据校验"></TabPane>
<TabPane key="datasync" tab="数据同步"></TabPane>
<TabPane key="domtree" tab="文档树"></TabPane>



</Tabs>


<Button type="primary" style="width:100%;position:fixed;bottom:20px" @click="addMetaControl">插入控件</Button>
</template>
<script setup lang="ts">
import {ref,reactive} from 'vue';
import {Button} from 'ant-design-vue';

import {Form,FormItem,Select,Tabs,TabPane,Input} from 'ant-design-vue';

import {addControl} from '../lib/meta/control';

const meta= ref<Control>({} as Control)


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