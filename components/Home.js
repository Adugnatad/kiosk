import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import { getStatusBarHeight } from "react-native-status-bar-height";
import SystemNavigationBar from "react-native-system-navigation-bar";
import NetInfo from "@react-native-community/netinfo";
import { contextAPI } from "../Context";

const Home = () => {
  const { url } = contextAPI();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const connection = NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });

    return () => {
      connection();
    };
  }, []);

  return (
    <>
      <StatusBar translucent={true} hidden={true} headerShown={false} />
      {connected ? (
        <WebView
          onError={() =>
            alert("Page will reload when there is an internet connection")
          }
          source={{ uri: url }}
        />
      ) : (
        <View style={styles.container}>
          <Text style={styles.connectionText}> No Internet Connection </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  connectionText: {
    fontSize: 18,
  },
});

export default Home;
