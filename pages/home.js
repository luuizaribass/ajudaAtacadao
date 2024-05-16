

import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export function Home() {

    const handleButtonPress = () => {
        navigation.navigate('Home');
    };    

    return (
        <View style={styles.container}>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C7D6B1',
    },
    loginImagem: {
        width: 420,
        height: 450,
    },
    subContainer: {
        backgroundColor: '#C7D6B1',
        marginTop: -30,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 57,
        alignItems: 'center',
    },
    title: {
        fontSize: 27,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#FFFFFF',
    },
    button: {
        padding: 15,
        backgroundColor: '#6BBD4E',
        borderRadius: 99,
        alignItems: 'center', // Adicionado para centralizar verticalmente
        justifyContent: 'center', // Adicionado para centralizar verticalmente
    },
});
