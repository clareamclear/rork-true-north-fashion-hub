import React from "react";
import { Home, Search, Heart, User } from "lucide-react-native";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: Colors.light.inactive,
        tabBarStyle: {
          borderTopColor: Colors.light.border,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "True North",
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => <Home size={22} color={color} />,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Search size={22} color={color} />,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => <Heart size={22} color={color} />,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={22} color={color} />,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      />
    </Tabs>
  );
}