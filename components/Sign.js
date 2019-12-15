import React, { Component } from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import { withNavigation } from "react-navigation";
import { Text, Button } from "react-native-elements";
import SwitchToggle from "react-native-switch-toggle";
import { Foundation, FontAwesome } from "@expo/vector-icons";

class Sign extends Component {
  state = {
    userInfos: {
      firstName: "",
      email: "",
      password: "",
      isTeacher: false
    },
    connexionMode: true
  };

  onPressInsc = () => {
    fetch(
      `http://192.168.1.21:3001/users/${
        this.state.connexionMode ? "signin" : "signup"
      }`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: this.state.userInfos
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Load data in local storage and navigate to home page
      })
      .catch(error => {
        console.error("Request failed in my Sign-Up Home request", error);
      });
    console.log(this.state.userInfos);
  };

  onPressConnex = () => this.setState({ connexionMode: true });

  onPressInscription = () => this.setState({ connexionMode: false });

  setFirstName = value =>
    this.setState({ userInfos: { ...this.state.userInfos, firstName: value } });

  setEmail = value =>
    this.setState({ userInfos: { ...this.state.userInfos, email: value } });

  setPassword = value =>
    this.setState({ userInfos: { ...this.state.userInfos, password: value } });

  setIsTeacher = value =>
    this.setState({ userInfos: { ...this.state.userInfos, isTeacher: value } });

  render() {
    const { navigate } = this.props.navigation;
    const { connexionMode } = this.state;
    return (
      <TouchableOpacity onPress={() => navigate("ThemeList")}>
        <View
          style={{
            width: "90%",
            height: 500,
            marginTop: "15%",
            marginLeft: "5%",
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 8,
            marginBottom: 20,
            marginRight: 5,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 70,
              height: 70,
              position: "absolute",
              top: "6%",
              left: "39%"
            }}
            color="black"
          />
          <View
            style={{
              width: "90%",
              height: "10%",
              flexDirection: "row",
              marginTop: 100,
              marginLeft: 15
            }}
          >
            {connexionMode ? (
              <Button
                title="Connexion"
                titleStyle={{ color: "black", marginLeft: 5 }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  left: 20,
                  top: 3,
                  marginTop: "4%",
                  borderColor: "transparent",
                  flexDirection: "column-reverse"
                }}
                icon={<FontAwesome name="circle" size={10} color="#C1EA69" />}
                onPress={this.onPressConnex}
              />
            ) : (
              <Button
                title="Connexion"
                titleStyle={{ color: "black", marginLeft: 5 }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  left: 20,
                  top: 3,
                  marginTop: "4%",
                  borderColor: "transparent",
                  flexDirection: "column-reverse"
                }}
                icon={
                  <FontAwesome name="circle" size={10} color="transparent" />
                }
                onPress={this.onPressConnex}
              />
            )}
            {connexionMode ? (
              <Button
                title="Inscription"
                titleStyle={{ color: "black", marginLeft: 5 }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  left: 150,
                  top: 3,
                  marginTop: "4%",
                  borderColor: "transparent",
                  flexDirection: "column-reverse"
                }}
                icon={
                  <FontAwesome name="circle" size={10} color="transparent" />
                }
                onPress={this.onPressInscription}
              />
            ) : (
              <Button
                title="Inscription"
                titleStyle={{ color: "black", marginLeft: 5 }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  left: 150,
                  top: 3,
                  marginTop: "4%",
                  borderColor: "transparent",
                  flexDirection: "column-reverse"
                }}
                icon={<FontAwesome name="circle" size={10} color="#C1EA69" />}
                onPress={this.onPressInscription}
              />
            )}
          </View>
          {connexionMode ? (
            <Connexion
              firstName={this.state.userInfos.firstName}
              setFirstName={this.setFirstName}
              password={this.state.userInfos.password}
              setPassword={this.setPassword}
            />
          ) : (
            <Inscription
              firstName={this.state.userInfos.firstName}
              setFirstName={this.setFirstName}
              email={this.state.userInfos.email}
              setEmail={this.setEmail}
              password={this.state.userInfos.password}
              setPassword={this.setPassword}
              isTeacher={this.state.userInfos.isTeacher}
              setIsTeacher={this.setIsTeacher}
            />
          )}
          <Button
            title="Connexion"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              position: "absolute",
              marginLeft: "9%",
              marginBottom: -18,
              width: "80%",
              height: 38,
              position: "absolute",
              bottom: 0
            }}
            onPress={() => {
              this.onPressInsc();
              //   console.log("en construction");
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Sign);

// ----------------------------------------------------------------------------------------------------------------------------

class Inscription extends Component {
  render() {
    const {
      firstName,
      setFirstName,
      email,
      setEmail,
      password,
      setPassword,
      isTeacher,
      setIsTeacher
    } = this.props;
    return (
      <View
        style={{
          width: "90%",
          height: 290,
          marginLeft: "5%",
          marginBottom: 20,
          marginRight: 5,
          backgroundColor: "white"
        }}
      >
        <Text style={{ position: "absolute", top: 8, left: 38 }}>
          Your FirstName
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 30,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setFirstName(value)}
          value={firstName}
          placeholder="John Doe"
        />
        <Text style={{ position: "absolute", top: 78, left: 38 }}>
          Your Email
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 38,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setEmail(value)}
          value={email}
          placeholder="john@gmail.com"
        />
        <Text style={{ position: "absolute", top: 148, left: 38 }}>
          Your Password
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: "14%",
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setPassword(value)}
          value={password}
          placeholder="********"
        />
        <Text style={{ position: "absolute", top: 220, left: 40 }}>
          Teacher
        </Text>
        <SwitchToggle
          containerStyle={{
            marginTop: 40,
            marginLeft: 40,
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
          switchOn={isTeacher}
          onPress={setIsTeacher}
          circleColorOff="white"
          circleColorOn="#C1EA69"
          duration={500}
        />
      </View>
    );
  }
}

// -----------------------------------------------------------------------------------------------------------

class Connexion extends Component {
  render() {
    const { firstName, setFirstName, password, setPassword } = this.props;
    return (
      <View
        style={{
          width: "90%",
          height: 290,
          marginLeft: "5%",
          marginBottom: 20,
          marginRight: 5,
          backgroundColor: "white"
        }}
      >
        <Text style={{ position: "absolute", top: 8, left: 38 }}>
          Your FirstName
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 30,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setFirstName(value)}
          value={firstName}
          placeholder="John Doe"
        />
        <Text style={{ position: "absolute", top: 78, left: 38 }}>
          Your Pass
        </Text>
        <TextInput
          style={{
            backgroundColor: "#F2F2F2",
            width: 180,
            marginLeft: 35,
            marginTop: 38,
            paddingLeft: 10,
            borderWidth: 1.5,
            borderRadius: 5
          }}
          onChangeText={value => setPassword(value)}
          value={password}
          placeholder="********"
        />
      </View>
    );
  }
}
