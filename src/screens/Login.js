import React, { useContext, useEffect, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import { db } from "../../config/firebase.config.js";
import Logo from "../../assets/mobile-logo-horz-transparent.png";
import { Base64 } from "js-base64";
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
    async function loginUser() {
        setError("");
        if (username && password) {
            let user = await db
                .ref(`/users/${username.toLowerCase()}`)
                .once("value");
            user = user.val();
            if (user) {
                if (user.tempPassword) {
                    if (password === user.password) {
                        //let them reset password
                        //console.log()
                    } else {
                        setError("Invalid username or password");
                    }
                } else {
                    //compare passwords
                }
            } else {
                setError("Invalid username or password");
            }
        } else {
            setError("Please complete form");
        }
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [isTempPass, setIsTempPass] = useState(false);

    const [error, setError] = useState("");

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={Logo}
                    style={{ width: 500, height: 300, marginTop: 100 }}
                    resizeMode="contain"
                />
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        width: "90%",
                        alignItems: "stretch",
                    }}
                    behavior="padding"
                >
                    <Input
                        label="Username"
                        value={username}
                        onChangeText={(text) => {
                            setUsername(text);
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        returnKeyType="done"
                        errorMessage={error}
                    />
                    <Input
                        label="Password"
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                        secureTextEntry={true}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        autoCompleteType="password"
                        returnKeyType="done"
                        errorMessage={error}
                    />

                    <Button
                        title="Login"
                        onPress={() => {
                            loginUser();
                        }}
                        style={{
                            width: 200,
                            alignSelf: "center",
                            marginTop: 20,
                        }}
                    />
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
