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
import Logo from "../../assets/mobile-logo-horz-transparent.png";
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
            <Image
                source={Logo}
                style={{ width: 500, height: 300, marginTop: 100 }}
                resizeMode="contain"
            />

            <Button
                title="New Order"
                onPress={() => {
                    navigation.navigate("Customer Info");
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
