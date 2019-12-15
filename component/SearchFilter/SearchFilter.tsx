import React, { useState } from 'react';
// import styled from 'styled-components';
import { SearchButton } from "./SearchButton";
import { SearchDetail } from "./SearchDetail";
import { StyleSheet, Text, View } from 'react-native';

//TODO: date picker 선택창 가운데로 오게 하기, 달력 아이콘 위치 맞추기, 데이트 간격 맞추기
const SearchFilter = (props) => {
    const [selected, setItem] = useState('')
    const options = ["날짜", "지역", "경기장", "팀"]
    const dynamicStyle = {
        height: selected === '' ? '5%' : '11%'
    }

    const _onTouch = (e) => {
        console.log('e', e)
        const item = (selected !== e) ? e : ''
        setItem(item)
    }

    return (
        <View style={[dynamicStyle, styles.container]} >
            <View style={styles.line}>
                {options.map((item, idx) => {
                    return <SearchButton onTouchStart={_onTouch} name={item} key={idx} />
                })}
            </View>
            {selected !== '' ? <View style={styles.line}><SearchDetail name={selected} options={options} /></View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 40,
        alignItems: 'center',
        width: "100%",
        fontWeight: "600",
        zIndex: 99,
        backgroundColor: 'blue',
    },
    line: {
        flexDirection: 'row',
        height: 40,
        alignItems: "center"
    }
});

export default SearchFilter
