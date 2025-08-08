import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
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
    flexDirection: "row",
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
