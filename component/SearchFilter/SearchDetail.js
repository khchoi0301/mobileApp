import React, { useState } from 'react';
import { SearchButton } from "./SearchButton";
import DatePickerContainer from "./DatePickerContainer";

export const SearchDetail = ({ name }) => {
    const length = name.length
    const width = `${length * 25}px`
    const style = { width: width }

    const detailOption = (name === "날짜") ?
        <DatePickerContainer /> :
        // <SearchButton name={name} style={style} onTouchStart={() => { }} /> :
        <SearchButton name={name} style={style} onTouchStart={() => { }} />

    return (
        detailOption
    )
}


