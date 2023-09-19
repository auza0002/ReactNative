import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import TonyScreen from "./screens/TonyScreen";
import AdeshScreen from "./screens/AdeshScreen";

import FontAwesome from "@expo/vector-icons/FontAwesome";

// creats the bottom tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "hsl(275, 100%, 23%)", // indigo
            inactiveTintColor: "hsl(275, 15%, 60%)",
            style: { backgroundColor: "hsl(275, 100%, 93%)" },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <FontAwesome name={"github"} size={32} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="Tony"
            component={TonyScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <FontAwesome name={"font"} size={32} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Adesh"
            component={AdeshScreen}
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <FontAwesome name={"home"} size={32} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
