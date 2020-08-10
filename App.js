import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from "react-native";
import HomeComponent from "./Home/HomeComponent";
import MessageComponent from "./Message/messageComponent";
import CameraScreen from "./Camera/camera";
import NotificationComponent from "./Notification/notificationComponent";
import ProfileComponent from "./Profile/profileComponent";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-paper";
import styles from "./style";

const HomeSlideTab = createMaterialTopTabNavigator();
function HomeSlideTabScreen() {
  return (
    <HomeSlideTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: false,
        showLabel: false,
        style: { display: "none" },
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeSlideTab.Screen name="Camera" component={CameraScreen} />
      <HomeSlideTab.Screen name="Home" component={HomeTabScreen} />
      <HomeSlideTab.Screen name="Message" component={MessageComponent} />
    </HomeSlideTab.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeComponent} />
      <HomeStack.Screen name="Message" component={MessageComponent} />
    </HomeStack.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator();
function HomeTabScreen() {
  return (
    <Tab.Navigator labeled={false} barStyle={{ backgroundColor: "#fff" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        // listeners={({ navigation, route }) => ({
        //   tabPress: e => {
        //     // Prevent default action
        //     e.preventDefault();
        //     // Alert.alert(route);
        //     console.log("!!!",route)
        //     // Do something with the `navigation` object
        //     // navigation.navigate('AnotherPlace');
        //   },
        // })}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <MaterialIcons
                name={"home"}
                style={{ color: "#111", fontSize: 25 }}
              />
            ) : (
              <AntDesign
                name={"home"}
                style={{ color: "#111", fontSize: 25 }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FontAwesome
                name={"search"}
                style={{ color: "#111", fontSize: 25 }}
              />
            ) : (
              <Feather
                name={"search"}
                style={{ color: "#111", fontSize: 25 }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeComponent}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name={focused ? "plus-square" : "plus-square-o"}
              style={{ color: "#111", fontSize: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationComponent}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name={focused ? "heart" : "heart-o"}
              style={{ color: "#111", fontSize: 23 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                alignItems: "center",
                width: 28,
                height: 28,
                backgroundColor: "#fff",
                borderRadius: 14,
                borderColor: focused ? "#111" : "transparent",
                borderWidth: 2,
              }}
            >
              <Avatar.Image
                size={20}
                source={require("./assets/profilePic.jpg")}
                style={{ marginTop: 1.7 }}
              />
              <View
                style={{
                  position: "absolute",
                  right: 6.5,
                  bottom: -11,
                  backgroundColor: "transparent",
                  borderRadius: 6,
                  width: 13,
                  height: 13,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  name={"dot-single"}
                  style={{ color: "red", fontSize: 18 }}
                />
              </View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeSlideTabScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
