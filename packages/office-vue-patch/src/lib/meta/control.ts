import { Meta } from "./meta";

declare var window: any;
let oldWindow = {};
// if (window['Asc'] || window['ASC']) {
(function (win: any, undefined) { debugger; oldWindow = win })(window, undefined)

// }

export function addControl(meta: Meta) {
    oldWindow;
    plugin;
    debugger;
    window.Asc.plugin.executeMethod("RemoveContentControl", [511]);
    window.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": 511, Tag: JSON.stringify(meta), PlaceHolderText: 'checkbox', Lock: 3, }]);




}

export let plugin = {
    Asc: null
}
