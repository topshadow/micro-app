





/**结构树 */
interface StructTree {

}
/**
 * 工具函数
 */
export class MyUtil implements Util {
    getAllControlTags(doc: OfficeDocument): Control[] {
        let controlTagObjects: Control[] = [];

        let controls = doc.GetAllContentControls();
        for (let control of controls) {
            let parentControl = control.GetParentContentControl();
            let controlTagObj = this.parseTagToControl(control.GetTag());
            if (controlTagObj) {
                if (parentControl?.GetTag()) {
                    let parentControlTagObject = this.parseTagToControl(parentControl.GetTag());
                    controlTagObj.pid = parentControlTagObject.id
                }
                controlTagObjects.push(controlTagObj)

            }

        }
        return controlTagObjects;


    }
    getControlById(api: OfficeApi, id: any) {
        let doc = api.GetDocument()
        let controls = doc.GetAllContentControls();
        for (let control of controls) {

            let controlTagObj = this.parseTagToControl(control.GetTag());
            if (controlTagObj) {
                if (controlTagObj.id == id) {

                    return control;
                }


            }

        }

    }

    addControl(api: OfficeApi, control: Control) {
        switch (control.componentType) {
            case 'group':
            case 'group-mulity':
                this.addFormGrouoControl(api, control);
                break;
            case 'select':
                this.addSelectControl(api, control)
                break;

        }


    }
    setControlValue(control: Control, value: any, placeholder: string) {
        let pluginWindow = window.frames[0].window;
        let id = control.id;
        pluginWindow.Asc.scope = { id, value, placeholder }
        pluginWindow.Asc.plugin.callCommand(function () {
            let { id, value, placeholder } = Asc.scope;
            let ctrl = myUtil.getControlById(Api, id);
            ctrl?.SetPlaceholderText(placeholder);
            let controlTagObj = JSON.parse(ctrl?.GetTag() as string);
            controlTagObj.placeholder = placeholder;
            controlTagObj.value = value;
            ctrl?.SetTag(JSON.stringify(controlTagObj));
            console.log('control', controlTagObj);

        }, false, true);
    }
    selectControl(control: Control) {
        let pluginWindow = frames[0].window;
        pluginWindow.eventBus.$emit('selectControl', control)
    }

    /**
     * 新增选择控件
     */
    addSelectControl(api: OfficeApi, control: Control) {
        // var oDocument = Api.GetDocument();
        console.log('add select control')
        let pluginWindow = window.frames[0].window;
        control.id = control.id || Date.now();

        pluginWindow.Asc.plugin.executeMethod("RemoveContentControl", [control.id] as any);

        pluginWindow.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": control.id, Tag: JSON.stringify(control), PlaceHolderText: control.placeholder || '悬浮提示', Lock: 3, }]);

    }

    addFormGrouoControl(api: OfficeApi, control: Control) {
        var oBlockLvlSdt = api.CreateBlockLvlSdt();
        let el = oBlockLvlSdt.GetContent().GetElement(0);
        if (el) {
            el.AddText(control.placeholder || '这是表单组');
            oBlockLvlSdt.SetTag(JSON.stringify(control));
            api.GetDocument().AddElement(0, oBlockLvlSdt);

        }

    }

    parseTagToControl(tag: string): Control {
        try {
            let result = JSON.parse(tag);
            return result;
        } catch (error) {
            if (error) {
                return null as any;
            }

        }
        return null as any;
    }
}

export let myUtil = new MyUtil();
