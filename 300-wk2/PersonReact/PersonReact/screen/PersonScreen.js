import { View, Text, Button, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { users } from "../users";

export default function PersonScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const userInfo = route.params.users;
  return (
    <View>
      <Text style={{ color: "black", textAlign: "center", margin: 30 }}>
        Person Screen
      </Text>
      <View>
        <Text>
          {userInfo.first_name} {userInfo.last_name}
        </Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://picsum.photos/100/100" }}
        />
        <Text>{userInfo.username}</Text>
        <Text>{userInfo.email}</Text>
      </View>
    </View>
  );
}
