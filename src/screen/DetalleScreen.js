import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import librosInfo from "../components/libros-informaciones";

const DetalleScreen = ({ navigation, route }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.libreria}>
                {librosInfo.map(libro => (
                    <View key={libro.nombre} style={styles.libro}>
                        <Text style={styles.text}> {libro.nombre}</Text>
                        <Text style={styles.text}>{libro.autor}</Text>
                        <Image style={styles.img} source={libro.imagen} />
                    </View>
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '85%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    libreria: {
        width: '100%',
        height: '50%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    libro: {
        width: '30%',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        padding: 5,
        borderRadius: 3,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    img: {
        width: '200px',
        height: '300px', 
        resizeMode: 'cover',
        borderRadius: 8,
    },
});

export default DetalleScreen;