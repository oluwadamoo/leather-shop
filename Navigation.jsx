import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Details from "./Screens/Details";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Root"}>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Room"
          component={MeetingRoom}
          options={{
            title: "Start a meeting",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#1c1c1c",
            },
            headerTintColor: "white",
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={"HomeScreen"}>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
          //headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const color = "red";
  const size = 24;

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#691db1",
        tabBarStyle: {
          elevation: 6,
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "md-home-sharp" : "md-home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "cart" : "md-cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;
