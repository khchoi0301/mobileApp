import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebViewExample from "./component/webview";
import SearchFilter from "./component/SearchFilter/SearchFilter";

export default function App() {
  return (
    <View style={styles.container}>
      <SearchFilter style={styles.searchFilter} />
      <WebViewExample style={styles.webview} />
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
