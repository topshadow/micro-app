import { App, AppLoadStatus, LoadMethod } from "./app";

export enum ShellStatus {
    LoadingApp = 'LoadingApp',
    FinishLoading = 'FinishLoading'
}

/**
 *  应用管理 ,请在主应用中使用
 * 
 * let appShell= new AppSchell();
 * 在ssr 中可以使用
 * appShell.addApps();
 * 
 * 
*/
export class AppSchell {
    status!: ShellStatus;
    loading: boolean;
    loadingApp: App
    apps: App[] = [];
    masterApp!: App;
    onAppChange?: (apps: App[]) => void;

    addApps(app_list: App[]) {
        this.apps.push(...app_list);
    }
    /** 获取并行加载app */
    loadParallel() {
        let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.Parallel);
        return parallelApps;
    }
    /**
     * 获取预加载app
     */
    getPreloadApps() {
        let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.Preload);
        return parallelApps;
    }

    /**
     * 获取惰性加载app
     * @returns 
     */
    getInertLoadApps() {
        let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.InertLoad);
        return parallelApps;
    }
    /**获取懒加载apps */
    getLazyLoadApps() {
        let parallelApps = this.apps.filter(app => app.loadMethod == LoadMethod.LazyLoad);
        return parallelApps;
    }
    /**
     * 移除apps
     * @param app_list 
     */
    removeApps(...app_list: App[]) {
        app_list.forEach(app => { let indexOf = this.apps.findIndex(a => a.id == app.id); if (indexOf > -1) this.apps.splice(indexOf, 1); })
    }

    setMasterStatus(appStatus: AppLoadStatus) {
        this.getMasterApp().loadStatus = appStatus;
    }
    setAppStatus(appId: string, loadStatus: AppLoadStatus) {
        let app = this.apps.find(app => app.id == appId);
        if (app) {
            app.loadStatus = loadStatus;
        }
        debugger;
        if (this.onAppChange) {
            this.onAppChange(this.apps);
        }

    }
    getAppStatus(appId: string) {
        let app = this.apps.find(app => app.id == appId);

        return app ? app.loadStatus : null;
    }
    getMasterApp() {
        return this.apps.find(app => app.isMaster);

    }



}