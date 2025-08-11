import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profile from "./assets/ROSE.jpg";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>App</Text>
      <Image source={profile} style={styles.image} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CDM</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize:15
  },
  button: {
    backgroundColor: 'green',
    height: 50,
    width: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  }
});
