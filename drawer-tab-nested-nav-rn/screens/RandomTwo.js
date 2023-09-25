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
        <Text>this is the second stack"</Text>
        <Button
          title={"go to first"}
          onPress={() => {
            navigation.navigate("AnotherRandom");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
