import React, { useContext, useState } from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    Keyboard,
    Platform,
    Text,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import HFBHeader from "../components/HFBHeader";
import CustomerContext from "../context/customerContext";
import MeasurementContext from "../context/measurementContext";
import ShowerOutline from "../../assets/shower-outline.png";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson } = useContext(CustomerContext);
    const {
        length,
        setLength,
        width,
        setWidth,
        height,
        setHeight,
        availableLength,
        setAvailableLength,
        availableWidth,
        setAvailableWidth,
        availableHeight,
        setAvailableHeight,
    } = useContext(MeasurementContext);
    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <HFBHeader navigation={navigation} />
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    marginTop: 30,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                behavior="padding"
            >
                <ScrollView>
                    <Image
                        source={ShowerOutline}
                        style={
                            Platform.isPad
                                ? styles.tabletImage
                                : styles.mobileImage
                        }
                        resizeMode="contain"
                    />
                    <View style={{ alignSelf: "center", marginBottom: 40 }}>
                        <Text style={{ fontSize: 20, color: "blue" }}>
                            Length:
                        </Text>
                        <TextInput
                            style={{ ...styles.input, borderColor: "blue" }}
                            onChangeText={(text) => {
                                setLength(text);
                                setAvailableLength(parseInt(text) * 2.54);
                            }}
                            keyboardType="numeric"
                            value={length}
                        />
                        <Text style={{ fontSize: 20, color: "green" }}>
                            Width:
                        </Text>
                        <TextInput
                            style={{ ...styles.input, borderColor: "green" }}
                            onChangeText={(text) => {
                                setWidth(text);
                                setAvailableWidth(parseInt(text) * 2.54);
                            }}
                            keyboardType="numeric"
                            value={width}
                        />
                        <Text style={{ fontSize: 20, color: "red" }}>
                            Height:
                        </Text>
                        <TextInput
                            style={{ ...styles.input, borderColor: "red" }}
                            onChangeText={(text) => {
                                setHeight(text);
                                setAvailableHeight(parseInt(text) * 2.54);
                            }}
                            keyboardType="numeric"
                            value={height}
                        />
                    </View>

                    <Button
                        title="Confirm Measurements"
                        onPress={() => {
                            //navigation.navigate("Customer Info");
                            if (!length) {
                                Alert.alert(
                                    "Form Incomplete",
                                    "Please give a length"
                                );
                            } else if (!width) {
                                Alert.alert(
                                    "Form Incomplete",
                                    "Please give a width"
                                );
                            } else if (!height) {
                                Alert.alert(
                                    "Form Incomplete",
                                    "Please give a height"
                                );
                            } else {
                                Alert.alert("Complete");
                            }
                        }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    mobileImage: {
        width: 400,
        height: 300,
        marginTop: 50,
        marginLeft: -30,
        marginBottom: 30,
    },
    tabletImage: {
        width: 600,
        height: 500,
        marginTop: 50,
    },
    input: {
        width: 200,
        height: 50,
        borderWidth: 2,
        textAlign: "center",
        fontSize: 24,
        marginBottom: 10,
    },
});
