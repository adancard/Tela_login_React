import React from "react";
import { View, Image, StyleSheet } from "react-native-web";

export default function Imagem() {
    return (
        <View>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png',
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    tinyLogo: {
        width: 300,
        height: 80,
    },
});



