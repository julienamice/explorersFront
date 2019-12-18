import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, PanResponder, Animated, Dimensions, ImageBackground } from 'react-native';
// import Louvre3 from './louvre3.enigma copy';


// var arrayBoxes = [
//     {
//         idBoxe: 1,
//         url: '../assets/coffre1.png',
//         isCorrect: true,
//         position: { x: 240, y: 450 }
//     },
//     {
//         idBoxe: 2,
//         url: '../assets/coffre2.png',
//         isCorrect: false,
//         position: { x: 60, y: 120 }
//     },
//     {
//         idBoxe: 3,
//         url: '../assets/coffre3.png',
//         isCorrect: false,
//         position: { x: 10, y: 300 }
//     },
//     {
//         idBoxe: 4,
//         url: '../assets/coffre4.png',
//         isCorrect: false,
//         position: { x: 300, y: 560 }
//     }
// ]

// function Louvre3(props) {
//     const [item1Pos, setItem1Pos] = useState({ x: null, y: null })
//     const [item2Pos, setItem2Pos] = useState({ x: null, y: null })
//     const [item3Pos, setItem3Pos] = useState({ x: null, y: null })
//     const [item4Pos, setItem4Pos] = useState({ x: null, y: null })


//     const { navigation } = props;
//     const { navigate } = props.navigation;

//     useEffect(() => {


//     }, [])

//     checkEnigma = () => {

//     }

//     var windowDim = Dimensions.get('window');

//     console.log('Largeur du téléphone : ' + windowDim.width)
//     var marginExtWidth = windowDim.width * 7 / 100
//     var maringIntWidth = windowDim.width * 3 / 100
//     var itemWidth = windowDim.width * 22 / 100

//     var x1 = 0
//     var x2 = itemWidth + maringIntWidth
//     var x3 = itemWidth * 2 + maringIntWidth * 2
//     var x4 = itemWidth * 3 + maringIntWidth * 3


//     return (

//         <View style={styles.container}>
//             <View style={{ width: '86%', top: 60, flex: 1 }}>
//                 <Text h1 style={styles.h1}>Placez au bon endroit les fragments récupérés</Text>
//                 <Text style={styles.text}>Mium les fragments </Text>
//             </View>

//             <View elevation={2} style={{ width: '86%', flex: 2, flexDirection: 'row', zIndex: 5001, position: 'relative' }}>
//                 {/* <Draggable
//                         x={x1}
//                         y={0}
//                         z={100}

//                         onDragRelease={(res) => { setItem1Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
//                         children={<Image
//                             source={require('../assets/frag1.png')}

//                         />}
//                     /> */}
//                 <Animated.View
//                     {...panResponder.panHandlers}
//                     style={[item1Pos.getLayout(), styles.circle]}>
//                     <Text style={styles.text}>Drag me!</Text>
//                 </Animated.View>
//                 <Draggable
//                     x={x2}
//                     y={0}
//                     z={999}
//                     renderSize={80}
//                     onDragRelease={(res) => { setItem2Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
//                     children={<Image
//                         source={require('../assets/frag2.png')}

//                     />}
//                 />
//                 <Draggable
//                     x={x3}
//                     y={0}
//                     z={999}
//                     onDragRelease={(res) => { setItem3Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
//                     children={<Image
//                         source={require('../assets/frag3.png')}

//                     />}
//                 />
//                 <Draggable
//                     x={x4}
//                     y={0}
//                     z={999}
//                     onDragRelease={(res) => { setItem4Pos({ x: res.touchHistory.touchBank[0].currentPageX, y: res.touchHistory.touchBank[0].currentPageY }); console.log(item1Pos) }}
//                     children={<Image
//                         source={require('../assets/frag4.png')}

//                     />}
//                 />
//             </View>

//             <View zIndex={1} elevation={1} style={{ flex: 2, width: "86%", position: 'relative', backgroundColor: 'red' }}>
//                 <Image
//                     z={10}
//                     source={require('../assets/louvre-vide.png')}
//                     resizeMode={"contain"}
//                     style={{
//                         flex: 1,
//                         width: undefined,
//                         height: undefined,
//                         position: "absolute",
//                         bottom: 0,
//                         left: 0,
//                     }}
//                 />
//             </View>




//             <TouchableOpacity style={styles.buttonOK} onPress={() => { navigate("Louvre2", { id: props.id }) }}>
//                 <Text style={styles.textCTA}>Vérifier mes emplacements</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         paddingBottom: 20
//     },
//     buttonOK: {
//         alignItems: 'center',
//         backgroundColor: '#C1EA69',
//         width: '86%',
//         height: 40,
//         borderRadius: 4,
//         borderColor: 'transparent',
//         marginTop: 24
//     },
//     buttonDisabled: {
//         alignItems: 'center',
//         backgroundColor: '#F2F2F2',
//         width: '86%',
//         height: 40,
//         borderRadius: 4,
//         borderColor: 'transparent',
//     },

//     textCTA: {
//         lineHeight: 40
//     },
//     map: {
//         width: '100%',
//         height: '100%'
//     },
//     h1: {
//         fontWeight: 'bold',
//         fontSize: 24,
//         marginBottom: 24
//     },
//     text: {
//         fontSize: 16
//     },
//     circle: {
//         height: 50,
//         width: 50,
//         backgroundColor: 'blue'
//     }
// });


// export default Louvre3



var windowDim = Dimensions.get('window');
var viewWidth = windowDim.width * 86 / 100;
var louvreHeight =  155 * 100 / windowDim.height;


var item1Correction = { x: viewWidth * 73.529411 / 100, y: louvreHeight * 54.193548 / 100 };
console.log('Correction 1 : ' + item1Correction.x + ' / ' + item1Correction.y)
var item2Correction = { x: viewWidth * 70.1241830065 / 100, y: louvreHeight * 69.664516129 / 100 };
console.log('Correction 2 : ' + item2Correction.x + ' / ' + item2Correction.y)
var item3Correction = { x: viewWidth * 2.32679738562 / 100, y: louvreHeight * 86.9225806452 / 100 };
console.log('Correction 3 : ' + item3Correction.x + ' / ' + item3Correction.y)
var item4Correction = { x: viewWidth * 77.8660130719 / 100, y: louvreHeight * 68.1096774194 / 100 };
console.log('Correction 4 : ' + item4Correction.x + ' / ' + item4Correction.y)


class Louvre3 extends Component {
    constructor(props) {
        super(props);
        this.checkScore = this.checkScore.bind(this);
        this.state = {
            pan: new Animated.ValueXY(),
            item1: { x: 0, y: 0 },
            item2: { x: 0, y: 0 },
            item3: { x: 0, y: 0 },
            item4: { x: 0, y: 0 },
        };
    }
  


    checkScore = () => {
        console.log('checkscore')
        console.log(this.state.item1.x)
        console.log(item1Correction.x)
        if (item1Correction.x * 0.90 <= this.state.item1.x && this.state.item1.x <= item1Correction.x * 1.10 && item1Correction.y * 0.90 <= this.state.item1.y && this.state.item1.y <= item1Correction.y * 1.10) {
            console.log('Item 1 bien placé')
        } else { console.log('Item 1 PAS BIEN PLACE DU TOUT') }

        if (item2Correction.x * 0.90 <= this.state.item2.x && this.state.item2.x <= item2Correction.x * 1.10 && item2Correction.y * 0.90 <= this.state.item2.y && this.state.item2.y <= item2Correction.y * 1.10) {
            console.log('Item 2 bien placé')
        } else { console.log('Item 2 PAS BIEN PLACE DU TOUT') }

        if (item3Correction.x * 0.90 <= this.state.item3.x && this.state.item3.x <= item3Correction.x * 1.10 && item3Correction.y * 0.90 <= this.state.item3.y && this.state.item3.y <= item3Correction.y * 1.10) {
            console.log('Item 3 bien placé')
        } else { console.log('Item 3 PAS BIEN PLACE DU TOUT') }

        if (item4Correction.x * 0.90 <= this.state.item4.x && this.state.item4.x <= item4Correction.x * 1.10 && item4Correction.y * 0.90 <= this.state.item4.y && this.state.item4.y  <= item4Correction.y * 1.10) {
            console.log('Item 4 bien placé')
        } else { console.log('Item 4 PAS BIEN PLACE DU TOUT') }

        // 
    }



    componentWillMount() {
        // Add a listener for the delta value change
        this.animatedValue = new Animated.ValueXY()
        this.animatedValue2 = new Animated.ValueXY()
        this.animatedValue3 = new Animated.ValueXY()
        this.animatedValue4 = new Animated.ValueXY()

        this._value = { x: 0, y: 0 }
        this._value2 = { x: 0, y: 0 }
        this._value3 = { x: 0, y: 0 }
        this._value4 = { x: 0, y: 0 }

        this.animatedValue.addListener((value) => this._value = value)
        this.animatedValue2.addListener((value) => this._value2 = value)
        this.animatedValue3.addListener((value) => this._value3 = value)
        this.animatedValue4.addListener((value) => this._value4 = value)

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue.setOffset({
                    x: this._value.x,
                    y: this._value.y
                })
                this.animatedValue.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue.x, dy: this.animatedValue.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue.flattenOffset();
                this.setState({
                    item1: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item1)
            },
        })
        this.panResponder2 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue2.setOffset({
                    x: this._value2.x,
                    y: this._value2.y
                })
                this.animatedValue2.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue2.x, dy: this.animatedValue2.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue2.flattenOffset();
                this.setState({
                    item2: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item2)
            },
        })

        this.panResponder3 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue3.setOffset({
                    x: this._value3.x,
                    y: this._value3.y
                })
                this.animatedValue3.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue3.x, dy: this.animatedValue3.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue3.flattenOffset();
                this.setState({
                    item3: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item3)
            },
        })

        this.panResponder4 = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                this.animatedValue4.setOffset({
                    x: this._value4.x,
                    y: this._value4.y
                })
                this.animatedValue4.setValue({ x: 0, y: 0 })
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.animatedValue4.x, dy: this.animatedValue4.y }
            ]),
            onPanResponderRelease: (e, gestureState) => {
                this.animatedValue4.flattenOffset();
                this.setState({
                    item4: { x: e.touchHistory.touchBank[0].currentPageX, y: e.touchHistory.touchBank[0].currentPageY }
                })
                console.log(this.state.item4)
            },
        })
    }

    render() {
        const animatedStyle1 = {
            transform: this.animatedValue.getTranslateTransform()
        }
        const animatedStyle2 = {
            transform: this.animatedValue2.getTranslateTransform()
        }
        const animatedStyle3 = {
            transform: this.animatedValue3.getTranslateTransform()
        }
        const animatedStyle4 = {
            transform: this.animatedValue4.getTranslateTransform()
        }


        var item1Height = louvreHeight * 18.7096774194 / 100 
        var item1Width = viewWidth * 5.57516339869 / 100 

        var item2Height = louvreHeight * 10.7290322581 / 100
        var item2Width = viewWidth * 3.86274509804 / 100 

        var item3Height = louvreHeight * 8.57419354839 / 100 
        var item3Width = viewWidth * 68.8954248366 / 100 

        var item4Height = louvreHeight * 4.55483870968 / 100 
        var item4Width = viewWidth * 6.62091503268 / 100

        console.log(item1Height + ' / ' + item1Width)

        console.log(viewWidth)

        return (
            <View style={styles.container}>
                <View top={60} style={{ width: '86%', flex: 3 }}>
                    <Text h1 style={styles.h1}>Retrouvez les bons fragments !</Text>
                    <Text style={styles.text}>Content </Text>
                </View>

                <View style={{ position: 'relative', width: '86%', flex: 8, flexDirection: 'row', justifyContent: 'space-between' }}

                >
                    <Image
                        zIndex={-1}
                        style={{ position: 'absolute', left: 0, bottom: 80, width: '100%' }}
                        source={require('../assets/louvre-vide.png')}
                        resizeMode="contain"
                    />
                    <Animated.View style={[{ height: 30, width: undefined }, animatedStyle1]}{...this.panResponder.panHandlers}>
                        <Image
                            source={require('../assets/frag1.png')}
                            resizeMode="contain"
                            
                        />
                    </Animated.View>
                    <Animated.View style={[{ height: 40, width: undefined}, animatedStyle2]}{...this.panResponder2.panHandlers}>
                        <Image
                            source={require('../assets/frag2.png')}
                            resizeMode="contain"
                        />
                    </Animated.View>
                    <Animated.View style={[{  height: 20, width: undefined }, animatedStyle3]}{...this.panResponder3.panHandlers}>
                        <Image
                            source={require('../assets/frag3.png')}
                        />
                    </Animated.View>
                    <Animated.View style={[{ height: 15, width: undefined }, animatedStyle4]}{...this.panResponder4.panHandlers}>
                        <Image
                            source={require('../assets/frag4.png')}
                        />
                    </Animated.View>

                </View>



                <View style={{ flex: 1, width: '86%' }}>
                    <TouchableOpacity style={styles.buttonOK} onPress={this.checkScore()}>
                        <Text style={styles.textCTA}>Vérifier les emplacements</Text>
                    </TouchableOpacity>
                </View>

            </View>


        );
    }
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
        justifyContent: 'flex-end'
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