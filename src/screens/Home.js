import React, { useContext, useState } from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Platform,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import Logo from "../../assets/mobile-logo-horz-transparent.png";
import CustomerContext from "../context/customerContext";
import Background from "../../assets/tile-background.jpg";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson, setCustomer } = useContext(
        CustomerContext
    );
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
            <ImageBackground style={styles.backgroundImage} source={Background}>
                <Image
                    source={Logo}
                    style={
                        Platform.isPad ? styles.tabletImage : styles.mobileImage
                    }
                    resizeMode="contain"
                />

                <Button
                    title="New Estimate"
                    style={
                        Platform.isPad
                            ? { width: 300, alignSelf: "center" }
                            : { width: 200, alignSelf: "center" }
                    }
                    onPress={() => {
                        setCustomer({
                            customer1: undefined,
                            customer2: undefined,
                            address1: undefined,
                            address2: undefined,
                            city: undefined,
                            state: undefined,
                            zipcode: undefined,
                            phone: undefined,
                            email: undefined,
                        });
                        navigation.navigate("Customer Info");
                    }}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        width: Dimensions.get("window").width,
        alignItems: "center",
    },
    mobileImage: {
        width: 350,
        height: 300,
        marginTop: 50,
    },
    tabletImage: {
        width: 600,
        height: 500,
        marginTop: 50,
    },
});
