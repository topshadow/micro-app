var SubAppLayout;
(function (SubAppLayout) {
    SubAppLayout["fullscreen"] = "fullscreen";
    SubAppLayout["embed"] = "embed";
})(SubAppLayout || (SubAppLayout = {}));
export let eventBus = new class EventBus {
    constructor() {
        this.listeners = new Map();
        this.callbacks = new Map();
    }
    callTask(event, callback) {
        event.taskId = event.type + Date.now();
        let callbacks = this.callbacks.get(event.taskId);
        if (callbacks) {
            callbacks.push(callback);
        }
        else {
            this.callbacks.set(event.taskId, [callback]);
        }
        window.parent.postMessage(event, '*');
    }
    startEventListener() {
        window.addEventListener('message', (msg) => {
            let type = msg.data.type;
            let callbacks = this.callbacks.get(type);
            if (callbacks) {
                callbacks.forEach(c => c(msg.data));
            }
        });
    }
    registerListener(eventType, callback) {
        let listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.push(callback);
        }
        else {
            this.listeners.set(eventType, [callback]);
        }
    }
};
//# sourceMappingURL=index.js.map