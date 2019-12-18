import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Image, Text, TextInput } from "react-native";
import { withNavigation } from "react-navigation";
import { ip } from "../config";

class PNIntro extends Component {
  state = {
    enigme: []
  };

  componentDidMount() {
    fetch(`http://${ip}:3001/enigmas/PN`) // fetch sur la route / de enigmas/PN
      .then(res => res.json()) // récupère les données de enigme
      // .then(console.log("res", res.json()))
      // .then(data => this.setState({ enigme: data })) // avec ces données modifie le state de enigme
      .then(
        data =>
          console.log("on a nos data ?", data) ||
          this.setState({ enigme: data })
      );
    // .then(console.log("enigme", this.state.enigme));
  }

  // componentDidMount() {
  //   fetch(`http://${ip}:3001/enigmas/PN`) // fetch sur la route / de enigmas/PN
  //     .then(res => {res.json(); console.log(res)}) // récupère les données de enigme
  //     // .then(console.log("res", res.json()))
  //     .then(data => this.setState({ enigme: data })) // avec ces données modifie le state de enigme
  //     .then(console.log("enigme", this.state.enigme));
  // }

  onPress = () => {
    // console.log("en construction");
    this.props.navigation.navigate("PNStep");
  };

  render() {
    return (
      <View
        style={{
          width: "98%",
          height: "94.5%",
          position: "absolute",
          marginTop: "9%",
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
            height: "90%",
            // position: "absolute",
            // top: 40,
            marginLeft: 20,
            marginRight: 15,
            justifyContent: "center",
            alignSelf: "center"
          }}
        >
          <Text>
            But de l'énigme du Pont-Neuf : Tu vas découvrir à quelle date le
            plus vieux pont de Paris fut classé aux monuments historiques !
          </Text>
          <Button
            title="GO"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: "9%",
              marginBottom: "1.5%",
              width: "80%",
              height: 40,
              marginTop: 50
              // borderRadius: 20,
              // position: "absolute",
              // bottom: "100%"
            }}
            onPress={() => {
              this.props.navigation.navigate("PNStep");
              // this.onPress();
              // console.log("en construction");
            }}
          />

          {/* <Text
            style={{ position: "absolute", top: 60, left: 20, marginRight: 15 }}
          > */}
          {/* {this.state.enigme[0].step_1.instruction} */}
          {/* {this.state.enigme[0] && this.state.enigme[0].step_1.instruction} */}
          {/* {this.state.enigme[0] && this.state.enimge.map(line => this.state.enigme[line].instruction) */}
          {/* </Text> */}
          {/* <TextInput
            style={{
              backgroundColor: "#F2F2F2",
              width: 180,
              marginLeft: 35,
              marginTop: 50,
              paddingLeft: 10,
              borderWidth: 1.5,
              borderRadius: 5
            }}
            //   onChangeText={value => setFirstName(value)}
            //   value={firstName}
            value="1"
            placeholder="John Doe"
          /> */}
          {/* <Text
            style={{
              position: "absolute",
              top: 150,
              left: 25,
              marginRight: 15
            }}
          >
            {this.state.enigme[1] && this.state.enigme[1].step_2.instruction}
          </Text> */}
          {/* <TextInput
            style={{
              backgroundColor: "#F2F2F2",
              width: 180,
              marginLeft: 35,
              marginTop: 60,
              paddingLeft: 10,
              borderWidth: 1.5,
              borderRadius: 5
            }}
            //   onChangeText={value => setFirstName(value)}
            //   value={firstName}
            value="2"
            placeholder="John Doe"
          /> */}
          {/* <Text
            style={{
              position: "absolute",
              top: 240,
              left: 25,
              marginRight: 15
            }}
          >
            {this.state.enigme[2] && this.state.enigme[2].step_3.instruction}
          </Text> */}
          {/* <TextInput
            style={{
              backgroundColor: "#F2F2F2",
              width: 180,
              marginLeft: 35,
              marginTop: 60,
              paddingLeft: 10,
              borderWidth: 1.5,
              borderRadius: 5
            }}
            //   onChangeText={value => setFirstName(value)}
            //   value={firstName}
            value="3"
            placeholder="John Doe"
          />
          <Text
            style={{
              position: "absolute",
              top: 330,
              left: 25,
              marginRight: 15
            }}
          >
            {this.state.enigme[3] && this.state.enigme[3].step_4.instruction}
          </Text>
          <TextInput
            style={{
              backgroundColor: "#F2F2F2",
              width: 180,
              marginLeft: 35,
              marginTop: 75,
              paddingLeft: 10,
              borderWidth: 1.5,
              borderRadius: 5
            }}
            //   onChangeText={value => setFirstName(value)}
            //   value={firstName}
            value="4"
            placeholder="John Doe"
          /> */}
        </View>
      </View>
    );
  }
}

export default withNavigation(PNIntro);
// export default PontNeuf;
