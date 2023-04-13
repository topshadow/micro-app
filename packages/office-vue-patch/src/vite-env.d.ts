/// <reference types="vite/client" />
declare var window: any;

declare var refreshTree: any;

interface AscPlugin {

    executeMethod(method: 'RemoveContentControl', controls: any[]): void;
    executeMethod(method: 'AddContentControlList', control: any): void
    callCommand: (fn: Function, isClose?: boolean, isCalc?: boolean, callback?: Function) => void;

}

declare var Asc: { plugin: AscPlugin, scope: any }

interface Control {
    id?: string | number;
    pid?: string | number;
    parentPosition?: number
    meta?: any;
    componentType: 'group' | 'group-mulity' | 'select' | 'radio' | 'checkbox' | 'datetime';
    placeholder?: string;
    value?: any;
    table?: string;
    fields: string[]

}

interface OfficeTextFormPr {
    key: string;
    tip: string;
    required: boolean;
    placeholder: boolean;
    comb: boolean;
}

interface OfficeApi {
    GetDocument(): OfficeDocument;
    FromJSON(str: string): any;
    CreateBlockLvlSdt(): OfficeApiBlockLvlSdt;
    CreateComboBoxForm(): OfficeComboxForm;
    CreateTextForm(): OfficeTextFormPr;
    GetElement(n: number): OfficeDocumentElement
}

interface OfficeComboBoxFormPr {
    key: string;
    tip: string;
    required?: boolean;
    placeholder?: string;
    items: string[];
    autoFit: string;
    editable: boolean;
}

interface OfficeComboxForm {

}
interface OfficeDocument {
    GetAllContentControls(): OfficeApiBlockLvlSdt[] | OfficeApiInlineLvlSdt[];
    AddElement(position: number, el: OfficeDocumentElment)

}

interface OfficeApiBlockLvlSdt extends OfficeDocumentElement {
    GetTag(): string;
    SetTag(tag: string): void;
    GetParentContentControl(): OfficeApiBlockLvlSdt | OfficeApiInlineLvlSdt | null;
    GetPosInParent(): number;
    GetContent(): OfficeApiDocumentContent;
    SetPlaceholderText(str: string);


}
interface OfficeApiDocumentContent {
    GetElement(nPos: number): OfficeDocumentElment | null;

}
interface OfficeDocumentElement {
    AddText(str: string);

}
interface OfficeApiInlineLvlSdt {
    GetTag(): string;
    SetTag(tag: string): void;
    GetParentContentControl(): OfficeApiBlockLvlSdt | OfficeApiInlineLvlSdt | null;
    GetPosInParent(): number;
    SetPlaceholderText(str: string);


}
interface OfficeContentControl {

}
interface Util {
    /**获取所有控件json */
    getAllControlTags(doc: OfficeDocument): Control[]
    /**新增控件,包括表单组等 */
    addControl(api: OfficeApi, control: Control);
    getControlById(api: OfficeApi, id: any): any;
    setControlValue(control: Control, value: any, placeholder);
}

type EventType = 'domtree' | 'selectControl'

type EventMap = {
    [key in EventType]: Function[];
};


interface EventBus {
    $on(name: EventType, fn: Function): void;
    $emit(name: EventType, ...args: any[]);
}


declare var myUtil: Util;
declare var Api: OfficeApi;
declare var eventBus: EventBus;