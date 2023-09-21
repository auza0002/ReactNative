import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AnotherScreen from './AnotherScreen';

const Tab = createBottomTabNavigator();

export default function TabScreen({ route, navigation }) {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabelStyle: { fontSize: 20 }, title: 'Home', tabBarIcon: ({ color }) => <FontAwesome name="home" size={20} color={color} /> }}
      />
      <Tab.Screen
        name="Another"
        component={AnotherScreen}
        options={{ headerShown: false, tabBarLabelStyle: { fontSize: 20 }, tabBarIcon: ({ color }) => <FontAwesome name="gear" size={20} color={color} /> }}
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

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(340, 40%, 50%)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    color: 'hsl(340, 40%, 90%)',
  },
  txtSm: {
    fontSize: 20,
    color: 'hsl(340, 40%, 90%)',
  },
});
