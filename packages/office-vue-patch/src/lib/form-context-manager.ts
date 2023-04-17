export class FormContextManager {
    controls: Control[] = [];
    officeControls: OfficeApiBlockLvlSdt[] | OfficeApiInlineLvlSdt[] = [];



    loadAllControls() {

    }

    addControls(control: Control) {

        Asc.scope.control = control;
        Asc.plugin.callCommand(function () {
            myUtil.addControl(Api, Asc.scope.control)
        }, false, true)

    }

    refreshOfficeControls() {

    }


}