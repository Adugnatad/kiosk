import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WebContentSettings from "./WebContentSettings";
import WebBrowsingSettings from "./WebBrowsingSettings";
import WebZoomScaling from "./WebZoomScaling";
import Setting from "./Setting";

const screens = {
  Setting: {
    screen: Setting,
    navigationOptions: {
      headerShown: false,
    },
  },
  WebContentSettings: {
    screen: WebContentSettings,
    navigationOptions: {
      title: "Web Content Settings",
    },
  },
  WebBrowsingSettings: {
    screen: WebBrowsingSettings,
    navigationOptions: {
      title: "Web Browsing Settings",
    },
  },
  WebZoomScaling: {
    screen: WebZoomScaling,
    navigationOptions: {
      title: "Web Zoom and Scaling",
    },
  },
};

const SettingStack = createStackNavigator(screens);

export default createAppContainer(SettingStack);
