import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Text, Image, TextInput } from "react-native";
import { withNavigation } from "react-navigation";

class MultiStep extends Component {
  state = {
    currentStep: 0,
    steps: [],
    answer: ""
  };

  //   componentDidMount() {
  //     fetch("http://${ip}:3001/enigmas/PN")
  //       .then(res => res.json())
  //       .then(data => this.setState({ steps: data }));
  //   }

  //   handleChange = value => this.setState({ answer: value });

  //   handleValidate = () => {
  //     const { steps, currentStep, answer } = this.state;

  //     if (steps[currentStep].reponse === answer) {
  //       // bonne réponse
  //       if (currentStep <= steps.length) {
  //         // il reste des steps
  //         this.setState({ currentStep: currentStep + 1, answer: "" });
  //       } else {
  //         // toutes les steps ont été faites
  //         this.setState({ currentStep: 0, answer: "", steps: [] });
  //         this.props.navigation.navigate("ThemeList");
  //       }
  //     } else {
  //       //mauvaise réponse
  //       this.setState({ answer: "" });
  //     }
  //   };

  render() {
    // const { steps, currentStep, answer } = this.state;

    // if (steps.length <= 0) {
    //   // pas encore reçu les data du fetch
    //   return <Text>toto</Text>;
    // }

    return (
      <View>
        {/* <Text>{steps[currentStep] && steps[currentStep].instruction}</Text>
        <TextInput onChange={this.handleChange} value={answer} />
        <Button title="Valider" onPress={this.handleValidate} /> */}
        <Text>TOTO</Text>
      </View>
    );
  }
}

export default withNavigation(MultiStep);
