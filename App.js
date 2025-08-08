import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.rectangle}>
        <Text style={styles.text}>Hello World</Text>
        <View>
          <View style={styles.circle}></View>
          <View style={styles.circle2}></View>
          <View style={styles.circle3}></View>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginTop: 20 }}>
        <Text style={[styles.text, { color: "black" }]}>
          Welcome to React Native
        </Text>
        <Text style={[styles.text, { color: "blue" }]}>
          Welcome to cdm
        </Text>
      </View>
      <View style={{flexDirection:'row',backgroundColor:'gray',width:300,justifyContent:'space-between',padding:10,marginTop:20}}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "white",
          }}
        ></View>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: "white",
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  rectangle: {
    backgroundColor: "red",
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row-reverse",
    // borderRadius: 150,
  },
  container3: {
    backgroundColor: "purple",
  },
  circle: {
    height: 50,
    backgroundColor: "yellow",
    width: 50,
    borderRadius: 25,
  },
  circle2: {
    height: 50,
    backgroundColor: "black",
    width: 50,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 20,
  },
  circle3: {
    height: 50,
    backgroundColor: "blue",
    width: 50,
    borderRadius: 25,
    marginTop: 25,
  },
});
