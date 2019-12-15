import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
// import { FaRegCalendarAlt } from "react-icons/fa";

registerLocale('ko', ko)

const DatePickerContainer = () => {
    const [startDate, setStartDate] = useState(new Date(new Date()));
    const [endDate, setEndDate] = useState(new Date(new Date()));
    const ExampleCustomInput = ({ value, onClick }) => (
        <Button className="example-custom-input" onClick={onClick}>
            {value}
            <FaRegCalendarAlt style={{ marginLeft: '7px' }} />
        </Button>
    );
    return (
        <>
            <View style={{}}>
            </View>
            <View style={{ display: 'inline-block' }}>
                {/* <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    locale="ko"
                    dateFormat="yy/MM/dd"
                    customInput={<ExampleCustomInput />}
                    withPortal
                /> */}
            </View>
        </>
    );
}
export default DatePickerContainer;




