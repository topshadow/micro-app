

import * as si from './service-invoke/index';
import { eventBus } from './utils';

export namespace Plugin {
    export let serviceInvoke = si;
    export let event = eventBus;

}





export default Plugin;
//npx tsdx create mylib
