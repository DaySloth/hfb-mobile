import React, { useContext, useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Alert,
    Keyboard,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import { db } from "../../config/firebase.config.js";

export default function LoginScreen({ navigation }) {
    useEffect(() => {
        db.ref("/users")
            .once("value")
            .then((snapshot) => {
                const value = snapshot.val();
                const user = "allisterrampenthal";
                console.log(value[user]);
            });
    }, []);

    const [error, setError] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text>Details</Text>

            <Button
                title="Continue"
                onPress={() => {
                    //navigation.navigate("Customer Info");
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
