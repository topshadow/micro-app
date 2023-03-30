
export let a = { hello: () => alert('hello') }

import * as si from './service-invoke/index';

export namespace Plugin {

    export function useCalender() {

    }
    export let serviceInvoke = si;

}

export interface Task {

}

enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}

interface CommandData {
    taskId?: string;
    type: 'invoke' | 'get';
    command: 'calender' | 'change-layout';
    data?: { layout: SubAppLayout }
}


export let eventBus = new class EventBus {
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



}


export default Plugin;   