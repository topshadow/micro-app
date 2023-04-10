export interface Meta {
    // 基础信息
    id?: string;
    componentType: 'checkbox' | 'select' | 'radio' | 'datetime'
    labelKey?: string;
    // 数据源
    table: string;
    fields: string[];

}