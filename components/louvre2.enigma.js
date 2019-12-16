import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';


function Louvre2(props) {
    const { navigation } = props;
    const { navigate } = props.navigation;
    const [selection, setSelection] = useState({ coffre1: false, coffre2: false, coffre3: false, coffre4: false, coffre5: false, coffre6: false, coffre7: false, coffre8: false, coffre9: false, coffre10: false, coffre11: false, coffre12: false })


    var arrayItems = [{ url: '../assets/coffre1' }]

    useEffect(() => {
        displayArray()

    }, [])


    displayArray = () => {
        // shuffle(props.enigmaContent.enigma.content.boxes)
        // console.log(props.enigmaContent.enigma.content.boxes)
    }



    return (
        <View style={styles.container}>
            <View top={60} style={{ width: '86%', flex: 3 }}>
                <Text h1 style={styles.h1}>Retrouvez les bons fragments !</Text>
                <Text style={styles.text}>Content </Text>
            </View>

            <View style={{ flex: 8, width: '86%', paddingTop: 20, paddingBottom: 60 }}>
                <View style={{ flexDirection: 'row', paddingBottom: 30, justifyContent: 'space-between' }}>
                    <TouchableOpacity style={selection.coffre1 === true ? styles.imgSelect : ''}
                        onPress={() => { setSelection({ coffre1: !selection.coffre1 }); console.log('clic coffre 1') }}>
                        <Image
                            style={{ padding: 3 }}
                            source={require('../assets/coffre1.png')}
                            resizeMode="contain"

                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={selection.coffre2 === true ? styles.imgSelect : ''}
                        onPress={() => { setSelection({ coffre2: !selection.coffre2 }); console.log('clic coffre 2') }}>
                        <Image
                            style={{ padding: 3 }}
                            source={require('../assets/coffre2.png')}
                            resizeMode="contain"

                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={selection.coffre3 === true ? styles.imgSelect : ''}
                        onPress={() => { setSelection({ coffre3: !selection.coffre3 }); console.log('clic coffre 3') }}>
                        <Image
                            style={{ padding: 3 }}
                            source={require('../assets/coffre3.png')}
                            resizeMode="contain"

                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={selection.coffre4 === true ? styles.imgSelect : ''}
                        onPress={() => { setSelection({ coffre4: !selection.coffre4 }); console.log('clic coffre 4') }}>
                        <Image
                            style={{ padding: 3 }}
                            source={require('../assets/coffre4.png')}
                            resizeMode="contain"

                        ></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 30, justifyContent: 'space-between' }}>
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 30, justifyContent: 'space-between' }}>
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"

                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 30, justifyContent: 'space-between' }}>
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                    <Image
                        style={{}}
                        source={require('../assets/coffre1.png')}
                        resizeMode="contain"
                    />
                </View>


            </View>
            <View style={{ flex: 1, width: '86%' }}>
                <TouchableOpacity style={styles.buttonOK} onPress={() => { navigate("Louvre3", { id: props.id }) }}>
                    <Text style={styles.textCTA}>Vérifier ma sélection</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20
    },
    buttonOK: {
        alignItems: 'center',
        backgroundColor: '#C1EA69',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
    },
    buttonDisabled: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        width: '86%',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
    },

    textCTA: {
        lineHeight: 40
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 24
    },
    text: {
        fontSize: 16
    },
    imgNoSelect: {

    },
    imgSelect: {
        borderColor: '#C1EA69',
        borderWidth: 2,
        borderRadius: 4
    }
});


export default Louvre2