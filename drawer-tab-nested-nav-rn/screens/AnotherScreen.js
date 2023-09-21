import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function AnotherScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <Text style={s.txt}>Another Screen</Text>
      <Text style={s.txtSm}>Inside the tab navigation stack.</Text>
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
