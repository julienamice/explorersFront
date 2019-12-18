import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Text, Image, TextInput } from "react-native";
import { withNavigation } from "react-navigation";
import { ip } from "../config";

class MultiStep extends Component {
  state = {
    currentStep: 0,
    steps: [],
    answer: ""
  };

  componentDidMount() {
    fetch(`http://${ip}:3001/enigmas/PN`) // fetch sur la route / de enigmas/PN
      .then(res => res.json()) // récupère les données de enigme
      .then(data => this.setState({ steps: data }));
  }

  handleChange = value => this.setState({ answer: value });

  handleValidate = () => {
    const { steps, currentStep, answer } = this.state;

    if (steps.length > 0 && steps[currentStep].solution === answer) {
      // bonne réponse
      if (currentStep < steps.length - 1) {
        // il reste des steps
        this.setState({ currentStep: currentStep + 1, answer: "" });
      } else {
        // toutes les steps ont été faites
        this.setState({ currentStep: 0, answer: "", steps: [] });
        this.props.navigation.navigate("ThemeList");
      }
    } else {
      //mauvaise réponse
      this.setState({ answer: "" });
    }
  };

  render() {
    const { steps, currentStep, answer } = this.state;

    if (steps.length <= 0) {
      // pas encore reçu les data du fetch
      return <Text>en attente des données</Text>;
    }

    return (
      <View
        style={{ width: "90%", height: "50%", marginTop: 200, marginLeft: 18 }}
      >
        <Text>{steps[currentStep] && steps[currentStep].instruction}</Text>
        {/* <TextInput onChange={this.handleChange} value={answer} /> */}
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 240,
            marginLeft: 35,
            marginTop: 30,
            marginBottom: 15,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={this.handleChange}
          value={answer}
          placeholder="Votre Réponse"
        />
        {/* <Button title="Valider" onPress={this.handleValidate} /> */}
        <Button
          title="Valider"
          titleStyle={{
            color: "black",
            fontSize: 14
          }}
          buttonStyle={{
            backgroundColor: "#C1EA69",
            marginLeft: "9%",
            marginBottom: -18,
            width: "80%",
            height: 38,
            position: "absolute",
            bottom: -30
          }}
          onPress={() => {
            this.handleValidate();
            // this.onPressInsc();
            //   console.log("en construction");/*  */
          }}
        />
        {/* <Text>TOTO</Text> */}
      </View>
    );
  }
}

export default withNavigation(MultiStep);
