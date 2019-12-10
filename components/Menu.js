import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import Compte from "./Compte";

class Menu extends Component {
  state = {
    displayCompte: false
  };

  onPress = () => {
    this.setState({ displayCompte: !this.state.displayCompte });
  };

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
          backgroundColor: "grey"
        }}
      >
        {/* <Text>Toto</Text> */}
        <Button
          title="Mon Compte"
          titleStyle={{
            color: "black",
            fontSize: 14
          }}
          buttonStyle={{
            backgroundColor: "red",
            width: 100,
            height: 45,
            position: "absolute",
            right: 5
            // zIndex: 10 ne fonctionne pas......
          }}
          onPress={() => {
            this.onPress();
          }}
        />
        {this.state.displayCompte && <Menu /> && <Compte />}
      </View>
    );
  }
}

export default Menu;
