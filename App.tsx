import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import WebViewExample from "./component/webview";
import SearchFilter from "./component/SearchFilter/SearchFilter";
import MapView from 'react-native-maps';
// import { MapView } from 'expo'

export default function App() {
  return (
    <View style={styles.container}>
      <SearchFilter style={styles.searchFilter} />
      {/* <WebViewExample style={styles.webview} /> */}

      <MapView style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchFilter: {
  },
  webview: {
  }
});
