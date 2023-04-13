
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
        app.style.left = x - 90 + 'px';
        app.style.top = y + 10 + 'px';

    }


}


function getEditFrame() {
    return window.frames[0]

}

function setEditComponent(meta: any) {
    let parent = getEditFrame();
    window['control'] = meta;
    if (parent) {
        window.frames[0].window.control = meta;

    }
}


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
        debugger;
        let obj = arg.obj;
        myUtil.selectControl(null)
        let tag = arg.pr.get_Tag();
        let id = arg.pr.get_Id();
        debugger;
        // controlsMap[id] = { pr: arg.pr, obj };
        let isComponent = true;
        let meta: any = {};
        try {
            meta = JSON.parse(tag);
            meta.id = id;
            // alert(JSON.stringify(meta))
            window['control'] = meta;
            myUtil.selectControl(meta);


        } catch {
            alert('no component')
            isComponent = false;
        }
        debugger;
        if (!isComponent) {
            window['control'] = null;
        }
        ShowApp(x, y);


        setTimeout(() => {
            editor_sdk.childNodes.forEach((n: any) => {
                if (n.id) {
                    // alert(n.id)
                    if (n.id.includes('menu-container-asc-gen') && n.id != 'app') {
                        n.remove();
                    }

                }
            }, 3000);



        })

    });
}, 5000);







