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
import HFBHeader from "../components/HFBHeader";

export default function HomeScreen({ navigation }) {
    const { clearEstimate } = useContext(CustomerContext);
    const [error, setError] = useState("");

    return (
        <View style={styles.container}>
            <HFBHeader navigation={navigation} />
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
                        clearEstimate();
                        navigation.navigate("Installation Info");
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
