import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
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

  (function () {
    // just like useEffect(()=>{})
  })();

  useEffect(() => {});
  // runs on initial render and every re render
  useEffect(() => {}, []); // runs on initial render only
  useEffect(() => {}, [info]); // runs on initial render and when info changes

  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    let timer = setInterval(() => {
      fetch(stockAPIURl)
        .then((res) => res.json())
        .then((stockdata) => setStocks(stockdata))
        .catch((err) => console.log(err));
    }, 60000);
    // when app is removes from the Ui
    // we want to clean up tehis functionallity
    return function () {
      clearInterval(timer);
    };
  }, []);
  const secret = useRef(() => {
    return crypto.randomUUID();
    // return value is placed into the "current" property value
  });
  let secret1 = {
    current: "your value is here",
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          secret.current = crypto.randomUUID();
          // changing secret.current does not rerender the component
          setInfo("new info");
          // setInfo tiggers the rerender that will show the new secret.current
        }}
      >
        <Text>
          {info} {uid} {dt.getFullYear()} {secret.current}
        </Text>
      </Pressable>
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
