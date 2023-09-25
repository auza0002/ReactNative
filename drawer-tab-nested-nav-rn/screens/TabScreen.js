import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AnotherScreen from "./AnotherScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AnotherRandom from "../screens/AnotherRandom";
import RandomTwo from "../screens/RandomTwo";

const Tab = createBottomTabNavigator();

export default function TabScreen({ route, navigation }) {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 20 },
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Another"
        component={AnotherScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 20 },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  //loaded by the Tab.Navigator as the initial Tab
  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <Text style={s.txt}>Home Screen</Text>
      <Text style={s.txtSm}>Inside the tab navigation stack.</Text>
      <Text style={s.txtSm}>Note the use of title instead of name.</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="AnotherRandom"
      screenOptions={{
        title: "AnotherRandom",
      }}
    >
      <Stack.Screen
        name="AnotherRandom"
        component={AnotherRandom}
        options={{ title: "AnotherRandom", headerShown: false }}
      />
      <Stack.Screen
        name="RandomTwo"
        component={RandomTwo}
        options={{ title: "RandomTwo", headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(340, 40%, 50%)",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
    color: "hsl(340, 40%, 90%)",
  },
  txtSm: {
    fontSize: 20,
    color: "hsl(340, 40%, 90%)",
  },
});
