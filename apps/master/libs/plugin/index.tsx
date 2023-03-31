import { useEffect, useState } from "react"


class EventTask {
    taskId: string;
    args: any;
}

export abstract class EventListener {
    listenerId: string;
    data: any;
    abstract emit: (data: any) => void
    abstract handle: Function;


}



export let eventBus = new class EventBus {
    started: boolean = false;
    callbacks: Map<string, EventListener[]> = new Map<string, EventListener[]>();
    startListener() {
        if (this.started) return;
        this.started = true;
        window.addEventListener('message', (msg) => {
            // alert(msg.data.command)
            let command = msg.data.command;
            let callbacks = this.callbacks.get(command);
            if (callbacks) {
                callbacks.forEach(call => { call.data = msg.data; call.handle(msg.data) })
            }
        })
    }

    registerTask(eventType: string, callback: EventListener) {
        let callbacks = this.callbacks.get(eventType);

        if (callbacks) {
            callbacks.push(callback);
        } else {
            this.callbacks.set(eventType, [callback])
        }
    }
    removeTask(eventType: string, taskId: string) {

    }

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
            eventBus.startListener();
        }
        eventBus.registerTask('calender', this);

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

// function listenCalender(callback: (data: { taskId: string }) => void) {
//     let calenderEvent = new CalendarEvent();
//     // if (typeof window != 'undefined') {
//     eventBus.registerTask('calender', (data) => { alert(JSON.stringify(data)); calenderEvent.data = data; callback(data); });
//     // }
//     return calenderEvent;

// }




// export {
//     listenCalender
// }