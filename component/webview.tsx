import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

const WebViewExample = (props) => {
    console.log('props', props)
    return (
        <View style={styles.container}>
            {/* <WebView
                originWhitelist={['*']}
                source={{ html: '<h1>Hello world</h1>' }}
            /> */}
            <WebView
                source={{ uri: 'http://localhost:3000/' }}
                onLoadEnd={() => { console.log("load end") }}
                onError={() => { console.log("load end2") }}
            />
        </View>
    )
}
export default WebViewExample;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 85,
        height: '80%',
        width: '100%',
    }
})