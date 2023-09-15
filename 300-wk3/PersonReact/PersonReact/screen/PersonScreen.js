import { View, Text, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PersonScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  console.log(route.params.users);
  return (
    <View>
      <Text style={{ color: "red" }}>Person Screen</Text>
    </View>
  );
}
