import React from "react";
import { Input } from 'antd';
const { TextArea } = Input;


export default function AutoText() {

    return <>
        <TextArea rows={4} />
        <br />
        <br />
        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
    </>


}