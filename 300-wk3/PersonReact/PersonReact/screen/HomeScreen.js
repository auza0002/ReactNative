import { View, Text, Button, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { users } from "../users.js";

export default function HomeScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Text style={{ color: "red" }}>Home Screen</Text>
      <Button
        title="Person details"
        onPress={() => {
          navigation.navigate("Person");
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
