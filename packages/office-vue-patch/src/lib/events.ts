
type EventMap = {
    [key in 'domtree' | 'a']: Function[];
};

class EventBus {


    constructor(public callbacks: Partial<EventMap> = {}) {

    }
    $on(name: 'domtree', fn: Function) {
        this.callbacks[name] = this.callbacks[name] || [];
        this.callbacks[name]?.push(fn)
    }
    $emit(name: 'domtree', args: any[]) {
        if (this.callbacks[name]) {
            this.callbacks[name]?.forEach(cb => cb(args))
        }
    }

}

export let eventBus = new EventBus();
window['eventBus'] = eventBus;
