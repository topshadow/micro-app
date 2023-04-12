<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {DeleteOutlined} from '@ant-design/icons-vue'
import {Tabs,TabPane,Button,Tree,Input,Textarea,InputNumber}from 'ant-design-vue';
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue';
import { TreeDataItem } from 'ant-design-vue/lib/tree';
import {eventBus} from './lib/events';
const controll= ref({});
const controllList= ref([]);
const jsonTree= ref({content:[]});
const treeData=ref([]);


const activeKey= ref('design');
const controlIndex=ref(0);
const controlId=ref('');
const controlPid=ref('');
const controlParentPosition=ref(0);
const controlJson=ref('');

onMounted(()=>{
  setInterval(()=>{
    controll.value=window['control'];
    controllList.value=window['controlList'];
    if(window['jsonTree']){
      console.log('json_Tree content length:'+jsonTree.value.content.length)
    }
    
  },50000);
  eventBus.$on('domtree',(args)=>{
    jsonTree.value=args;
    debugger;
   treeData.value= parseTreeJson(jsonTree.value as any);

  
  });
})
function refresh(){
  window['Asc'].plugin.executeMethod("GetAllContentControls");

}
function getHtml(){
  window['Asc'].plugin.executeMethod ("GetFileHTML", null, function (res) {
    console.log (res)
});
}
function getLabel(tag:string){
 
  try{
 let meta= JSON.parse(tag);
   return meta.placeholder;
  }catch(e){
    return '常规控件'
  }
}

function removeControl(c){
 let meta= JSON.parse(c.Tag);
  // alert(meta.id+''+(c.id==meta.id))
  // alert(c.Id);

  window['Asc'].plugin.executeMethod("RemoveContentControl", [c.Id]);
   setTimeout(() => {
    refresh()
   }, 3000);

}
function convertDocument(){
  window['Asc'].plugin.executeMethod ("ConvertDocument", ["html", false, false, true, false], function (sOutput) {
    console.log(sOutput)
});
}
function getAllFields(){
  window.Asc.plugin.executeMethod ("GetFields", null, function (res) {
    console.log ("First field: " + res)
});
}
function getSelectionType() {
    window.Asc.plugin.executeMethod("GetSelectionType", [], function (sType) {
        console.log(sType);
    })
}

function getAllForms(){
       
       window.Asc.plugin.executeMethod ("GetAllForms", null, function (data) {
           console.log(data);
           for (var i = 0; i < data.length; i++) {
       if (data[i].Tag == 11) {
           this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
           break;
       }

   }
});
   }
function getAllOleObjects(){
  window.Asc.plugin.executeMethod ("GetAllOleObjects", ["asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}"], function (data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        if (data[i].InternalId == "5_665") {
            this.Asc.plugin.executeMethod ("SelectOleObject", [data[i].InternalId]);
            break;
        }
    }
});
}
function getJson(){
  
  window.Asc.plugin.callCommand(function(){  var oDocument = Api.GetDocument();
     let json= oDocument.ToJSON();
     Asc.data=json;
  frames[0].window.eventBus.$emit('domtree',JSON.parse(json));
    console.log(json)
  }
  ,false,true);

        
}

interface  JsonDom{
  type: "document";
  content:JsonNode[]

}
interface JsonNode{
  
            "bFromDocument": boolean,
            "pPr": {
                "bFromDocument": boolean,
                "type": "paraPr"
            },
            "rPr": {
                "b": boolean,
                "bCs": boolean,
                "highlight": "none",
                "bFromDocument": boolean,
                "type": "textPr"
            },
            "content": JsonNode[]|string;
            "changes": [],
            "type": "paragraph"|   "paraDrawing"
        }



function parseTreeJson(json:JsonDom):TreeDataItem[]{
  let result:TreeDataItem[]=[];
  json.content.forEach(item=>{
    
    let top:TreeDataItem={key:Math.random(),title:getContentType(item)+'-'+getContentText(item) ,children: typeof item.content=='string'?[]: item.content.map(child=>  parseJsonChildren(item))};
    result.push(top)
  });

  return result;
}
function getContentText(content:JsonNode|string){
if(typeof content=='string'){
  return content;
}else{
  return '';
}
}
function getContentType(content:JsonNode){
  let type='';
  if(content.type){
    return content.type;
  }
  if(content.rPr){
    type+=content.rPr.type;
    
  }
  if(content.pPr){
    type+=content.pPr.type
    
  }
  return type;

}

function parseJsonChildren(child:JsonNode):TreeDataItem{
  let childNode= {key:Math.random(),title:getContentType(child)+getContentText(child),children:[]as TreeDataItem[]} as TreeDataItem ;
  if(child.content){
      if(child.content.length){
        childNode.children=typeof(child.content)=='string'?[]: child.content.map(item=>parseJsonChildren(item));
      }
    }
    return childNode;
}

function getElement(){
  window.Asc.scope.st=controlIndex.value

  window.Asc.plugin.callCommand(function(){  var oDocument = Api.GetDocument();
   let el = oDocument.GetElement(Asc.scope.st);
   console.log('start get elmeent');
   console.log(oDocument.GetContent(false)[0].ToJSON()) 


// console.log(el);
// console.log(el.ToJSON());
let children= el.GetElement(0);
console.log('children ',children)
children.Select();
let sub= children.GetRange(0,1);

console.log('children select');
console.log(children.ToJSON())
children.Delete()
console.log(sub.ToJSON());
// Api.ReplaceDocumentContent(oDocument.GetContent(false)[0] )

}
  ,false,true);
  
}
function addDomWithId(){
  window.Asc.plugin.callCommand(function(){ 
  var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a new paragraph");
let json= oParagraph.ToJSON(false,true);
    json = JSON.parse(json);
    if(json.rPr){
      json.rPr.id=Date.now();
      console.log('设置控件id')

    }
    json.footnotes=[{id:Date.now()}]
    json=JSON.stringify(json);
    var oParagraphFromJSON = Api.FromJSON(json);

    // oDocument.AddElement(0, JSON.stringify(json));
    oDocument.AddElement(0, oParagraphFromJSON);
    console.log('hah',json)


},false,true);
}
function addFormGroup(){
  
  window.Asc.plugin.callCommand(function(){
    var oDocument = Api.GetDocument();

var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a tag set to it.");
oBlockLvlSdt.SetTag("This is a tag.");
oDocument.AddElement(0, oBlockLvlSdt);
var oTag = oBlockLvlSdt.GetTag();
var oParagraph = oDocument.GetElement(1);
oParagraph.AddText("Tag: " + oTag);


  console.log('getFormGroup called')



})
}

function getFormGroup(){
  let command='select-control';
  let id =controlId.value;
  window.Asc.scope.command=command;
  window.Asc.scope.id=id;

  window.Asc.plugin.callCommand(function(){
    let {command,id}= Asc.scope;
 
    function getFormGroupById(id){
 
      let doc= Api.GetDocument();
 let controls= doc. GetAllContentControls();
  console.log(controls);
  for(let control of controls){
   let controlTag= control.GetTag();

    console.log('control tag:'+controlTag);
    try{
     let tag= JSON.parse(controlTag);
     if(tag.id==id){
      console.log('找到对应控件',controlTag);
      return control;
     }
    }catch(e){
      if(e){
        console.error(e)
      }
    }

  }
}
if(command=='select-control'){
 let control= getFormGroupById(id);
  console.log('get control',control);
  if(control){
  let parentPosition= control. GetPosInParent() ;
 let parentControl= control.GetParentContentControl();
    if(parentControl){
     try{
      let parentControlTag= JSON.parse(parentControl.GetTag());
     let id= parentControlTag.id;
     let tagObj= JSON.parse(control.GetTag());
     tagObj.pid=id;
     tagObj.parentPosition=parentPosition;
     console.log(`parent position ${parentPosition}`)
    
     control.SetTag(JSON.stringify(tagObj));
     console.log('select-control',control.ToJSON());
     }catch(e){
      console.error('parse parent control tag error',e)
     }
      
      
    }
    
    console.log(`parent control`,parentControl)

  }
}
if(command=='add-control'){

  
}

  })
  
}

function addControlByPidAndPositionAndJson(){
  let parentPosition=controlParentPosition.value;
  let parentId=controlPid.value;
  let cjson=controlJson.value;
  window.Asc.scope.parentPosition=parentPosition;
  window.Asc.scope.parentId=parentId;
  window.Asc.scope.cjson=cjson;
  
  
  window.Asc.plugin.callCommand(function(){
    let {parentId,parentPosition,cjson}=Asc.scope;
    let doc= Api.GetDocument();
 let controls= doc. GetAllContentControls();
 for(let control of controls){
  let tag =control.GetTag();
  try{
     let tagObj= JSON.parse(tag);
     if(tagObj){
      if(tagObj.id==parentId){
        let newBox=Api.FromJSON(cjson);
        control.AddElement(newBox,parentPosition);
      }
     }

  }catch(e){}
 }
  });

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
      <Button @click="refresh">刷新</Button>
      <Button @click="getHtml">html</Button>
      <Button @click="convertDocument()">转换文档</Button>
      <Button @click="getAllFields()">字段</Button>
      <Button @click="getSelectionType()">获取选择类型</Button>
      <Button @click="getAllForms()">所有表单</Button>
      <Button @click="getAllOleObjects()">所有ole对象</Button>
      <Button @click="getJson()">json结构对象</Button>
<div>
  {{ controlIndex }}

</div>
      <Input type="number"  v-model:value="controlIndex" />
      <Button @click="getElement()">显示下标元素</Button>
      <Button @click="addDomWithId()">添加iddom</Button>
      <Button @click="addFormGroup()">添加表单组</Button>
      <Input v-model:value="controlId" placeholder="选中控件id" />
      <Button @click="getFormGroup()">选取对应控件</Button>
      <Input v-model:value="controlPid" placeholder="控件上级id" />
      <InputNumber id="inputNumber" v-model:value="controlParentPosition" placeholder="上级控件位置" :min="0" :max="10" />

      <Textarea v-model:value="controlJson" placeholder="控件json"></Textarea>
      <Button @click="addControlByPidAndPositionAndJson()">恢复控件</Button>
      
         
      
      
    <div style="max-height:500px;overflow-y: scroll;padding-bottom: 30px;">
      <Tree 
      :default-expand-all="true"
    :tree-data="treeData" >  </Tree>
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
