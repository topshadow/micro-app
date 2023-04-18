import { FormContextManager } from "./form-context-manager";






/**结构树 */
interface StructTree {

}
/**
 * 工具函数
 */
export class MyUtil implements Util {

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
    deleteControlById(doc: OfficeDocument, id: any) {
        console.log('deleteControlById', id);
        let cs = doc.GetAllContentControls();
        for (let c of cs) {
            let tag = this.parseTagToControl(c.GetTag());
            if (tag) {
                if (tag.id == id) {
                    c.Delete();
                    if (!window['deleteControls']) {
                        window['deleteControls'] = []
                    }
                    window['deleteControls'].push(c);
                }

            }

        }
    }
    recoverControlGroup(api: OfficeApi, pid: any, control: Control, oc: any) {
        let doc = api.GetDocument();
        let cs = doc.GetAllContentControls();
        // 如果已经存在元素，则直接跳过;
        let exsist = cs.map(c => this.parseTagToControl(c.GetTag())).filter(c => c).some(c => c.id == control.id);
        if (exsist) {
            console.log('已存在控件,无需再次添加', exsist);

            return;
        }
        // console.log('组件组长度:' + cs.length)
        let parentControl = cs.find(oc => JSON.parse(oc.GetTag()).id == pid);
        console.log('有上级控件');
        let c = window['deleteControls'][0] as OfficeApiBlockLvlSdt;
        if (c) {
            console.log('恢复被删除的控件', c);

            parentControl?.AddElement(c, (c.GetPlaceholderText() ? 1 : 0) + (control.parentPosition || 0));

        }
        // let el = api.FromJSON(control.originGroupJson as string);
        // debugger;
        // console.table(el);
        // Object.keys(el).forEach(k => console.log(k));
        // let resukt = parentControl?.AddElement(el, 0)
        // console.log('添加结果', resukt)

        // for (let c of cs) {

        //     let ctag = this.parseTagToControl(c.GetTag());
        //     // 查找所有当前显示的所有同级控件
        //     console.log(cs.map(item => JSON.parse(item.GetTag())));
        //     let sameLevelcs = cs.filter(item => {
        //         let ctrl = this.parseTagToControl(item.GetTag());
        //         return ctrl.pid == pid
        //     });

        //     console.log(ctag.id + '==' + pid)
        //     if (ctag.id == pid) {
        //         console.log('找到上级组件:' + ctag.id, ctag);
        //         console.log('找到同级组件', sameLevelcs);
        //         // sameLevelcs.find( (levelC,index)=>>this.parseTagToControl(levelC.GetTag()).parentPosition<control.parentPosition )
        //         let disarr = sameLevelcs.filter((levelC, index) => (control.parentPosition as number) > (JSON.parse(levelC.GetTag()).parentPosition as number));
        //         console.log(`还有${disarr.length}个元素比插入元素位置靠前`)
        //         // disarr.forEach(d => {
        //         //     if (d.distance > 0 && d.distance < dmin) {
        //         //         dmin = d.index
        //         //     }
        //         // });
        //         let exsitPlaceholder = !!c.GetPlaceholderText()

        //         console.log('开始转换', control.originGroupJson);
        //         if (['select', 'radio', 'checkbox', 'datetime'].indexOf(control.componentType) != -1) {
        //             let el = api.CreateBlockLvlSdt();
        //             el.SetTag(JSON.stringify(control));
        //             el.SetPlaceholderText(control.placeholder || '默认提示')
        //             c.AddElement(el, disarr.length + (exsitPlaceholder ? 1 : 0));
        //         } else {
        //             let el = null;
        //             if (typeof control.originGroupJson == 'string') {
        //                 el = api.FromJSON(control.originGroupJson);
        //             } else {
        //                 el = api.FromJSON(JSON.stringify(control.originGroupJson));
        //             }
        //             // let el = api.FromJSON(typeof control.originGroupJson == 'string' ? control.originGroupJson : JSON.stringify(control.originGroupJson));

        //             c.AddElement(el, disarr.length + (exsitPlaceholder ? 1 : 0));

        //         }

        //         // console.log('转换成功', dmin);
        //         break;
        //     }

        // }
    }
    onControlValueChange(event: ControlValueChangeEvent) {
        let pluginWindow = frames[0].window;
        console.log('event on control value change', event)
        pluginWindow.eventBus.$emit('control-value-change', event);
    }

    addControl(api: OfficeApi, control: Control) {
        switch (control.componentType) {
            case 'group':
            case 'group-mulity':
                this.addFormGrouoControl(api, control);
                break;
            case 'select':
            case 'radio':
            case 'checkbox':
            case 'datetime':
                this.addSelectControl(api, control)
                break;


        }


    }
    setControlValue(control: Control, value: any, placeholder: string) {
        debugger;
        let pluginWindow = frames[0].window;
        let id = control.id;
        console.log('id:', id)
        pluginWindow.Asc.scope = { id, value, placeholder }

        pluginWindow.Asc.plugin.callCommand(function () {
            let { id, value, placeholder } = Asc.scope;
            let ctrl = myUtil.getControlById(Api, id);
            if (ctrl) {
                ctrl.SetPlaceholderText(placeholder);
                console.log('parse not error', ctrl);

            }

            // let controlTagObj = JSON.parse(ctrl?.GetTag() as string);
            // debugger;
            // controlTagObj.placeholder = placeholder;
            // controlTagObj.value = value;

            // ctrl?.SetTag(JSON.stringify(controlTagObj));
            // console.log('control', controlTagObj);

        }, false, true);
    }
    setControlCondition(control: Control) {
        debugger;
        let pluginWindow = frames[0].window;
        let id = control.id;
        console.log('id:', id)

        pluginWindow.Asc.scope = { control }

        pluginWindow.Asc.plugin.callCommand(function () {
            let { control } = Asc.scope;
            let ctrl = myUtil.getControlById(Api, control.id);


            let controlTagObj = JSON.parse(ctrl?.GetTag() as string) as Control;
            debugger;
            controlTagObj.conditions = control.conditions;


            ctrl?.SetTag(JSON.stringify(controlTagObj));
            console.log('control', controlTagObj);


        }, false, true);
    }

    selectControl(control: Control | undefined) {
        let pluginWindow = frames[0].window;
        pluginWindow.eventBus.$emit('selectControl', control)
    }
    getOfficeControlMetaWithId(id: number): Control | undefined {
        let pluginWindow = frames[0].window;
        return (pluginWindow.formCtx as FormContextManager).getControlById(id);


    }

    /**
     * 新增选择控件
     */
    addSelectControl(api: OfficeApi, control: Control) {
        // var oDocument = Api.GetDocument();
        console.log('add select control')
        let pluginWindow = window.frames[0].window;


        pluginWindow.Asc.plugin.executeMethod("RemoveContentControl", [control.id] as any);
        //Tag: JSON.stringify(control)
        pluginWindow.Asc.plugin.executeMethod("AddContentControlList", [1, [{ Display: "a", Value: "a" }], { "Id": control.id, Tag: JSON.stringify({ id: control.id }), PlaceHolderText: control.placeholder || '悬浮提示', Lock: 3, }]);

    }

    addFormGrouoControl(api: OfficeApi, control: Control) {

        var oBlockLvlSdt = api.CreateBlockLvlSdt();
        let el = oBlockLvlSdt.GetContent().GetElement(0);
        if (el) {
            el.AddText(control.placeholder || '这是表单组');
            oBlockLvlSdt.SetTag(JSON.stringify({ id: control.id }));
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
