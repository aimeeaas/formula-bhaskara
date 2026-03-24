import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Calculadora </Text>
            <Text style={styles.text2}>Média & Bhaskara</Text>
            <Image
                source={require('../../assets/img2.png')}
                style={styles.image}
            />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(241, 225, 250, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 37,
        color: '#69328d',
        margin: 5,
    },
    text2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#a17ebf',
        fontStyle: 'italic',
    },
    image: {
        width: 290,
        height: 220,
    }

});
export default HomeScreen;