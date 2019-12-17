import React, { useState } from 'react';
import { SearchButton } from "./SearchButton";
import DatePickerContainer from "./DatePickerContainer";
import { View } from 'react-native';

export const SearchDetail = ({ name }) => {
    const length = name.length
    const width = `${length * 25}px`
    const style = { width: width }

    const detailOption = (name === "날짜") ?
        <View style={{ flexDirection: 'row' }}>
            <DatePickerContainer /><DatePickerContainer />
        </View> :
        // <SearchButton name={name} style={style} onTouchStart={() => { }} /> :
        <SearchButton name={name} style={style} onTouchStart={() => { }} />

    return (
        detailOption
    )
}


