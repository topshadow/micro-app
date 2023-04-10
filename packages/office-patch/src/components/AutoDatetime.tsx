import { ConfigProvider, DatePicker, DatePickerProps, Space } from "antd";
import React from "react";
import locale from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

interface AutoDatetimeOptions {
    picker: "week" | "month" | "quarter" | "year" | 'date';
    borderd: boolean;
}

export function AutoDatetime(opt: AutoDatetimeOptions) {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const picker = opt.picker || 'date';
    return <ConfigProvider locale={locale}>

        <Space direction="vertical" >
            <div style={{ position: 'relative' }}>
                <DatePicker popupStyle={{ position: 'relative', top: '-30px', maxWidth: '300px' }} open={true} bordered={!!opt.borderd} onChange={onChange} picker={picker} />
            </div>
        </Space>
    </ConfigProvider>


}