import React, { Component } from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { Button, Icon } from "react-native-elements";
// import Header from "./Header";
import HeaderMenu from "./HeaderMenu";

class Menu extends Component {
  state = {
    displayCompte: false
  };

  onPress = () => {
    // this.setState({ displayCompte: !this.state.displayCompte });
    this.props.navigation.navigate("Compte");
  };

  render() {
    // const { goBack } = this.props.navigation;
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          // right: "1.5%",

          // marginTop: "7.5%",
          // marginLeft: 200,
          borderWidth: 1,
          // borderColor: "#DDDDDD",
          borderRadius: 5,
          backgroundColor: "grey",
          // zIndex: 50,
          elevation: 50
        }}
      >
        <HeaderMenu />
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
        {/* <Button
          icon={<Icon name="arrow-back" color="black" />}
          buttonStyle={{
            backgroundColor: "transparent",
            position: "absolute",
            top: 4,
            left: 15,
            zIndex: 4,
            borderColor: "transparent",
            borderRadius: 5
          }}
          // onPress=
          onPress()
        /> */}
        {/* {this.state.displayCompte && <Menu /> && <Compte />} */}
      </View>
    );
  }
}

export default withNavigation(Menu);
