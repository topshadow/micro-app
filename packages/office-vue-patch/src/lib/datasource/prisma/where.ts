
export type WhereCondition<T> = {
    [key in keyof T]: ConditionValue;
};
export class ConditionValue {
    contains?: string;
    endsWith?: string;
    equals?: any;
    gt?: number;
    in?: any;
    lt?: number;
    lte?: string;
    notIn?: any;
    startsWith?: string;
}