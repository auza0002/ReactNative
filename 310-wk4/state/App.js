import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect, useRef } from "react";

export default function App() {
  // re-render maens the App() is called again
  let dt = new Date();
  const [info, setInfo] = useState(null);
  //! null is the default value. info is the state variable, setinfo is the update method
  const [uid, setUid] = useState(() => {
    let d = dt.valueOf(); // a numeric value for the date
    return d;
    // the number in d is assegined to uid
  });
  // setInfo and setUid will trigger a re-render of the UI

  useEffect(() => {});
  // runs on initial render and every re render
  useEffect(() => {}, []); // runs on initial render only
  useEffect(() => {}, [info]); // runs on initial render and when info changes

  return (
    <View style={styles.container}>
      <Text>
        {info} {uid} {dt.getFullYear()}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
