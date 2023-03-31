export interface Task {

}


export abstract class EventListener {
    listenerId: string;
    data: any;
    abstract emit: (data: any) => void
    abstract handle: Function;


}



enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}

interface CommandData {
    taskId?: string;
    type: 'invoke' | 'get';
    command: 'calender' | 'change-layout' | 'test';
    data?: { layout: SubAppLayout }
}


export class CalendarEvent extends EventListener {
    listenerId: string = 'calendar' + Date.now();
    data: any
    emit(date: Date) {
        alert(JSON.stringify(this.data));
        window.frames[0].postMessage({ date, taskId: this.data.taskId }, '*')
    }
    handle: Function;
    constructor(handle: Function) {
        super();
        this.handle = handle;
        if (!eventBus.started) {
            eventBus.startEventListener();
        }
        eventBus.registerListener('test', this);

    }

    startListen() {

    }
    removeListener() {
        let values = eventBus.callbacks
        for (let key in values) {
            let callbacks = eventBus.callbacks.get(key);
            if (callbacks) {
                let exsitListener = callbacks.find(c => c.listenerId == this.listenerId);
                if (exsitListener) {
                    let indexOf = callbacks.indexOf(exsitListener);
                    if (indexOf > -1) { callbacks.splice(indexOf, 1) };
                }
            }
        }


    }

}



export let eventBus = new class EventBus {
    started: boolean = false;
    listeners: Map<string, EventListener[]> = new Map<string, EventListener[]>();
    callbacks: Map<string, Function[]> = new Map<string, Function[]>();
    constructor() {

    }
    callTask(event: CommandData, callback: Function) {
        event.taskId = event.type + Date.now();
        let callbacks = this.callbacks.get(event.taskId);
        if (callbacks) {
            callbacks.push(callback);
        } else {
            this.callbacks.set(event.taskId, [callback]);
        }
        window.parent.postMessage(event, '*');
    }

    startEventListener() {
        window.addEventListener('message', (msg) => {
            let type = msg.data.type
            let callbacks = this.callbacks.get(type);
            if (callbacks) {
                callbacks.forEach(c => c(msg.data))
            }
        })
    }

    registerListener(eventType: string, callback: EventListener) {
        let listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.push(callback);
        } else {
            this.listeners.set(eventType, [callback])
        }
    }




}