
import { createApp } from 'vue';
import Office from './Office.vue';
import Antd from 'ant-design-vue';
import { controlsMap } from './lib/meta/control';
import { myUtil } from './lib/office-fix';

declare var window: any;


function hideApp() {
    let app = document.getElementById('app') as any;
    app.style.zIndex = -1;
    window.control = null;

}
function ShowApp(x, y) {
    let app = document.getElementById('app') as HTMLDivElement;
    app.style.zIndex = 99 + '';
    if (x || y) {
        app.style.left = x + 'px';
        app.style.top = y + 'px';

    }


}
window['ShowApp'] = ShowApp;




window['myUtil'] = myUtil;


setTimeout(() => {

    const editor_sdk = document.getElementById('editor_sdk') as HTMLDivElement;
    let appEl = document.createElement('div');
    appEl.id = 'app';
    appEl.style.position = 'absolute';
    appEl.style.left = '100px';
    appEl.style.top = '200px';
    appEl.style.zIndex = 99 + '';
    appEl.style.padding = 0 + 'px';
    appEl.style.margin = 0 + 'px';
    editor_sdk?.appendChild(appEl);

    createApp(Office).use(Antd).mount('#app');







    window.asc_docs_api.prototype.asc_registerCallback('asc_onHideContentControlsActions', () => { hideApp() });
    window.asc_docs_api.prototype.asc_registerCallback('asc_onShowContentControlsActions', (arg, x, y) => {
        let frameWindow = frames[0].window;
        frameWindow.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj: any) {
            frameWindow.Asc.plugin.currentContentControl = obj;
            debugger;
            if (obj) {
                let control = myUtil.getOfficeControlMetaWithId(JSON.parse(obj.Tag).id);
                myUtil.selectControl(control);
                if (control) {
                    ShowApp(x, y);
                } else {
                    console.log('no control find')
                }
            } else {

            }
            setTimeout(() => {
                editor_sdk.childNodes.forEach((n: any) => {
                    if (n.id) {
                        // alert(n.id)
                        if (n.id.includes('menu-container-asc-gen') && n.id != 'app') {
                            n.remove();
                        }
                    }
                });
            }, 100)

        });
        return;
        let obj = arg.obj;
        // myUtil.selectControl(null)
        let id = arg.pr.Id || arg.pr.id || arg.pr.GetId();
        debugger;

        Asc.plugin.callCommand(function () {
            let control = myUtil.getOfficeControlMetaWithId(Asc.scope.id);
            debugger;
            console.log(control)
            eventBus.$emit('selectControl', control);
        })
        ShowApp(x, y);




    });
}, 5000);







