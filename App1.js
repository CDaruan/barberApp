import React from "react";
import { View, StyleSheet } from "react-native";
import CustomIcon from "./assets/agenda.svg";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomIcon width={120} height={120} fill="#FFFFFF" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  }
})