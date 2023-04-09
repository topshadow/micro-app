import { InputNumber } from "antd";
import React from "react";

export interface NumberDesignerOption {
    value: number;
    defaultValue: number;
    onValueChange: (num: number) => void

}

export function NumberDesigner(prop: NumberDesignerOption) {
    return <div><InputNumber defaultValue={prop.defaultValue} onChange={(e) => prop.onValueChange(e || 0)} /></div>
}