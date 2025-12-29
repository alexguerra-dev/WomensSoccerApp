import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";
import { RootStackParamList } from "./src/types";
import TeamsScreen from "./src/screens/TeamsScreen";
import PlayersScreen from "./src/screens/PlayersScreen";
import PlayerProfileScreen from "./src/screens/PlayerProfileScreen";
import useFonts from "./src/hooks/useFonts";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#667eea" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Teams"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "OpenDyslexic-Bold",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Teams"
          component={TeamsScreen}
          options={{ title: "Women's Soccer" }}
        />
        <Stack.Screen
          name="Players"
          component={PlayersScreen}
          options={{
            headerShown: true,
            title: "Squad",
          }}
        />
        <Stack.Screen
          name="PlayerProfile"
          component={PlayerProfileScreen}
          options={{
            headerShown: true,
            title: "Player Profile",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
