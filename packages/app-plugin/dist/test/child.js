import { Plugin } from '../src/index.js';
Plugin.event.startEventListener();
setTimeout(() => {
    Plugin.event.callTask({ command: 'test', type: 'invoke' }, () => alert('child task'));
}, 500);
//# sourceMappingURL=child.js.map