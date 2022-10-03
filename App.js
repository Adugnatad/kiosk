import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./components/MyDrawer";
import Login from "./components/Login";
import { ProvideContext } from "./Context";
export default function App() {
  return (
    <NavigationContainer>
      <ProvideContext>
        <MyDrawer />
      </ProvideContext>
    </NavigationContainer>
  );
}
