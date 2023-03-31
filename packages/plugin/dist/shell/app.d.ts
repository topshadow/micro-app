export declare enum AppLoadStatus {
    Loading = "Loading",
    Finished = "Finished",
    Waiting = "Waiting"
}
export interface App {
    /**应用的唯一id */
    id: string;
    title?: string;
    /** 地址 */
    url: string;
    icon?: string;
    description?: string;
    /**应用的加载方式*/
    loadMethod: LoadMethod;
    isMaster?: boolean;
    loadStatus?: AppLoadStatus;
}
export declare enum LoadMethod {
    /**并行加载,加载优先级最高,使用预渲染与主应用同时加载,不易同时过多应用采用进行并行加载,虽然没有网络并发数量限制,但是流量压力过大 */
    Parallel = "Parallel",
    /** 预加载  采用预加载  在主应用加载完成后，才会进行加载内容 */
    Preload = "Preload",
    /** 懒加载  除非主动激活,或是调用其服务/命令  才会进行加载 */
    LazyLoad = "LazyLoad",
    /** 惰性加载 当应用加载的方式为惰性加载时,通常处于禁用状态 */
    InertLoad = "InertLoad"
}
