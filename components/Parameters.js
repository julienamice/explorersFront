import React, { Component } from "react";
import { Button } from "react-native-elements";
import { View, Image, Text, TextInput } from "react-native";
import SwitchToggle from "react-native-switch-toggle";

class Parameters extends Component {
  state = {
    userInfos: {},
    form: {},
    switchOn1: false
  };

  componentDidMount() {
    fetch("http://192.168.1.21:3001/users/1") // fetch sur la route / de users/id //192.168.1.21 || 10.2.4.18
      .then(res => res.json()) // récupère les données de userInfos
      .then(
        data =>
          this.setState({
            userInfos: data, //, () => console.log("la", this.state.userInfos)
            form: data,
            switchOn1: data.teacher
          })

        // .catch(error => console.log(error))
      ); // avec ces données modifie le state de userInfos
  }

  onPress1 = () => {
    this.setState({
      switchOn1: !this.state.switchOn1,
      form: { ...this.state.form, teacher: !this.state.switchOn1 }
    });
  };

  delete = () => {
    console.log("en cours");
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 360,
          //   borderWidth: 1,
          backgroundColor: "white",
          //   borderRadius: 2,
          paddingLeft: "5%",
          //   paddingTop: "-25%"
          marginTop: 20
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Mes informations
        </Text>
        <View>
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              borderColor: "black",
              borderWidth: 1,
              alignSelf: "center",
              marginLeft: "-5%",
              marginTop: 20,
              marginBottom: 20
            }}
          />
          {/* <Text>{this.state.userInfos.name}</Text> */}
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TextInput
              style={{
                backgroundColor: "#F2F2F2",
                width: 145,
                height: 40,
                marginRight: 5,
                marginLeft: -19,
                paddingLeft: 5,
                borderWidth: 1.5,
                borderRadius: 5
              }}
              onFocus={() =>
                this.setState({ form: { ...this.state.form, name: "" } })
              }
              onChangeText={value =>
                this.setState({ form: { ...this.state.form, name: value } })
              }
              value={this.state.form.name}
              placeholder={this.state.userInfos.name}
            />
            <TextInput
              style={{
                backgroundColor: "#F2F2F2",
                width: 145,
                height: 40,
                marginLeft: 5,
                paddingLeft: 5,
                borderWidth: 1.5,
                borderRadius: 5
              }}
              onFocus={() =>
                this.setState({ form: { ...this.state.form, lastname: "" } })
              }
              onChangeText={value =>
                this.setState({
                  form: { ...this.state.form, lastname: value }
                })
              }
              value={this.state.form.lastname}
              placeholder={this.state.userInfos.lastname}
            />
          </View>
          <TextInput
            style={{
              backgroundColor: "#F2F2F2",
              width: 300,
              height: 40,
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10,
              marginLeft: -19,
              paddingLeft: 5,
              borderWidth: 1.5,
              borderRadius: 5
            }}
            onFocus={() =>
              this.setState({ form: { ...this.state.form, email: "" } })
            }
            onChangeText={value =>
              this.setState({
                form: { ...this.state.form, email: value }
              })
            }
            value={this.state.form.email}
            placeholder={this.state.userInfos.email}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 15,
              marginLeft: 10,
              marginTop: 5
            }}
          >
            <Text>Je suis enseignant-e</Text>
            <SwitchToggle
              containerStyle={{
                marginTop: -5,
                marginRight: 5,
                marginBottom: 5,
                width: 60,
                height: 30,
                borderRadius: 25,
                backgroundColor: "white",
                padding: 5
              }}
              circleStyle={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "grey",
                backgroundColor: "white"
              }}
              switchOn={this.state.switchOn1}
              onPress={this.onPress1}
              circleColorOff="white"
              circleColorOn="#C1EA69"
              duration={500}
            />
          </View>
          <Button
            title="Supprimer mon compte"
            titleStyle={{
              color: "black",
              textDecorationLine: "underline"
            }}
            buttonStyle={{
              backgroundColor: "transparent",
              width: 300,
              marginLeft: 5,
              marginBottom: 5
            }}
            onPress={this.delete}
          />
          <Button
            title="Enregistrer"
            titleStyle={{ color: "black" }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              width: 300,
              marginLeft: 5
              //   marginBottom: -15
            }}
            onPress={() => console.log(this.state.form)}
          />
        </View>
      </View>
    );
  }
}
export default Parameters;
