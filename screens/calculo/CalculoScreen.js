import React, { useState } from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import MathUtils from '../../services/FuncoesMatematicas';

function CalculoScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Cálculo da Média</Text>
            <Image
                source={require('../../assets/img.png')}
                style={styles.image}
            />
            <Text style={styles.txt}>Insira os números a serem calculados: </Text>
            <TextInputBox style={styles.input}
                value={num1}
                onChangeText={setNum1}
                placeholder="Digite o 1° número"
                keyboardType="numeric"
            />
            <TextInputBox
                value={num2}
                onChangeText={setNum2}
                placeholder="Digite o 2° número"
                keyboardType="numeric"
            />
            <TextInputBox
                value={num3}
                onChangeText={setNum3}
                placeholder="Digite o 3° número"
                keyboardType="numeric"
            />
            <TextInputBox
                value={num4}
                onChangeText={setNum4}
                placeholder="Digite o 4° número"
                keyboardType="numeric"
            />
            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.calcularMedia(num1, num2, num3, num4)
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

export default CalculoScreen;