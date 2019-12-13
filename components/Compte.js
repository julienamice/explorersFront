import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

class Compte extends Component {
  state = {
    userInfos: {}
  };

  componentDidMount() {
    fetch("http://192.168.1.21:3001/users/1") // fetch sur la route / de users/id //192.168.1.21 || 10.2.4.18
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
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      // gestion de la view globale
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          // right: 5,
          marginTop: 26,
          // marginLeft: 200,
          borderWidth: 1,
          // borderColor: "#DDDDDD",
          borderRadius: 5,
          backgroundColor: "white"
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
              // position: "absolute",
              // bottom: 4,
              // right: "55%",
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
              // color: "black",
              marginLeft: "3%",
              marginTop: "6%"
            }}
          >
            {this.state.userInfos.name} {this.state.userInfos.lastname}
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
            style={{ height: "20%" }}
            contentContainerStyle={{ width: "200%" }}
            horizontal={true}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width: "30%",
                height: "60%",
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
                width: "30%",
                height: "60%",
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
                style={{ marginLeft: "5%", fontWeight: "bold", fontSize: 18 }}
              >
                La Révolution Industrielle
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
          </ScrollView>

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
              left: "3%",
              paddingTop: "-20%",
              marginTop: "-4%",
              borderColor: "transparent"
            }}
            onPress={() => {
              console.log("En cours de construction");
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
              right: "14%",
              paddingTop: "-20%",
              marginTop: "-4%",
              borderColor: "transparent"
            }}
            onPress={() => {
              console.log("En cours de construction");
            }}
          />
        </View>
      </View>
    );
  }
}
//   console.log("toto");

export default withNavigation(Compte);
