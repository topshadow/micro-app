import { eventBus } from '../../utils/index';
if (window.name == 'shell-child1') {
    // alert('child1')
    eventBus.startEventListener();
    setTimeout(() => {
        eventBus.callMessage({ command: 'send-setting', type: 'message' })

    }, 1000);
}   