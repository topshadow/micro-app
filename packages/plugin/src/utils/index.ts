export interface Task {

}

export enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}

export interface CommandData {
    taskId?: string;
    type: 'invoke' | 'get';
    command: 'calender' | 'change-layout' | 'test';
    data?: { layout: SubAppLayout }
}





export let eventBus = new class EventBus {
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