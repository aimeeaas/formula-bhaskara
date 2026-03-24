import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import MathUtils from '../../services/FormulaBaskara';

function BaskaraScreen() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Fórmula de Baskara</Text>
            <Text style={styles.txt}>Insira os números a serem calculados: </Text>
            <TextInputBox style={styles.input}
                value={a}
                onChangeText={setA}
                placeholder="Digite o valor de A"
                keyboardType="numeric"
            />
            <TextInputBox
                value={b}
                onChangeText={setB}
                placeholder="Digite o o valor de B"
                keyboardType="numeric"
            />
            <TextInputBox
                value={c}
                onChangeText={setC}
                placeholder="Digite o o valor de C"
                keyboardType="numeric"
            />
    
            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.calcularBaskara(a, b, c)
                }
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: 'rgba(241, 225, 250, 1)',
        alignItems: 'center',
        padding: 20
    },

    title: {
        fontSize: 30,
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#69328d'
    },
    txt: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#69328d'
    },
    image: {
        width: 290, 
        height: 220, 
        marginBottom:25, 
        marginTop: 10
    }

});

export default BaskaraScreen;