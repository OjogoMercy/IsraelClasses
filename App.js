import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import profile from "./assets/ROSE.jpg";
import travel from './assets/travel.png'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LET'S</Text>
      <Text style={[styles.text,{fontSize:30,fontWeight:'bold'}]}>EXPLORE</Text>
      <Text style={[styles.text,{fontSize:24}]}>THE WORLD</Text>
      <Text style={styles.text}>
        This is your assignment to be submitted on or before thursday , and
        there is no room for excuses .Other assignments wil be passed across to
        you
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTER</Text>
      </TouchableOpacity>
      <Image source={travel} style={ styles.image} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    height: 350,
    width: 350,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  button: {
    backgroundColor: "#425884",
    height: 50,
    width: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#87ceeb",
    padding: 20,
  },
  text: {
    color: "#425884",
    fontSize: 15,
    textAlign: "left",
    marginTop: 5,
  },
});
