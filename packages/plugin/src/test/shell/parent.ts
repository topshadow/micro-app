import { AppLoadStatus, LoadMethod } from '../../shell';
import { AppSchell } from '../../shell/app-shell';
import { CalendarEvent, eventBus, SettingEvent } from '../../utils';

if (window.name == 'shell-parent') {
    let status = document.getElementById('status');
    let child1_status = document.getElementById('child1_status');
    let app_num = document.getElementById('app_num');
    let app_finish_num = document.getElementById('app_finish_num');
    eventBus.startEventListener();
    new SettingEvent((data: any) => alert(`setting`))


    let child1 = 'child1';
    let master = 'master';
    let child2 = 'child2';

    let appShell = new AppSchell();
    appShell.addApps([
        { id: 'master', url: 'http://localhost:3000/test/shell/parent.html', loadMethod: LoadMethod.Parallel, isMaster: true },
        { id: 'child1', url: 'http://localhost:3000/test/shell/child1.html', loadMethod: LoadMethod.Preload },
        { id: 'child2', url: 'http://localhost:3000/test/shell/child2.html', loadMethod: LoadMethod.LazyLoad },

    ]);

    appShell.onAppChange = (apps) => {
        debugger;
        child1_status.innerText = appShell.getAppStatus(child1);
        app_num.innerText = appShell.apps.length + ''
        app_finish_num.innerText = appShell.apps.filter(app => app.loadStatus == AppLoadStatus.Finished).length + ''



    }



    appShell.setMasterStatus(AppLoadStatus.Finished);
    status.innerText = AppLoadStatus.Finished;

    (window as any)['parent'] = {
        onChildLoad: (appId) => { appShell.setAppStatus(appId, AppLoadStatus.Finished) },
        addChild2: () => {
            let iframe = document.createElement('iframe');
            iframe.src = "http://localhost:3000/test/shell/child2.html";
            iframe.onload = () => { alert(`child2 load`); appShell.setAppStatus(child2, AppLoadStatus.Finished) };
            document.body.append(iframe);

        }
    }
}

export let a = {
    name: 'shell-parent'
}