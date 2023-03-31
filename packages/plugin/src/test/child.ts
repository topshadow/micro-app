import { CommandData, eventBus } from '../utils/index';

if ((window as any)['id'] == 'child') {
    let resultEl = document.getElementById('result') as HTMLInputElement;

    eventBus.startEventListener();
    let taskNumEl = document.getElementById('taskNum') as HTMLInputElement;
    let statusEl = document.getElementById('status') as HTMLInputElement;


    eventBus.onStarTask = (data: CommandData) => { taskNumEl.value = eventBus.processTasks.length + ''; statusEl.innerText = eventBus.status }
    eventBus.onFinishTask = (data: CommandData) => { taskNumEl.value = eventBus.processTasks.length + ''; statusEl.innerText = eventBus.status }
    (window as any)['child'] = {
        sendMessage: () => eventBus.callMessage({ command: 'test', type: 'message' }),
        callTask: () => eventBus.callTask({ command: 'test', type: 'task' }, (data) => { debugger; resultEl.innerText = data.date; })
    }


}


