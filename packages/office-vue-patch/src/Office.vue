<template>
    <div>
    <div v-if="control">
        <!-- {{ JSON.stringify(control) }} -->
    <div style="background-color: #fff;z-index: 99999">
    <div v-if="control.componentType=='checkbox'">
checkbox
</div>
<div v-if="control.componentType=='datetime'">
    <DatePicker :open=true   :locale="locale" />
    

</div>
<div v-if="control.componentType=='select'" >
<Select :options="options"   :open="true" @change="changeValue" placement="bottomLeft" style="width:200px;" ></Select>
</div>
</div>
</div>
</div>
</template>
<script setup lang="ts">

  import { Button,ConfigProvider,DatePicker ,Select} from 'ant-design-vue';
  import dayjs from 'dayjs';
  import 'dayjs/locale/zh-cn';
  import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import {onMounted,reactive,ref} from 'vue';
import { Meta } from './lib/meta/meta';
import { Datasource } from './lib/datasource/datasource';
import { addControl, controlsMap } from './lib/meta/control';

const locaelVar=ref(locale);
const value=ref(null);
const options=ref<{label:string,value:string}[]>([]);
dayjs.locale('zh-cn');

let control=ref({}  as Control);
onMounted(()=>{
    setTimeout(() => {
        frames[0].window.eventBus.$on('selectControl',(ctrl:Control)=>{
            control.value=ctrl;  

            if(ctrl){

        if(control.value.table&&control.value.fields){
       let datasource= new Datasource(control.value.table,control.value.fields);
        datasource.queryObject().exec().then(rtn=>{
            let opts=rtn.data[control.value.table];
                options.value=opts.map((opt:any)=>{return{label:opt.name,value:opt.id}});
        });
    }

    }
    })  
    }, 8000);
 


});

function changeValue(e){
    if(control.value.id){
    // let currentPr=controlsMap[control.value.id];
    let placeholder=options.value.find(v=>v.value==e);
        if(placeholder){

            control.value.placeholder=placeholder.label;
            control.value.value=placeholder.value;
        }

            debugger;
            myUtil.setControlValue(control.value as any,placeholder?.value, placeholder?.label);
            control.value=null as any;


    }}




</script>