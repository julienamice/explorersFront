import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

class Compte extends Component {
  render() {
    return (
      <View
        style={{
          width: 350,
          height: 650,
          position: "absolute",
          right: 5,
          marginTop: 70,
          // marginLeft: 200,
          borderWidth: 1,
          // borderColor: "#DDDDDD",
          borderRadius: 5,
          backgroundColor: "green"
        }}
      >
        <Text>Toto</Text>
      </View>
    );
  }
}
//   console.log("toto");

export default Compte;
