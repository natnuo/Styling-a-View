import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.squareContainer}>
        <View style={{ ...styles.square, backgroundColor: "#f00" }}></View>
        <View style={{ ...styles.square, backgroundColor: "#4f4" }}></View>
        <View style={{ ...styles.square, backgroundColor: "#00f" }}></View>
      </View>
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
  squareContainer: {
    height: 500,
    width: 500,
    borderWidth: 4,
    borderColor: "black",
    flexDirection: "row",
    alignItems: "center",
    
    // ADD YOUR CODE HERE
  },
  square: {
    width: 200,
    height: 200,
  }
});
