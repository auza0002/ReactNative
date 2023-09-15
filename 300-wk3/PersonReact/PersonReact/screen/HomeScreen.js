import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { users } from "../users.js";

const ListItem = ({ users, navigation }) => {
  return (
    <>
      <View style={[styles.container, { margin: 10, borderRadius: 10 }]}>
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
    </>
  );
};

export default function HomeScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View>
      <Text style={{ color: "red" }}>Home Screen</Text>
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

{
  /* <Button
  title="Person details"
  onPress={() => {
    navigation.navigate("Person");
  }}
/>; */
}
