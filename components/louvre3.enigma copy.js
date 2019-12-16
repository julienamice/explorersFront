import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, PanResponder, Animated, Dimensions } from 'react-native';



var arrayBoxes = [
    {
        idBoxe: 1,
        url: '../assets/coffre1.png',
        isCorrect: true,
        position: { x: 240, y: 450 }
    },
    {
        idBoxe: 2,
        url: '../assets/coffre2.png',
        isCorrect: false,
        position: { x: 60, y: 120 }
    },
    {
        idBoxe: 3,
        url: '../assets/coffre3.png',
        isCorrect: false,
        position: { x: 10, y: 300 }
    },
    {
        idBoxe: 4,
        url: '../assets/coffre4.png',
        isCorrect: false,
        position: { x: 300, y: 560 }
    }
]

function Louvre3(props) {
    const [item1Pos, setItem1Pos] = useState(new Animated.ValueXY())
    const [item2Pos, setItem2Pos] = useState({ x: null, y: null })
    const [item3Pos, setItem3Pos] = useState({ x: null, y: null })
    const [item4Pos, setItem4Pos] = useState({ x: null, y: null })


    const { navigation } = props;
    const { navigate } = props.navigation;

    useEffect(() => {


    }, [])



    var windowDim = Dimensions.get('window');

    console.log('Largeur du téléphone : ' + windowDim.width)
    var marginExtWidth = windowDim.width * 7 / 100
    var maringIntWidth = windowDim.width * 3 / 100
    var itemWidth = windowDim.width * 22 / 100

    var x1 = 0
    var x2 = itemWidth + maringIntWidth
    var x3 = itemWidth * 2 + maringIntWidth * 2
    var x4 = itemWidth * 3 + maringIntWidth * 3


    return (

        <View style={styles.container}>
            <View style={{ width: '86%', top: 60, flex: 1 }}>
                <Text h1 style={styles.h1}>Placez au bon endroit les fragments récupérés</Text>
                <Text style={styles.text}>Mium les fragments </Text>
            </View>
            <Overlay isVisible={true}>
                <View elevation={2} style={{ width: '86%', flex: 2, flexDirection: 'row', zIndex: 5001, position: 'relative' }}>
                    <Draggable
                        x={x1}
                        y={0}
                        z={100}

                        onDragRelease={(res) => { setItem1Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
                        children={<Image
                            source={require('../assets/frag1.png')}

                        />}
                    />
                    <Draggable
                        x={x2}
                        y={0}
                        z={999}
                        renderSize={80}
                        onDragRelease={(res) => { setItem2Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
                        children={<Image
                            source={require('../assets/frag2.png')}

                        />}
                    />
                    <Draggable
                        x={x3}
                        y={0}
                        z={999}
                        onDragRelease={(res) => { setItem3Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
                        children={<Image
                            source={require('../assets/frag3.png')}

                        />}
                    />
                    <Draggable
                        x={x4}
                        y={0}
                        z={999}
                        onDragRelease={(res) => { setItem4Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
                        children={<Image
                            source={require('../assets/frag4.png')}

                        />}
                    />
                </View>
            </Overlay>
            <View zIndex={1} elevation={1} style={{ flex: 2, width: "86%", position: 'relative', backgroundColor: 'red' }}>
                <Image
                    z={10}
                    source={require('../assets/louvre-vide.png')}
                    resizeMode={"contain"}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                    }}
                />
            </View>




            <TouchableOpacity style={styles.buttonOK} onPress={() => { navigate("Louvre2", { id: props.id }) }}>
                <Text style={styles.textCTA}>Vérifier mes emplacements</Text>
            </TouchableOpacity>
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
        width: '86%',
        height: 40,
        borderRadius: 4,
        borderColor: 'transparent',
        marginTop: 24
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
    map: {
        width: '100%',
        height: '100%'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 24
    },
    text: {
        fontSize: 16
    }
});


export default Louvre3