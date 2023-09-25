import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnotherRandom({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView>
      <View>
        <Text>this is "AnotherRandom Screen using Stacks"</Text>
        <Button
          title={"go to second stack screen"}
          onPress={() => {
            navigation.navigate("RandomTwo");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
