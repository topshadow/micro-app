<template>
    <div>
    <div v-if="control">
        {{ control.id }}
        <!-- {{ JSON.stringify(control) }} -->
    <div style="background-color: #fff;z-index: 99999">
    <div v-if="control.componentType=='checkbox'">
        {{ JSON.stringify(control.value) }}
        <div v-for="option in control.options">
            {{ control.value }}
    <Checkbox :checked="control.value.indexOf(option.value)!=-1"  @change="e=>toggleCheckbox(e,option)" >{{ option.label }}</Checkbox>

</div>
</div>
<div v-if="control.componentType=='datetime'">
<DatePicker mode="date" :local="locale"   @change="(e,datestr)=>changeDateValue(datestr)"></DatePicker>
</div>
<div v-if="control.componentType=='radio'">
    <div v-for="option in control.options" style="width:150px">
        <Radio :checked="(option.value==control.value)"  @change="changeValue(option.value)">{{ option.label }}</Radio>
        
    </div>
    
    
</div>

<div v-if="control.componentType=='select'" >
<Select :options="options"   :open="true" @change="changeValue" placement="bottomLeft" style="width:200px;" ></Select>
</div>
</div>
</div>
</div>
</template>
<script setup lang="ts">
import dayjs, { Dayjs } from 'dayjs';

  import { Button,ConfigProvider,DatePicker ,Select,Radio,Checkbox} from 'ant-design-vue';
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
                if(control.value.componentType=='checkbox'){
                if(!control.value.value){control.value.value=[]}
            }
            if(control.value.componentType=='datetime'){
                if(!control.value.value){control.value.value=dayjs()}
                
            }
            
        if(control.value.useDatasource&&control.value.table&&control.value.fields){
       let datasource= new Datasource(control.value.table as string,control.value.fields);
        datasource.queryObject().exec().then(rtn=>{
            let opts=rtn.data[control.value.table as string];
                options.value=opts.map((opt:any)=>{return{label:opt.name,value:opt.id}});
        });
    }else{
        options.value=ctrl.options
    }

    }
    
    })  
    }, 5000);
 


});
function toggleCheckbox(e,option:{label:string,value:any}){
   let index= control.value.value.indexOf(option.value);
   if(control.value){
    if(index>-1){
        (control.value.value as string[]).splice(index,1)

    }else{
        (control.value.value as string[]).push(option.value);   

    }
    myUtil.onControlValueChange({newValue:control.value.value,oldValue:control.value.value,control:control.value})

myUtil.setControlValue(control.value as any,option?.value, options.value.filter(o=>control.value.value.indexOf(o.value)!=-1 ).map(o=>o.label).join(','));
}else{
    console.log('no control selected so no checkbox value change')
}



}

function confirmCheckbox(){

}

function changeValue(e: string){

    // console.log('change value',e);
    if(control.value.id){
        console.log('变更组件值')
    // let currentPr=controlsMap[control.value.id];
    let placeholder=options.value.find(v=>v.value==e);
        if(placeholder){


            control.value.placeholder=placeholder.label;
            control.value.value=placeholder.value;
        }

            debugger;
            myUtil.onControlValueChange({newValue:placeholder?.value,oldValue:control.value,control:control.value})

            myUtil.setControlValue(control.value as any,placeholder?.value, placeholder?.label);
            
            control.value=null as any;

        
    }
}
function changeDateValue(v){
    console.log('change date value',v)
    if(control.value.id){
        console.log('变更组件值');
        myUtil.onControlValueChange({newValue:v,oldValue:v,control:control.value});
        myUtil.setControlValue(control.value as any,v, v);

    }
}




</script>