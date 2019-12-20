import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Parameters from "./Parameters";
import { ip } from "../config";

class Compte extends Component {
  state = {
    userInfos: {},
    param: false
  };

  componentDidMount() {
    fetch(`http://${ip}:3001/users/1`) // fetch sur la route / de users/id //192.168.1.21 || 10.2.4.18
      .then(res => res.json()) // récupère les données de userInfos
      .then(
        data =>
          this.setState(
            { userInfos: data } //, () => console.log("la", this.state.userInfos)
          )

        // .catch(error => console.log(error))
      ); // avec ces données modifie le state de userInfos
  }

  onPress = () => {
    this.props.navigation.navigate("ThemeList");
  };

  onPressParams = () => {
    this.setState({ param: !this.state.param });
  };

  render() {
    return (
      // gestion de la view globale
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
        {/* <Text>Toto</Text> */}
        {/* view englobante  */}
        {/* <View> */}
        {/* gestion de la view avatar name et icon */}
        <View style={{ flexDirection: "row" }}>
          <Button
            icon={<AntDesign name="close" size={20} />}
            buttonStyle={{
              backgroundColor: "transparent",
              left: "550%",
              top: "5%",
              borderColor: "transparent",
              borderRadius: 5
            }}
            onPress={() => {
              // console.log("En cours de construction");
              this.onPress();
            }}
          />
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderColor: "black",
              borderWidth: 1,
              marginLeft: "-6%",
              marginTop: "5%"
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: "3%",
              marginTop: "6%"
            }}
          >
            {/* {this.state.userInfos.name} {this.state.userInfos.lastname} */}
            Amélie C.
            <Text> </Text>
            <Ionicons name="md-school" size={20} />
          </Text>
        </View>
        {/* view pour l'encart des anciens parcours + les cartes des questions*/}
        <View>
          <Text style={{ marginLeft: "5%", marginTop: "5%", fontSize: 20 }}>
            Mes anciens parcours :
          </Text>
          <ScrollView
            style={{ height: 100 }}
            contentContainerStyle={{ width: "150%" }}
            horizontal={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={true}
          >
            <View
              style={{
                width: "40%",
                height: 84,
                marginLeft: "5%",
                borderRadius: 5,
                marginTop: "2%",
                marginBottom: "2%",
                backgroundColor: "#F2F2F2",
                justifyContent: "center"
              }}
            >
              <Text style={{ marginLeft: "5%", marginTop: "-10%" }}>
                15 questions
              </Text>
              <Text
                style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 18 }}
              >
                Les misérables
              </Text>
              <Button
                icon={<Ionicons name="ios-arrow-forward" size={20} />}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  bottom: 4,
                  right: "3%",
                  borderColor: "transparent",
                  borderRadius: 5
                }}
                onPress={() => {
                  console.log("En cours de construction");
                }}
              />
            </View>
            <View
              style={{
                width: "45%",
                height: 84,
                marginLeft: "5%",
                borderRadius: 5,
                marginTop: "2%",
                marginBottom: "2%",
                backgroundColor: "#F2F2F2",
                justifyContent: "center"
              }}
            >
              <Text style={{ marginLeft: "5%", marginTop: "-10%" }}>
                23 questions
              </Text>
              <Text
                style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 16 }}
              >
                La Révolution Industrielle
              </Text>
              <Button
                icon={<Ionicons name="ios-arrow-forward" size={20} />}
                buttonStyle={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  bottom: 0,
                  right: "3%",
                  borderColor: "transparent",
                  borderRadius: 5
                }}
                onPress={() => {
                  console.log("En cours de construction");
                }}
              />
            </View>
          </ScrollView>
          {this.state.param && <Parameters />}
          {/* </View> */}
          {/* <UserCard /> */}
          <Button
            // icon={<Icon name="arrow-forward" color="black" />}
            icon={<Ionicons name="md-settings" size={20} />}
            title="Paramètres"
            titleStyle={{ color: "black", marginLeft: 5 }}
            buttonStyle={{
              backgroundColor: "transparent",
              position: "absolute",
              left: "10%",
              marginTop: "4%",
              borderColor: "transparent"
            }}
            onPress={() => {
              // console.log("En cours de construction");
              this.onPressParams();
            }}
          />
          <Button
            // icon={<Icon name="arrow-forward" color="black" />}
            icon={<FontAwesome name="power-off" size={20} />}
            title="Se déconnecter"
            titleStyle={{ color: "black", marginLeft: 5 }}
            buttonStyle={{
              backgroundColor: "transparent",
              position: "absolute",
              right: "8%",
              marginTop: "4%",
              borderColor: "transparent"
            }}
            onPress={() => {
              // console.log("En cours de construction");
              this.onPress();
            }}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(Compte);
