export interface Meta {
    // 基础信息
    id?: number;
    componentType: 'checkbox' | 'select' | 'radio' | 'datetime'
    labelKey?: string;
    // 数据源
    table: string;
    fields: string[];
    /**控件悬浮提示 */
    placeholder?: string;
    /**控件值 */
    value?: any;

}