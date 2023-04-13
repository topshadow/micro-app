


class EventBusImpl implements EventBus {


    constructor(public callbacks: Partial<EventMap> = {}) {

    }
    $on(name: EventType, fn: Function) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name]?.push(fn)
    }
    $emit(name: EventType, args: any[]) {
        if (this.callbacks[name]) {
            this.callbacks[name]?.forEach(cb => cb(args))
        }
    }

}

export let eventBus = new EventBusImpl();
window.eventBus = eventBus;
