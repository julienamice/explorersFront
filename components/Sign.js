import React from 'react';
import { Component } from 'react';
import {
  Modal,
  ScrollView,
  Button,
  View,
  Text,
  ImageBackground,
  TextInput,
  AsyncStorage,
  Switch,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {
  Ionicons,
  FontAwesome
} from '@expo/vector-icons';
import { withNavigation } from "react-navigation";
var ipAdress = require('../config');


class Sign extends React.Component {

  constructor() {
    super()
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
    this.handleSubmitSignUp = this.handleSubmitSignUp.bind(this)
    this.handleSubmitGlobal = this.handleSubmitGlobal.bind(this)
    this.state = {
      name: '',
      email: '',
      password: '',
      photo: '',
      isTeacher: false,
      modalVisible: true,
      currentTab: 1,
      isReady: false,
      login: false
    }

  }
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  };
  onTabClick = (currentTab) => {
    this.setState({
      currentTab: currentTab,
    });
  };
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  handleSubmitSignIn() {
    var signupData = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      photo: this.state.photo,
      isTeacher: this.state.isTeacher,
    });
    console.log('--------------------------------')
    console.log('My name : ', this.state.name)
    console.log('My email : ', this.state.email)
    console.log('--------------------------------');
    console.log('handleSubmitSignIn ======>', this.state.email)
    fetch(`http://${ipAdress}users/signin?email=${this.state.email}&password=${this.state.password}`)
      .then(function (res, err) {
        return res.json()
      })
      .then((data) => {
        console.log('fetchsignin ======>', data.result)
        data.result ? this.setState({ login: true }) : this.setState({ login: false })
        data.result ? this.props.navigation.navigate('ThemeList') : console.log('Dommage')
        data.result ? this.setState({ modalVisible: false }) : null
        this.props.setID(data.userSave._id)
        var userLogin = { email: data.userSave.email, password: data.userSave.password };
        var userStorage = JSON.stringify(userLogin)
        AsyncStorage.setItem('userLogin', userStorage)
      })
      .catch((error) => { console.log(error) })
  };

  handleSubmitSignUp() {

    var signupData = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      photo: this.state.photo,
      isTeacher: this.state.isTeacher,
    });
    console.log('--------------------------------')
    console.log('My name : ', this.state.name)
    console.log('My email : ', this.state.email)
    console.log('--------------------------------');
    console.log('handleSubmitSignUp ======>', this.state.email)
    fetch(`http://${ipAdress}users/signup?email=${this.state.email}&password=${this.state.password}`)
      .then(function (res, err) {
        return res.json()
      })
      .then((data) => {
        console.log('fetchsignup ======>', data)

        data.result ? this.setState({ login: true }) : this.setState({ login: false })
        data.result ? this.props.navigation.navigate('ThemeList') : console.log('Dommage')
        data.result ? this.setState({ modalVisible: false }) : null
        this.props.setID(data.userSave._id)
        var userLogin = { email: data.userSave.email, password: data.userSave.password };
        var userStorage = JSON.stringify(userLogin)
        AsyncStorage.setItem('userLogin', userStorage)
      })

      .catch((error) => { console.log(error) })
  };

  handleSubmitGlobal() {
    this.state.currentTab === 1 ? this.handleSubmitSignIn() : this.handleSubmitSignUp()
  }
  // componentDidMount() {

  //   AsyncStorage.getItem('userLogin', (error, data) => {
  //     var userFromStorage = JSON.parse(data)
  //     console.log(userFromStorage)
  //     data ? this.setState({ login: true }) : this.setState({ login: false })
  //     data ? this.setState({ modalVisible: false }) : null
  //     this.props.navigation.navigate('ThemeList')
  //   }
  //   )
  // }

  render() {

    const { navigate } = this.props.navigation;

    return (

      <ImageBackground source={require('../assets/background_login.png')} style={{ width: '100%', height: '100%' }}>

        <View
          style={styles.globalView}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <View
              style={styles.modal}
            >
              <View style={styles.tbar}>
                <View
                  style={styles.viewImage}
                >
                  <Image
                    style={styles.image}
                    source={require('../assets/little_logo.png')}
                  />
                </View>
              </View>
              <View>
                <View style={styles.tabs}>
                  <Text
                    onPress={() => {
                      this.onTabClick(1);
                    }}
                    style={[
                      styles.tabTextStyle1,
                      this.state.currentTab === 1 ? styles.tabUnderline : null,
                    ]}>
                    Connexion
                                    </Text>
                  <Text
                    onPress={() => {
                      this.onTabClick(2);
                    }}
                    style={[
                      styles.tabTextStyle2,
                      this.state.currentTab === 2 ? styles.tabUnderline : null,
                    ]}>
                    Inscription
                                    </Text>
                </View>
                <View>
                  <FontAwesome name="circle" size={10} color="#C1EA69" style={this.state.currentTab === 1 ? styles.dotConnexion : styles.dotInscription} />
                </View>
              </View>
              {this.state.currentTab === 1 && (

                <ScrollView
                  style={styles.scrollview}
                >
                  <TextInput
                    style={styles.textInputTop}
                    placeholder="Adresse mail"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  />
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Mot de passe"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                </ScrollView>


              )}
              {this.state.currentTab === 2 && (

                <ScrollView
                  style={styles.scrollview}
                >
                  <TextInput
                    style={styles.textInputTop}
                    underlineColorAndroid="transparent"
                    placeholder="Nom d'utilisateur"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                  />
                  <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Adresse mail"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  />
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    placeholder="Mot de passe"
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                  <View
                    style={styles.switchteachers}>
                    <View
                      style={styles.underswitchteacher}>
                      <Text >Je suis enseignant.e </Text>
                    </View>
                    <View
                      style={styles.switchteachers}>
                      <Switch
                        style={{
                          transform: [{ scaleX: .8 }, { scaleY: .8 }]
                        }}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue} /></View>
                  </View>
                </ScrollView>


              )}
              <View style={styles.bbar}>


                <TouchableOpacity style={styles.buttonOK} onPress={this.handleSubmitGlobal}>
                  <Text>PARS EXPLORER !</Text>
                </TouchableOpacity>
                {/* <Button
                                    color="#C1EA69"
                                    title="PARS EXPLORER"
                                    onPress={this.handleSubmitGlobal}
                                /> */}
              </View>
            </View>
          </Modal>
        </View>

      </ImageBackground >

    );
  }
}

//===========================================
//STYLES
//===========================================

const Colors = {
  Grey: '#DCDCDC',
  White: '#FFFFFF',
  Green: '#C1EA69',
  Black: '#000000',
};

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  buttonOK: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C1EA69',
    width: '86%',
    height: 40,
    borderRadius: 4,
    borderColor: 'transparent',
    color: 'white'
  },

  globalView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal: {
    backgroundColor: Colors.White,
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    marginTop: 85,
    marginBottom: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  viewImage: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 40,
  },

  image: {
    flexDirection: 'column',
    justifyContent: 'center',
    bottom: '25%'
  },

  scrollview: {
    width: "100%",
    flexDirection: 'column',
    paddingLeft: '10%',
    paddingRight: '10%',
  },

  textInputTop: {
    height: 45,
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%'
  },

  textInput: {
    height: 45,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: '#F5F5F5',
    paddingLeft: '5%'
  },

  switchteachers: {
    flexDirection: 'row',
    height: 45,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    width: '100%',
    justifyContent: 'space-between',
    textAlign: 'center'
  },

  underswitchteacher: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },

  tabs: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    bottom: 5,
  },

  tabTextStyle1: {
    color: Colors.Black,
    flexDirection: 'row',
    fontSize: 20,
    marginRight: '10%',
  },

  tabTextStyle2: {
    color: Colors.Black,
    flexDirection: 'row',
    fontSize: 20,
    marginLeft: '10%'
  },

  tbar: {
    width: '100%',
    height: '25%',
  },

  bbar: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },

  dotConnexion: {
    position: 'absolute',
    left: '20%',
  },

  dotInscription: {
    position: 'absolute',
    left: '80%',
  },
});

export default Sign;