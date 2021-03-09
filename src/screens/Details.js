import React, { useContext, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Alert,
    Keyboard,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import CustomerContext from "../context/customerContext";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson } = useContext(CustomerContext);
    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <Header
                leftComponent={{
                    icon: "menu",
                    color: "#fff",
                    onPress: () => navigation.openDrawer(),
                }}
                centerComponent={{
                    text: "Home Forever Baths Mobile",
                    style: { color: "#fff", fontSize: 18 },
                }}
                rightComponent={{
                    icon: "home",
                    color: "#fff",
                    onPress: () => navigation.navigate("Home"),
                }}
                backgroundColor="black"
                statusBarProps={{ barStyle: "light-content" }}
            />
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
