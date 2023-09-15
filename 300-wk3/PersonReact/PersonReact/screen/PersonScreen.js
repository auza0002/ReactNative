import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PersonScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Text style={{ color: "red" }}>Home Screen</Text>
      <Button
        title="Home details"
        omPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}
