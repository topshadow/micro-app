import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
// import { plugin } from './lib/meta/control'

if (window['envirment'] == 'office') {
    import('./plugin')
} else {
    window;
    (function (win: any) {
        debugger;
        // plugin.Asc = win.Asc;

    })(window)

    debugger;

    createApp(App).mount('#app')

}

