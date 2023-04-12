import { Meta } from "./meta";

declare var window: any;
let oldWindow = {};
// if (window['Asc'] || window['ASC']) {
(function (win: any, undefined) { debugger; oldWindow = win })(window, undefined)

// }

export function addControl(meta: Meta) {
    // oldWindow;
    // plugin;
    debugger;
    window.Asc.plugin.executeMethod("RemoveContentControl", [meta.id]);
    window.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": meta.id, Tag: JSON.stringify(meta), PlaceHolderText: meta.placeholder || '悬浮提示', Lock: 3, }]);




}
window['addControl'] = addControl;
export let controlsMap: { [key: number | string]: any } = {}

window.controlsMap = controlsMap