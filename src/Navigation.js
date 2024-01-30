import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Calls from "./screens/Calls";
import Chat from "./screens/Chat";
import Status from "./screens/Status";
import Community from "./screens/Community";

const Tab = createMaterialTopTabNavigator();

export default function Navigation() {
  const windowWidth = Dimensions.get("window").width;

  return (
    <Tab.Navigator
    initialRouteName="Chat"
    screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarIndicatorStyle:{
            backgroundColor:'white'
        },
        tabBarLabelStyle:{
            fontWeight:'bold'
        },
        tabBarStyle:{
            backgroundColor:'#0e806a'
        }
    }}
    >
        <Tab.Screen 
        name="Topluluklar"
        component={Community}
        options={{
            tabBarIcon:({color}) => (
                <MaterialCommunityIcons name="account-group" size={24} color={color}/>
            ),
            tabBarLabelStyle:styles.tabBarLabel
        }}
        />
        <Tab.Screen 
        name="Sohbetler"
        component={Chat}
        />
        <Tab.Screen 
        name="Durumlar"
        component={Status}
        />
        <Tab.Screen 
        name="Aramalar"
        component={Calls}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    tabBarLabel: {
        display:'none'
  },
});
