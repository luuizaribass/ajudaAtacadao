import React, { useState, useRef } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export function Inicial({ navigation }) {
    const [imageIndex, setImageIndex] = useState(0);
    const [titles] = useState([
        "Bem vindo ao app do Atacadão",
        "Calcule os seus gastos no app",
        "Monte sua própia lista de compras",
    ]);
    const [texts] = useState([
        "Um app de ajuda e gestão para suas compras no Mercado Atacadão!",
        "Gerencie, calcule e planeje suas compras e seus gastos.",
        "Se organize no app criando suas listas de compras. "
    ]);

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const ButtonHome = () => {
        navigation.navigate('Home');
    };

    const nextImage = () => {
        if (imageIndex === 2) {
            navigation.navigate('Home');
        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start(() => {
                setImageIndex((imageIndex + 1) % 3);
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true
                }).start();
            });
        }
    };

    const getImageSource = () => {
        switch (imageIndex) {
            case 0:
                return require('../assets/inicio1.png');
            case 1:
                return require('../assets/inicio2.png');
            case 2:
                return require('../assets/inicio3.png');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonPular} onPress={ButtonHome}>
                <Text style={styles.TextPular}>Pular</Text>
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={styles.logoImg} />
            <Text style={styles.title}>{titles[imageIndex]}</Text>
            <Text style={styles.subtitle}>{texts[imageIndex]}</Text>
            <Animated.Image
                source={getImageSource()}
                style={[styles.InicioImg, { opacity: fadeAnim }]}
            />
            <TouchableOpacity style={styles.buttonProx} onPress={nextImage}>
                <Text style={styles.buttonText}>{imageIndex === 2 ? 'Ir para Home' : 'Próximo' }</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F97216',
    },
    subContainer: {
        marginBottom: -250,
        backgroundColor: '#C7D6B1',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        padding: 90,
        alignItems: 'center',
    }, 
    buttonPular: {
        color: '#ffff',
        marginRight: -280,
        marginBottom: 10,
    },
    TextPular: {
        textAlign: 'center',
        fontSize: 17,
        color: '#ffff',
    },
    logoImg: {
        width: 70,
        height: 70,
        margin: 12,
    },
    title: {
        fontSize: 27,
        color: '#ffff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 90,
    },
    subtitle: {
        fontSize: 15,
        color: '#ffff',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 80,
    },
    InicioImg: {
        width: 250,
        height: 250,
    },
    
    buttonProx: {
        paddingVertical: 15,
        paddingHorizontal: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
});
