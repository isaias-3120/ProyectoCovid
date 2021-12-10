import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';
import Constants from 'expo-constants';
import {Header, Card} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



const ContactanosScreen = ({navigation}) => {
    return (
        <View style={styles.container3}>  
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.openDrawer() }}
                centerComponent={{ text: 'Contactanos', style: { color: '#fff' } }}
            /> 
            <View style={styles.titulo}>
                <Text style={styles.bold}>Conoce al equipo!</Text>
            </View>
            <ScrollView style={styles.card}>
                <View>
                    <Card>
                        <View style={styles.container2}>
                            <Card.Title>Oswaldo Benitez</Card.Title>
                            <Image
                                style={styles.img}
                                source={require('../assets/isaias.png')}
                            />
                            <Text>18212076</Text>
                        </View>
                    </Card>

                    <Card>
                        <View style={styles.container2}>
                            <Card.Title>Alejandro Rios</Card.Title>
                            <Image
                                style={styles.img}
                                source={require('../assets/alex.png')}
                            />
                            <Text>18212076</Text>
                        </View>

                    </Card>
                </View>
            </ScrollView>
        </View>
    );
}
 
export default ContactanosScreen;

const styles = StyleSheet.create({

    container3: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    images:{
      width: 50, 
      height: 75,
      margin:5,
    },
    texto:{
      color: 'black', 
      textAlign: 'center', 
      fontSize: 15,
      margin: 10,
      fontWeight: 'bold',
      width: '65%',
    },
    bold:{
        textAlign: 'center', 
        fontWeight:'bold',
        fontSize:30,
    },
    card: {
        textAlign: 'center',
      },
    img:{
        flex: 1,
        width: 150,
        height: 150,
        resizeMode: 'contain' 
    }
});