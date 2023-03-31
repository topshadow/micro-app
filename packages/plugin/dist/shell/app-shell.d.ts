import { App, AppLoadStatus } from "./app";
export declare enum ShellStatus {
    LoadingApp = "LoadingApp",
    FinishLoading = "FinishLoading"
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
export declare class AppSchell {
    status: ShellStatus;
    loading: boolean;
    loadingApp: App;
    apps: App[];
    masterApp: App;
    onAppChange?: (apps: App[]) => void;
    addApps(app_list: App[]): void;
    /** 获取并行加载app */
    loadParallel(): App[];
    /**
     * 获取预加载app
     */
    getPreloadApps(): App[];
    /**
     * 获取惰性加载app
     * @returns
     */
    getInertLoadApps(): App[];
    /**获取懒加载apps */
    getLazyLoadApps(): App[];
    /**
     * 移除apps
     * @param app_list
     */
    removeApps(...app_list: App[]): void;
    setMasterStatus(appStatus: AppLoadStatus): void;
    setAppStatus(appId: string, loadStatus: AppLoadStatus): void;
    getAppStatus(appId: string): AppLoadStatus;
    getMasterApp(): App;
}
