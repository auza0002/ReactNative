import { View, Text, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[st.container, { paddingTop: insets.top }]}>
      <Text> Home Screen</Text>
    </View>
  );
}
const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
