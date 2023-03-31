import { CalendarEvent, CommandData, eventBus } from '../utils/index';
// import { AppSchell } from '../shell/index';

if ((window as any)['id'] == 'parent') {
    let statusEl = document.getElementById('status');
    let calenderEl = document.getElementById('calender') as HTMLInputElement;

    eventBus.startEventListener();
    eventBus.onStarTask = (cmd: CommandData) => { statusEl.innerText = eventBus.status; alert('开始任务' + cmd.command) };

    // eventBus.startCallback();
    let eventListen = new CalendarEvent((_: any) => { calenderEl.value = ''; calenderEl.placeholder = '显示日期' });
    // eventBus.registerListener('test', (_: any) => alert('command'));
    (window as any)['p'] = {
        backData: () => eventListen.emit(new Date(calenderEl.value)),
        removeListener: () => eventListen.data,
        displayEventData: () => alert(JSON.stringify(eventListen.data))
    }


}

