import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import Mapps from "./Mapps";
import MappsPN from "./MappsPN";

class PNIntro extends Component {
  state = {
    enigme: []
  };

  // componentDidMount() {
  //   fetch(`http://${ip}:3001/enigmas/PN`) // fetch sur la route / de enigmas/PN
  //     .then(res => res.json()) // récupère les données de enigme
  //     .then(
  //       data =>
  //         console.log("on a nos data ?", data) ||
  //         this.setState({ enigme: data })
  //     );
  // }

  render() {
    return (
      <View
        style={{
          width: "98%",
          height: "94.5%",
          position: "absolute",
          marginTop: "3%",
          marginLeft: "1%",
          borderWidth: 2,
          borderTopColor: "#D7D7D6",
          borderColor: "transparent",
          borderRadius: 15,
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: -10
          },
          shadowRadius: 50,
          shadowOpacity: 1.0,
          elevation: 15
        }}
      >
        <View
          style={{
            width: "90%",
            height: "60%",
            marginLeft: 20,
            marginRight: 15,
            marginTop: 100,
            marginBottom: 350,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "700" }}>
            Votre seconde mission
          </Text>
          <Text> </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Tu vas découvrir à quelle date le plus vieux pont de Paris fut
            classé aux monuments historiques !
          </Text>
          <MappsPN />
          <Button
            title="GO"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: "8%",
              marginBottom: -80,
              width: "80%",
              height: 40,
              marginTop: 50
            }}
            onPress={() => {
              this.props.navigation.navigate("PNStep");
            }}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(PNIntro);
