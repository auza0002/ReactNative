import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { users } from "../users.js";
import { Keyframe } from "react-native-reanimated";

const ListItem = ({ users, navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: 40,
          marginVertical: 20,
          borderRadius: 10,
          shadowColor: "black",
          shadowOpacity: 0.2,
          shadowOffset: { width: 2, height: 5 },
        },
      ]}
    >
      <View style={styles.border}>
        <Text style={[styles.txt]}>{users.id}</Text>
      </View>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          },
          styles.border,
          { paddingTop: 35, paddingBottom: 35 },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Name: </Text>
          <Text style={{ fontSize: 15 }}>
            {users.first_name + " " + users.last_name[0] + "."}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Country: </Text>
          <Text style={{ fontSize: 15 }}>{users.address.state}</Text>
        </View>
      </View>
      <Button
        title="Details"
        onPress={() => {
          navigation.navigate("Person", { users: users });
        }}
      />
    </View>
  );
};

export default function HomeScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Text style={{ color: "black", textAlign: "center", margin: 30 }}>
        Home Screen
      </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <ListItem users={item} navigation={navigation} />
        )}
        //   ListEmptyComponent={}
        keyExtractor={(user) => user.uid}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  txt: {
    fontSize: 15,
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  border: {
    borderBottomColor: "rgb(65, 133, 247)",
    borderBottomWidth: 0.5,
  },
});
