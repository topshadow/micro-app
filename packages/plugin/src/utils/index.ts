export interface Task {

}

export enum SubAppLayout {
    fullscreen = 'fullscreen',
    embed = 'embed'
}

export interface CommandData {
    taskId?: string;
    type: 'task' | 'message';
    command: 'calender' | 'change-layout' | 'test' | 'send-setting';
    data?: { layout: SubAppLayout }
    /**是否广播 */
    broadcast?: boolean;



}

export abstract class EventListener {
    listenerId!: string;
    data: any;
    abstract emit(data: any): void
    abstract handle: Function;


}




/**消息中心状态 */
export enum EventBusStatus {
    /**空闲 */
    free = "free",
    /** 处理中 */
    process = "process"
}
export let eventBus = new class EventBus {
    status: EventBusStatus = EventBusStatus.free;
    onStarTask?: (data: CommandData) => void
    onFinishTask?: (data: CommandData) => void

    processTasks: CommandData[] = [];
    started!: boolean;
    listeners: Map<string, EventListener[]> = new Map<string, EventListener[]>();
    callbacks: Map<string, Function[]> = new Map<string, Function[]>();
    constructor() {

    }

    callTask(event: CommandData, callback: Function) {
        this.startTask(event);
        event.taskId = event.type + Date.now();

        let callbacks = this.callbacks.get(event.taskId);
        if (callbacks) {
            callbacks.push(callback);
        } else {
            this.callbacks.set(event.taskId, [callback]);
        }
        debugger;
        window.parent.postMessage(event, '*');
    }
    callMessage(event: CommandData) {
        window.parent.postMessage(event, '*');
    }
    startTask(command: CommandData) {
        this.status = EventBusStatus.process;

        this.processTasks.push(command);
        if (this.onStarTask) {
            this.onStarTask(command)
        }

    }

    finishTask(taskId: string) {
        let task = this.processTasks.find(t => t.taskId == taskId);

        let taskIndex = this.processTasks.findIndex(t => t.taskId == taskId);
        if (taskIndex > -1) this.processTasks.splice(taskIndex, 1);
        if (this.onFinishTask) {
            this.onFinishTask(task)
        }
        debugger;
        if (this.processTasks.length == 0) {
            this.status = EventBusStatus.free;

        }

    }

    startEventListener() {
        if (this.started) return;
        this.started = true;

        window.addEventListener('message', (msg) => {
            let taskId = msg.data.taskId;
            let listenerId = msg.data.listenerId;
            debugger;

            /**处理任务 */
            if (msg.data.command) {
                let callbacks = this.listeners.get(msg.data.command);
                if (callbacks) {
                    debugger;
                    callbacks.forEach(c => c.handle(msg.data));
                    this.finishTask(taskId);
                }
                return

            } else {
                let callbacks = this.callbacks.get(taskId);
                if (callbacks) {
                    callbacks.forEach(c => c(msg.data));
                }
                this.finishTask(taskId)

            }


            if (listenerId) {
                alert(listenerId)
            }

        })
    }

    // startCallback() {
    //     window.addEventListener('message', (msg) => {
    //         debugger;
    //         let type = msg.data.command
    //         let callbacks = this.callbacks.get(type);
    //         if (callbacks) {
    //             callbacks.forEach(c => c(msg.data))
    //         }
    //     })
    // }


    registerListener(eventType: string, listener: EventListener) {
        let listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.push(listener);
        } else {
            this.listeners.set(eventType, [listener])
        }
    }





}


export class CalendarEvent extends EventListener {
    listenerId: string = 'calendar' + Date.now();
    data: any;
    /**事件堆栈 */
    eventStack: any[] = [];
    emit(date: Date) {
        // alert(JSON.stringify(this.data));
        debugger;

        window.frames[0].postMessage({ date, taskId: this.data.taskId }, '*');
    }
    handle: Function;
    constructor(handle: Function) {
        super();
        this.handle = (data: CommandData) => { this.data = data; handle(data) };
        if (!eventBus.started) {
            eventBus.startEventListener();
        }
        debugger;
        eventBus.registerListener('test', this);

    }

    startListen() {

    }
    // removeListener() {
    //     let values = eventBus.callbacks
    //     for (let key in values) {
    //         let callbacks = eventBus.callbacks.get(key);
    //         if (callbacks) {
    //             let exsitListener = callbacks.find(c => c.listenerId == this.listenerId);
    //             if (exsitListener) {
    //                 let indexOf = callbacks.indexOf(exsitListener);
    //                 if (indexOf > -1) { callbacks.splice(indexOf, 1) };
    //             }
    //         }
    //     }


    // }



}



export class SettingEvent extends EventListener {
    listenerId: string = 'calendar' + Date.now();
    data: any;
    /**事件堆栈 */
    eventStack: any[] = [];
    emit(date: Date) {
        // alert(JSON.stringify(this.data));
        debugger;

        window.frames[0].postMessage({ date, taskId: this.data.taskId }, '*');
    }
    handle: Function;
    constructor(handle: Function) {
        super();
        this.handle = (data: CommandData) => { this.data = data; handle(data) };
        if (!eventBus.started) {
            eventBus.startEventListener();
        }
        debugger;
        eventBus.registerListener('send-setting', this);

    }

    startListen() {

    }
    // removeListener() {
    //     let values = eventBus.callbacks
    //     for (let key in values) {
    //         let callbacks = eventBus.callbacks.get(key);
    //         if (callbacks) {
    //             let exsitListener = callbacks.find(c => c.listenerId == this.listenerId);
    //             if (exsitListener) {
    //                 let indexOf = callbacks.indexOf(exsitListener);
    //                 if (indexOf > -1) { callbacks.splice(indexOf, 1) };
    //             }
    //         }
    //     }


    // }



}

