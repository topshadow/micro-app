export interface Task {
}
export declare enum SubAppLayout {
    fullscreen = "fullscreen",
    embed = "embed"
}
export interface CommandData {
    taskId?: string;
    type: 'task' | 'message';
    command: 'calender' | 'change-layout' | 'test' | 'send-setting';
    data?: {
        layout: SubAppLayout;
    };
    /**是否广播 */
    broadcast?: boolean;
}
export declare abstract class EventListener {
    listenerId: string;
    data: any;
    abstract emit(data: any): void;
    abstract handle: Function;
}
/**消息中心状态 */
export declare enum EventBusStatus {
    /**空闲 */
    free = "free",
    /** 处理中 */
    process = "process"
}
export declare let eventBus: {
    status: EventBusStatus;
    onStarTask?: (data: CommandData) => void;
    onFinishTask?: (data: CommandData) => void;
    processTasks: CommandData[];
    started: boolean;
    listeners: Map<string, EventListener[]>;
    callbacks: Map<string, Function[]>;
    callTask(event: CommandData, callback: Function): void;
    callMessage(event: CommandData): void;
    startTask(command: CommandData): void;
    finishTask(taskId: string): void;
    startEventListener(): void;
    registerListener(eventType: string, listener: EventListener): void;
};
export declare class CalendarEvent extends EventListener {
    listenerId: string;
    data: any;
    /**事件堆栈 */
    eventStack: any[];
    emit(date: Date): void;
    handle: Function;
    constructor(handle: Function);
    startListen(): void;
}
export declare class SettingEvent extends EventListener {
    listenerId: string;
    data: any;
    /**事件堆栈 */
    eventStack: any[];
    emit(date: Date): void;
    handle: Function;
    constructor(handle: Function);
    startListen(): void;
}
