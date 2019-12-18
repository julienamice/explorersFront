import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import { diff } from "deep-object-diff";

function Louvre2(props) {
  const { navigation } = props;
  const { navigate } = props.navigation;
  const [selection, setSelection] = useState({
    coffre01: false,
    coffre02: false,
    coffre03: false,
    coffre04: false,
    coffre05: false,
    coffre06: false,
    coffre07: false,
    coffre08: false,
    coffre09: false,
    coffre10: false,
    coffre11: false,
    coffre12: false
  });
  const [correction, setCorrection] = useState({
    coffre01: false,
    coffre02: true,
    coffre03: false,
    coffre04: false,
    coffre05: false,
    coffre06: true,
    coffre07: false,
    coffre08: false,
    coffre09: false,
    coffre10: true,
    coffre11: false,
    coffre12: false
  });

  var arrayItems = [{ url: "../assets/coffre1" }];

  useEffect(() => {
    displayArray();
  }, []);

  displayArray = () => {
    // shuffle(props.enigmaContent.enigma.content.boxes)
    // console.log(props.enigmaContent.enigma.content.boxes)
  };
  checkCorrection = () => {
    console.log("clic check correction");
    console.log();
    if (Object.keys(diff(selection, correction)).length === 0) {
      console.log("Bravo c'est gagné le mimi le million");
      navigate("Louvre3", { id: props.id });
    } else {
      console.log(JSON.stringify(selection));
      console.log(JSON.stringify(correction));
    }
  };

  return (
    <View style={styles.container}>
      <View top={60} style={{ width: "86%", flex: 3 }}>
        <Text h1 style={styles.h1}>
          Retrouvez les bons fragments !
        </Text>
        <Text style={styles.text}>Content </Text>
      </View>

      <View
        style={{ flex: 8, width: "86%", paddingTop: 20, paddingBottom: 60 }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 30,
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            style={
              selection.coffre01 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre01: !selection.coffre01 });
              console.log("clic coffre 1");
            }}
          >
            <Image
              source={require("../assets/coffre1.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre02 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre02: !selection.coffre02 });
              console.log("clic coffre 2");
            }}
          >
            <Image
              source={require("../assets/coffre2.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre03 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre03: !selection.coffre03 });
              console.log("clic coffre 3");
            }}
          >
            <Image
              source={require("../assets/coffre3.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre04 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre04: !selection.coffre04 });
              console.log("clic coffre 4");
            }}
          >
            <Image
              source={require("../assets/coffre4.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 30,
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            style={
              selection.coffre05 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre05: !selection.coffre05 });
              console.log("clic coffre 1");
            }}
          >
            <Image
              source={require("../assets/coffre3.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre06 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre06: !selection.coffre06 });
              console.log("clic coffre 2");
            }}
          >
            <Image
              source={require("../assets/coffre2.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre07 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre07: !selection.coffre07 });
              console.log("clic coffre 3");
            }}
          >
            <Image
              source={require("../assets/coffre1.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre08 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre08: !selection.coffre08 });
              console.log("clic coffre 4");
            }}
          >
            <Image
              source={require("../assets/coffre4.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingBottom: 30,
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            style={
              selection.coffre09 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre09: !selection.coffre09 });
              console.log("clic coffre 1");
            }}
          >
            <Image
              source={require("../assets/coffre1.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre10 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre10: !selection.coffre10 });
              console.log("clic coffre 2");
            }}
          >
            <Image
              source={require("../assets/coffre2.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre11 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre11: !selection.coffre11 });
              console.log("clic coffre 3");
            }}
          >
            <Image
              source={require("../assets/coffre3.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              selection.coffre12 === true
                ? styles.imgSelect
                : styles.imgNoSelect
            }
            onPress={() => {
              setSelection({ ...selection, coffre12: !selection.coffre12 });
              console.log("clic coffre 4");
            }}
          >
            <Image
              source={require("../assets/coffre4.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: "86%" }}>
        <TouchableOpacity
          style={styles.buttonOK}
          onPress={() => {
            checkCorrection();
          }}
        >
          <Text style={styles.textCTA}>Vérifier ma sélection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20
  },
  buttonOK: {
    alignItems: "center",
    backgroundColor: "#C1EA69",
    height: 40,
    borderRadius: 4,
    borderColor: "transparent"
  },
  buttonDisabled: {
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    width: "86%",
    height: 40,
    borderRadius: 4,
    borderColor: "transparent"
  },

  textCTA: {
    lineHeight: 40
  },
  h1: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 24
  },
  text: {
    fontSize: 16
  },
  imgNoSelect: {
    padding: 3
  },
  imgSelect: {
    borderColor: "#C1EA69",
    borderWidth: 2,
    borderRadius: 4,
    padding: 3
  }
});

export default Louvre2;
