import { TreeDataItem } from "ant-design-vue/lib/tree";

export class FormContextManager {
    controls: Control[] = [];
    officeControls: OfficeApiBlockLvlSdt[] | OfficeApiInlineLvlSdt[] = [];



    loadAllControls() {

    }

    addControls(control: Control) {

        control.id = Date.now();
        this.controls.push(control);

        Asc.scope.control = control;
        Asc.plugin.callCommand(function () {
            myUtil.addControl(Api, Asc.scope.control)
        }, false, true)

    }

    refreshOfficeControls() {

    }

    getControlById(id: number) {
        return this.controls.find(c => c.id == id);

    }
    toTreeNodeItems(): TreeDataItem[] {
        this.officeControls.forEach(oc => {
            let control = this.controls.find(c => JSON.parse(oc.GetTag()).id == c.id);
            if (control) {
                if (oc.GetPosInParent) {
                    control.parentPosition = oc.GetPosInParent();
                    let parentControl = oc.GetParentContentControl();
                    if (parentControl) {
                        control.pid = JSON.parse(parentControl.GetTag()).id;
                    }
                } else {
                    let levelControlIds = this.officeControls
                        .filter(poc => poc.GetParentContentControl())
                        .filter(poc => poc.GetParentContentControl()?.GetTag() == oc.GetParentContentControl()?.GetTag()).map(c => JSON.parse(c.GetTag()).id);
                    control.parentPosition = levelControlIds.indexOf(control.id);
                    control.pid = JSON.parse(oc.GetParentContentControl()?.GetTag()).id;

                }
                if (typeof oc['GetContent'] == 'function') {
                    control.originGroupJson = (oc as OfficeApiBlockLvlSdt).GetContent().ToJSON(true, true);

                } else {
                    control.originGroupJson = oc.ToJSON(true, true);

                }

                oc.SetTag(JSON.stringify({ id: control.id, pid: control.pid, parentPosition: control.parentPosition }))
            }
        });
        console.log(this.controls);

        let top = this.officeControls.filter(oc => typeof oc.GetPosInParent == 'function');
        let topControls = top
            // 顶级控件
            .filter(oc => !oc.GetParentContentControl())
            .map(oc => this.officeControlToControl(oc))
            .filter(c => c)

            .map(c => this.controlToTreeNodeItem(c as Control));
        debugger;
        return topControls;
    }



    private officeControlToControl(oc: OfficeApiBlockLvlSdt | OfficeApiInlineLvlSdt): Control | undefined {
        let tag = JSON.parse(oc.GetTag());
        debugger;

        // todo: fix json parse error
        let control = this.controls.find(c => c.id == tag.id);

        if (control) {
            control.children = this.getOfficeControlChildrenControl(oc);

        }

        return control;

    }
    private getOfficeControlChildrenControl(oc: OfficeApiBlockLvlSdt | OfficeApiInlineLvlSdt): Control[] {
        if (typeof oc.GetAllContentControls == 'function') {
            let child = oc.GetAllContentControls();

            return child
                // 找到当前控件的子控件群
                .filter(c => c.GetParentContentControl()?.GetTag() == oc.GetTag())
                // 映射控件的子控件群
                .map(c => {
                    debugger;
                    let control = this.officeControlToControl(c);
                    if (control) {
                        control.children = this.getOfficeControlChildrenControl(c)

                    }
                    return control;
                }
                ).filter(c => c) as Control[];

        } else {
            return [];
        }




    }


    private controlToTreeNodeItem(control: Control): TreeDataItem {

        return { key: control.id, title: control.label, slots: { icon: control.componentType }, children: control.children?.map(c => this.controlToTreeNodeItem(c)) }
    }


    clearAll() {
        this.controls = [];
        localStorage.setItem('controls', `[]`);
        Asc.plugin.callCommand(function () {
            let doc = Api.GetDocument();
            doc.RemoveAllElements();
        }, false, true)
    }

}