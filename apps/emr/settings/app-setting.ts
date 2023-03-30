/**应用设置 */
export interface AppSetting {
    /** app id readonly */
    appId: string;

    theme: 'dark' | 'light';
    title?: string
    /**同时打开多个应用或只打开一个应用,默认只打开一个应用 */
    multiApp?: 'multi' | 'single';
    /**是否允许多应用,若否,则隐藏多应用面板 */
    disabledMulityApp?: boolean;
    /**默认打开侧边栏 */
    defaultOpenSidebar?: boolean;
    /**禁用侧边栏 */
    disableSidebar?: boolean;
    /**
     * //TODO test
     * 
     */

}


export let defaultAppSetting: AppSetting = {
    appId: 'master',
    theme: 'light',
    title: '主应用',
    defaultOpenSidebar: true,
}