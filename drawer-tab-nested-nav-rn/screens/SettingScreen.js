import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';

export default ({ route, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <Text style={s.txt}>Settings Screen</Text>
      <Text>Only from the Drawer navigation stack.</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(140, 40%, 50%)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
  },
});
