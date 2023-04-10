<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {Tabs,TabPane}from 'ant-design-vue';
import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue';
const controll= ref({});
const activeKey= ref('design');


onMounted(()=>{
  setInterval(()=>{
    controll.value=window['control']
  },1000)
})

</script>

<template>
  
  {{ JSON.stringify(controll) }}
  <Tabs>
    <TabPane key="design" tab="设计"></TabPane>
    <TabPane key="new" tab="新增">
      <NewComponent></NewComponent>
    </TabPane>
    <TabPane key="preview" tab="预览">预览模式</TabPane>
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
