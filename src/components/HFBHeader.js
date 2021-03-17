import React, { useState } from "react";
import { Image, Header, Overlay } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../../assets/Kohler-hfb-divider.png";

export default function HFBHeader({ navigation }) {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <>
            <Header
                leftComponent={{
                    icon: "menu",
                    color: "#fff",
                    onPress: () => navigation.openDrawer(),
                    style: { textAlignVertical: "center" },
                    size: 30,
                }}
                centerComponent={
                    <Image
                        source={Logo}
                        style={{
                            width: 200,
                            height: 40,
                            resizeMode: "contain",
                        }}
                        onPress={() => navigation.navigate("Home")}
                    />
                }
                rightComponent={{
                    icon: "receipt",
                    color: "#fff",
                    onPress: toggleOverlay,
                    style: { textAlignVertical: "center" },
                    size: 30,
                }}
                backgroundColor="#7a7a7a"
                statusBarProps={{ barStyle: "light-content" }}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <View style={styles.overlay}>
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        Current Install Details
                    </Text>
                </View>
            </Overlay>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        width: "100%",
        height: "70%",
        padding: 10,
    },
});
