import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native-web";

export default function Form() {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.caixaLogin}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Username"
                keyboardType="text"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.butao}>
                <Text style={styles.texto}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        marginBottom: 20,
        borderWidth: 1,
        padding: 20,
        textAlign: 'center'
    },
    caixaLogin: {

        borderWidth: 1,
        margin: 50,
        padding: 50,
        shadowRadius: 20,
        borderRadius: 5,
        height: 350

    },
    butao: {

        borderWidth: 1,
        borderColor: '#20232a',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        margin: 3,
        borderRadius: 6,
        marginTop: 50

    },
    texto: {

        color: 'white',
    }
});
