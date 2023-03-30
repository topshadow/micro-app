import * as si from './service-invoke/index';
import { eventBus } from './utils';
export var Plugin;
(function (Plugin) {
    Plugin.serviceInvoke = si;
    Plugin.event = eventBus;
})(Plugin || (Plugin = {}));
export default Plugin;
//# sourceMappingURL=index.js.map