import React, { Component } from "react";

import { View, Image, ScrollView, StatusBar } from "react-native";
import { Button, Text, Icon } from "react-native-elements";
import { Foundation } from "@expo/vector-icons";
import MyImage from "./Image";
import PNIntro from "./PNIntro";
import SwitchMapps from "./SwitchMapps";
import IntroTrail from "./intro.enigma";

class TrailDetails extends Component {
  state = {
    trailDetails: {},
    displayTeacher: true
  };

  onPress = () => {
    this.setState({ displayTeacher: !this.state.displayTeacher });
  };

  go = () => {
    this.props.navigation.navigate("IntroTrail");
  };

  componentDidMount() {
    this.loadTrail();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.navigation.state.params.id ===
      this.props.navigation.state.params.id
    ) {
      return;
    }

    this.loadTrail();
  }

  loadTrail = () =>
    fetch(
      `http://10.2.4.18:3001/trails/${this.props.navigation.state.params.id}`
    ) // fetch sur la route / de trails/id //192.168.1.21 || 10.2.4.18
      // fetch(`http://${ip}trails/enigma${this.props.navigation.state.params.id}`)
      .then(res => res.json()) // récupère les données de trailList
      .then(data => this.setState({ trailDetails: data })); // avec ces données modifie le state de trailList

  render() {
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    // console.log(navigation.state.params.id);
    return (
      <View>
        <StatusBar hidden={true} />
        {/*  gestion de l'affichage global */}
        <ScrollView
          style={{
            width: "100%",
            // height: "96.2%",
            // marginTop: 27,
            marginBottom: 50,
            // marginLeft: 200,
            borderWidth: 1,
            borderColor: "#DDDDDD",
            borderRadius: 5,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomColor: "rgba(217, 198, 186, 0.6)",
            // backgroundColor: "#D3D4D5",
            borderTopWidth: 0
          }}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={StyleSheet.absoluteFillObject}
        >
          <Button
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
            onPress={() => navigate("ThemeList")}
          />
          {/* récupérer l'id pour faire un test dessus pour savoir de quelle case du tab trailList il faut afficher les infos */}
          {/* <Text>parcours : {navigation.state.params.id}</Text> */}
          <MyImage
            type={this.state.trailDetails.img}
            style={{
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              height: 250,
              width: "100%"
            }}
          />
          {/* no panic ! btn de test pour ma logique de toggle des notions du programme si isTeacher est true */}
          <View
            style={{
              width: "86%",
              marginRight: 26,
              marginLeft: 26,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {/* <Button
              title="Teacher"
              titleStyle={{
                color: "black",
                fontSize: 14
              }}
              buttonStyle={{
                backgroundColor: "#C1EA69",
                width: 70,
                height: 35,
                borderRadius: 20
              }}
              onPress={() => {
                this.onPress();
              }}
            /> */}
            {/* gestion de l'affichage des données récupérées de trailList */}
            <View
              style={{
                width: "86%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {this.state.trailDetails.parcours}
              </Text>
              {/* {this.props.parcours} */}
              <Text style={{ marginRight: 10, marginBottom: 10, fontSize: 14 }}>
                <Foundation name="marker" size={20} color="#C1EA69" />
                <Text> </Text>
                {this.state.trailDetails.location}
              </Text>
            </View>
            <Text style={{ fontSize: 16 }}>
              {this.state.trailDetails.subtitle}
            </Text>
            <Text style={{ height: 60 }}>{this.state.trailDetails.desc}</Text>
            {this.state.displayTeacher && (
              <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {this.state.trailDetails.details}
                </Text>
                <Text style={{ fontSize: 15, textDecorationLine: "underline" }}>
                  {this.state.trailDetails.matiere}
                </Text>
                <Text style={{ fontSize: 15 }}>
                  {this.state.trailDetails.notions}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    textDecorationLine: "underline",
                    // marginLeft: 1,
                    marginTop: 12
                  }}
                >
                  Mais aussi :
                </Text>
                <View
                  style={{
                    width: 200,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  {this.state.trailDetails.tag1 ? (
                    <Button
                      title={this.state.trailDetails.tag1}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        width: 40,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                  {this.state.trailDetails.tag2 ? (
                    <Button
                      title={this.state.trailDetails.tag2}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        width: 80,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                  {this.state.trailDetails.tag3 ? (
                    <Button
                      title={this.state.trailDetails.tag3}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        width: 60,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                  {this.state.trailDetails.tag4 ? (
                    <Button
                      title={this.state.trailDetails.tag4}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        width: 90,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                  {this.state.trailDetails.tag5 ? (
                    <Button
                      title={this.state.trailDetails.tag5}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        marginLeft: 15,
                        width: 140,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                  {this.state.trailDetails.tag6 ? (
                    <Button
                      title={this.state.trailDetails.tag6}
                      titleStyle={{
                        color: "black",
                        fontSize: 14
                      }}
                      buttonStyle={{
                        backgroundColor: "#D9C6BA",
                        marginTop: 8,
                        marginLeft: 15,
                        width: 150,
                        height: 28,
                        borderRadius: 5
                      }}
                    />
                  ) : null}
                </View>
                {/* <Text style={{ fontSize: 15 }}>
                  {this.state.trailDetails.tag}
                </Text> */}
              </View>
            )}
            {/* <Text style={{ height: 100 }}>{this.state.trailDetails.desc}</Text>
            <Text style={{ height: 100 }}>{this.state.trailDetails.desc}</Text>
            <Text style={{ height: 100 }}>{this.state.trailDetails.desc}</Text>
            <Text style={{ height: 100 }}>{this.state.trailDetails.desc}</Text> */}
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: "#DDDDDD",
              borderRadius: 8,
              marginBottom: 20,
              // marginRight: "1%",
              marginLeft: "7%",
              marginTop: 15,
              width: "86%",
              justifyContent: "center",
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
            <View style={{ flex: 1 }}>
              <SwitchMapps mapName={this.state.trailDetails.mapName} />
            </View>
            {/* <Image
              source={require("../assets/Map2.png")}
              style={{
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                width: "100%"
              }}
            /> */}
            {/* gestion du picto et départ */}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // marginBottom: 15,
                marginRight: 204,
                marginLeft: 25,
                marginTop: "1%"
              }}
            >
              <Foundation name="marker" size={25} color="#C1EA69" />
              <Text style={{ marginTop: "4%" }}>Départ</Text>
            </View>

            {/* gestion de l'image et zone découverte */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/rctg.png")}
                style={{
                  width: 35,
                  height: 30,
                  // borderRadius: 20,
                  // borderColor: "black",
                  // borderWidth: 1
                  marginLeft: 15
                  // marginTop: "5%"
                }}
              />
              <Text
                h5
                style={{
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 5
                }}
              >
                Zone découverte
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
                marginRight: 10,
                marginLeft: 10
              }}
            >
              {/* <Text h4>{this.props.subtitle}</Text>
              <Text style={{ marginTop: 10 }}>
                {getRating(this.props.rating)}
              </Text> */}
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            width: "100%",
            height: 50
          }}
        >
          {/* gestion du bouton "choisir ce parcours" */}
          <Button
            title="Choisir ce parcours"
            titleStyle={{
              color: "black",
              fontSize: 14
            }}
            buttonStyle={{
              backgroundColor: "#C1EA69",
              marginLeft: "7%",
              marginBottom: "1.5%",
              width: "85%",
              height: 38,
              // borderRadius: 20,
              position: "absolute",
              bottom: "100%"
            }}
            onPress={() => {
              this.go();
              // console.log("en construction");
              // navigate("IntroTrail", { id: this.props.id });
            }}
          />
          {/* <Text>
            Parcours
          </Text> */}
          {/* {this.props.parcours} */}
          {/* <Text style={{ marginRight: 10, marginLeft: 10 }}>
            <Foundation name="marker" size={15} />
            <Text> </Text> */}
          {/* {this.props.location} */}
          {/* location
          </Text> */}
        </View>
        {/* <TouchableOpacity

          style={{
            alignItems: 'center',
            backgroundColor: '#C1EA69',
            width: '86%',
            height: 40,
            borderRadius: 4,
            borderColor: 'transparent'
          }}
        >
          <Text>Select</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default TrailDetails;
