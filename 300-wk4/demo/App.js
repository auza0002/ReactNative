import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const info = [
  {
    id: 302,
    uid: "d3455355-39fa-457a-839e-92241d30922c",
    username: "mandie.hintz",
    email: "mandie.hintz@email.com",
  },
  {
    id: 2747,
    uid: "0f293c11-de1a-44b8-8208-c33e124dcb27",
    username: "stanley.frami",
    email: "stanley.frami@email.com",
  },
  {
    id: 4168,
    uid: "50268bb7-5a01-4e14-9e8d-c9741ae030f3",
    username: "rochelle.ziemann",
    email: "rochelle.ziemann@email.com",
  },
  {
    id: 9374,
    uid: "a05412d9-cb96-445f-9bc0-f1c4ff98b7ba",
    username: "sean.hackett",
    email: "sean.hackett@email.com",
  },
  {
    id: 5857,
    uid: "5b5a7502-b99b-4d4c-b16a-110738c10105",
    username: "glady.gutkowski",
    email: "glady.gutkowski@email.com",
  },
  {
    id: 7090,
    uid: "356fffea-b33d-4c77-85c3-f8ff614cd025",
    username: "johana.predovic",
    email: "johana.predovic@email.com",
  },
  {
    id: 7890,
    uid: "a2420b87-01cb-4130-84e2-e59d2adfba99",
    username: "ike.mosciski",
    email: "ike.mosciski@email.com",
  },
  {
    id: 1512,
    uid: "f2528099-90f3-4e74-90da-675c9fd8d0a4",
    username: "margrett.stamm",
    email: "margrett.stamm@email.com",
  },
  {
    id: 499,
    uid: "a49a87b1-aab9-4a19-859a-eba3be61a5cb",
    username: "ute.west",
    email: "ute.west@email.com",
  },
  {
    id: 8874,
    uid: "31846cc7-d101-4690-bf69-2b67d0713778",
    username: "sharee.schuppe",
    email: "sharee.schuppe@email.com",
  },
];

const ListItem = ({ user, nav }) => {
  return (
    <View key={s.uid} style={s.listitem}>
      <Text style={s.nm}>{user.username}</Text>
      <Text style={s.em}>{user.email}</Text>
      <Pressable
        onPress={() => {
          nav("Details", {
            uid: user.uid,
            username: user.username,
            email: user.email,
          });
        }}
      >
        <Text style={s.btn}>See Details</Text>
      </Pressable>
    </View>
  );
};
const Empty = () => {
  return (
    <View style={s.listitem}>
      <Text style={s.nm}>Nothing to see here.</Text>
    </View>
  );
};

export default ({ route, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <FlatList
        style={s.list}
        data={info}
        renderItem={({ item }) => (
          <ListItem user={item} nav={navigation.navigate} />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(340, 40%, 50%)",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 30,
  },
  nm: {
    fontSize: 30,
    color: "#eee",
  },
  em: {
    fontSize: 15,
    color: "#ccc",
  },
  btn: {
    color: "gold",
    fontSize: 20,
  },
  listitem: {
    borderBottomWidth: 2,
    borderBottomColor: "#999",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  list: {
    width: "100%",
  },
});
