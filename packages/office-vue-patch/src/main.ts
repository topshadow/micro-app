import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import { plugin } from './lib/meta/control'
declare var window: any;
if (window['envirment'] == 'office') {
    import('./plugin')
} else {

    debugger;
    window.Asc.plugin.init = function () {
        window.Asc.plugin.onMethodReturn = function (returnValue: any) {
            var _plugin = window.Asc.plugin;
            debugger;
            if (_plugin.info.methodName == "GetAllContentControls") {
                console.log(returnValue);
                window['controlList'] = returnValue;
                debugger;
            }
        }
        // window.Asc.plugin.onCommandCallback = function (args) {

        //     console.log('on command callback', args, arguments);
        //     var plugin = window.Asc.plugin;
        //     console.log(plugin);
        //     console.log(Asc.scope.st)
        //     if (Asc.scope.st) {
        //         window['jsonTree'] = JSON.parse(Asc.scope.st)
        //         console.log('set jsontree')
        //     }
        // }



    }

    window.Asc.plugin.onBlurContentControl = function (oPr) {
        alert('blur')
    }
    window.Asc.plugin.event_onClick = function (isSelectionUse: boolean) {
        window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj: any) {
            window.Asc.plugin.currentContentControl = obj;
            debugger;
            // window['control'] = obj;
            if (!obj) {
                window.control = null;
                window.parent.window['control'] = null;

                return;
            }
            console.log('obj', obj)
            var controlTag = obj ? obj.Tag : "";
            let meta = {} as any;
            try {
                meta = JSON.parse(controlTag);
                window['control'] = meta;
                eventBus.$emit('selectControl', meta);


            } catch (e) {

                // alert(e);
                meta = {}
            }
            // if (meta.componentType) {
            //   // alert(meta.componentType);
            //   showComponentSetting(meta)
            // }
        })
    }

    createApp(App).mount('#app')

}

