import React, { useContext, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Alert,
    Keyboard,
} from "react-native";
import { Button, Input, Image } from "react-native-elements";
import HFBHeader from "../components/HFBHeader";
import CustomerContext from "../context/customerContext";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson } = useContext(CustomerContext);
    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <HFBHeader />
            <Text>Details</Text>

            <Button
                title="Continue"
                onPress={() => {
                    //navigation.navigate("Customer Info");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
