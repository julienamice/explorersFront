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
    console.log("WTF !");
    fetch("http://192.168.1.12:3001/trails")
      .then(res => res.json())
      .then(data => this.setState({ trailList: data }));
  }

  render() {
    const { trailList } = this.state;

    return (
      <ImageBackground
        source={require("../assets/splash.png")}
        style={{ width: "100%", height: "100%" }}
      >
        {/* gestion de l'ensemble des éléments de la 'page' */}
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Header />
          {/* gestion de l'encart du corps de la page */}
          <ScrollView
            style={{
              width: "90%",
              height: "90%"
            }}
          >
            {/* gestion  de l'encart pour "quizz du moi"*/}
            <View
              style={{
                paddingTop: 30,
                width: "60%",
                height: "10%"
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
              <Card
                borderRadius={5}
                containerStyle={{
                  backgroundColor: "rgba(217, 198, 186, 0.7)"
                }}
                wrapperStyle={{ backgroundColor: "transparent" }}
              >
                <Text h5>15 Questions</Text>
                <Text h4 style={{ marginRight: 20 }}>
                  Révolution Industrielle
                </Text>
                <Button
                  icon={<Icon name="arrow-forward" color="black" />}
                  buttonStyle={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    top: -45,
                    left: 230,
                    borderColor: "transparent",
                    borderRadius: 5
                  }}
                />
              </Card>
              {/* gestion  de l'encart "tous les parcours"*/}
              <Text
                style={{
                  color: "black",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: 30,
                  marginTop: 15
                }}
              >
                Tous les parcours
                <Text> </Text>
                <Feather name="sliders" size={20} />
              </Text>
              {/* gestion de la card pour les différents parcours */}
              {trailList.map(trail => (
                <TrailCard
                  key={trail.id}
                  location={trail.location}
                  parcours={trail.parcours}
                  rating={trail.rating}
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
