import React, { Component } from "react";
import { ImageBackground, View, ScrollView } from "react-native";
import { Card, Button, Icon, Text } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Header from "./Header";
import TrailCard from "./TrailCard";

class ThemeList extends Component {
  state = {
    trailList: []
  };

  componentDidMount() {
    console.log("juste avant le fetch");
    fetch("http://192.168.1.80:3001/trails") // fetch sur la route / de trails //192.168.1.12 || 10.2.4.18
      .then(res => res.json()) // récupère les données de trailList
      .then(data => this.setState({ trailList: data })); // avec ces données modifie le state de trailList
  }

  render() {
    const { trailList } = this.state;

    return (
      <ImageBackground
        source={require("../assets/background-2.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* gestion de l'ensemble des éléments de la 'page' */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5
          }}
        >
          <Header />
          {/* gestion de l'encart du corps de la page */}
          <ScrollView
            style={{
              width: "90%",
              height: "90%",
              marginBottom: -25
            }}
            showsVerticalScrollIndicator={false}
          >
            {/* gestion  de l'encart pour "quizz du moi"*/}
            <View
              style={{
                paddingTop: 5,
                width: "60%",
                height: "5%"
              }}
            >
              {/* gestion de l'écriture/du texte de l'encart "quizz du mois" */}
              <Text
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: 30
                }}
              >
                {/* texte apparaissant dans l'encart */}
                Quizz du mois
              </Text>
            </View>
            {/* gestion de l'encart commun nbre questions + thème du quizz */}
            <View style={{ marginBottom: 70 }}>
              <View
                style={{
                  width: "100%",
                  height: "8%",
                  borderWidth: 1,
                  borderColor: "#rgb(217, 198, 186)",
                  borderRadius: 5,
                  marginBottom: 10,
                  marginRight: 5,
                  backgroundColor: "rgba(217, 198, 186, 0.6)"
                }}
              // borderColor="#FF0000"
              // borderRadius={5}
              // containerStyle={{
              //   backgroundColor: "rgba(217, 198, 186, 0.7)"
              // }}
              // wrapperStyle={{ backgroundColor: "transparent" }}
              >
                <Text h5 style={{ marginTop: 20, marginLeft: 10 }}>
                  15 Questions
                </Text>
                <Text h4 style={{ marginRight: 20, marginLeft: 10 }}>
                  Révolution Industrielle
                </Text>
                <Button
                  icon={<Icon name="arrow-forward" color="black" />}
                  buttonStyle={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    bottom: 0,
                    right: 20,
                    borderColor: "transparent",
                    borderRadius: 5
                  }}
                />
              </View>
              {/* gestion  de l'encart "tous les parcours"*/}
              <Text
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: 30,
                  marginTop: 15,
                  marginBottom: 10
                }}
              >
                Tous les parcours
                <Text> </Text>
                <Feather name="sliders" size={20} />
              </Text>
              {/* map sur l'array trailList pour afficher autant de TraiilCard que souhaité */}
              {trailList.map((trail, i) => (
                <TrailCard
                  key={trail.id + i}
                  id={trail.id}
                  location={trail.location}
                  parcours={trail.parcours}
                  rating={trail.rating}
                  onPress={() => {
                    console.log("héhé");
                  }}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default ThemeList;