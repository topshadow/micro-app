<template>
<h1>hello {{ JSON.stringify(control) }}
<Button>hello</Button>
</h1>
</template>
<script setup lang="ts">
  import { Button } from 'ant-design-vue';

import {onMounted,ref} from 'vue';
let control=ref({});
onMounted(()=>{
setInterval(()=>{
    control.value= window['control'];

},1000)

});

</script>