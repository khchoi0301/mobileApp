import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SearchButton = ({ name, onTouchStart }) => {
    const width = name.length * 25
    const dynamicStyle = { width: width }

    return (
        <View
            style={[dynamicStyle, styles.container]}
            onTouchStart={() => { onTouchStart(name) }}>
            <Text style={styles.menu} >
                {name}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // borderColor: "white",
        // borderWidth: 1,
    },
    menu: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
        fontSize: 17,
    },
});

