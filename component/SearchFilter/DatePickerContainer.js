import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker'
import { Text, View } from 'react-native';

// export default class DatePickerContainer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { date: "2016-05-15" }
//     }

//     render() {

//     }
// }

// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import { registerLocale } from "react-datepicker";
// import ko from 'date-fns/locale/ko';
// // import { FaRegCalendarAlt } from "react-icons/fa";

// registerLocale('ko', ko)

const DatePickerContainer = () => {
    const [date, setDate] = useState(new Date());

    return (
        // <View style={{ color: 'red' }}>
        <DatePicker
            style={{ width: 200 }}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={new Date()}
            // maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    // position: 'absolute',
                    // left: 0,
                    // top: 4,
                    // marginLeft: 0
                    marginTop: 3,
                    // display: "none"
                    // width: 0
                },
                dateInput: {
                    // marginLeft: 36,
                    maxWidth: 140,
                    // height: 100,
                    marginTop: 2,
                    // backgroundColor: 'white',
                },
                dateText: {
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                }
                // ... You can check the source to find the other keys.
            }}
            onDateChange={setDate}
        />
    )
}
export default DatePickerContainer;
