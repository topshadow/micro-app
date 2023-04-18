/// <reference types="vite/client" />
declare var window: any;
declare var refreshTree: any;
declare var formCtx: any;
interface Emr {
    id: any;
    title: string;
    meta: string;
}

interface AscPlugin {
    executeMethod(method: 'GetCurrentContentControlPr', ids: [], fn: (obj: any) => void);
    executeMethod(method: 'RemoveContentControl', controls: any[]): void;
    executeMethod(method: 'AddContentControlList', control: any): void
    callCommand: (fn: Function, isClose?: boolean, isCalc?: boolean, callback?: Function) => void;
    currentContentControl: any;
}

declare var Asc: { plugin: AscPlugin, scope: any, }

interface Control {
    /**控件标签,用于显示在组件树上 */
    label: string;
    id: number;
    pid?: string | number;
    parentPosition?: number
    meta?: any;
    componentType: 'group' | 'group-mulity' | 'select' | 'radio' | 'checkbox' | 'datetime';
    placeholder?: string;
    value?: any;
    table?: string;
    fields: string[];
    useDatasource: boolean;
    options: { label: string, value: any }[];
    originGroupJson?: string;
    conditions: VisibleCondition[];
    children?: Control[];


}
type VisibleConditionType = '=' | '>' | '<' | 'contains'
interface VisibleCondition {
    fieldControlId: any;
    conditionType: VisibleConditionType;
    value: any;
    andOr: 'and' | 'or'
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
    ReplaceDocumentContent(conent: OfficeDocumentConent)
}
interface OfficeDocumentConent {
    ToJSON(b: boolean, b2: boolean): string;

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
    AddElement(position: number, el: OfficeDocumentElment);
    ToJSON(): string;
    RemoveAllElements();
    GetContent(bGetCopies: boolean): OfficeDocument


}

interface OfficeApiBlockLvlSdt extends OfficeDocumentElement {
    GetTag(): string;
    SetTag(tag: string): void;
    GetParentContentControl(): OfficeApiBlockLvlSdt | OfficeApiInlineLvlSdt | null;
    GetPosInParent(): number;
    GetContent(): OfficeApiDocumentContent;
    SetPlaceholderText(str: string);
    ToJSON(bWriteNumberings: boolean, bWriteStyles: boolean): string;
    Delete();
    AddElement(element: any, nPos: number);
    GetPlaceholderText(): string;
    GetAllContentControls(): OfficeApiBlockLvlSdt[] | OfficeApiInlineLvlSdt[];
    GetContent(): OfficeDocumentConent;
    Push(oDoucment: any);



}
interface OfficeApiDocumentContent {
    GetElement(nPos: number): OfficeDocumentElment | null;
    ToJSON(b: boolean, b2: boolean);

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
    GetPlaceholderText(): string;
    ToJSON(bWriteNumberings: boolean, bWriteStyles: boolean): string;
    Delete();
    AddElement(element: any, nPos: number);
    GetAllContentControls(): OfficeApiBlockLvlSdt[] | OfficeApiInlineLvlSdt[];
    Push(oDoucment: any);

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
    deleteControlById(doc: OfficeDocument, id: any);
    recoverControlGroup(api: OfficeApi, pid: any, control: Control);
    onControlValueChange(event: ControlValueChangeEvent);
    setControlCondition(control: Control);
    getOfficeControlMetaWithId(id: number): Control | undefined;
}

type EventType = 'domtree' | 'selectControl' | 'control-value-change' | 'all-dom-tree' | 'document-change';

type EventMap = {
    [key in EventType]: Function[];
};


interface EventBus {
    $on(name: EventType, fn: Function): void;
    $emit(name: EventType, ...args: any[]);
}

interface ControlValueChangeEvent {
    oldFormValue?: any;
    newFormValue?: any;
    control: Control;
    oldValue: any;
    newValue: any;
}

declare var myUtil: Util;
declare var Api: OfficeApi;
declare var eventBus: EventBus;