import React from "react";
import { Image, Header } from "react-native-elements";
import Logo from "../../assets/Kohler-hfb-divider.png";

export default function HFBHeader({ navigation }) {
  return (
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
        />
      }
      rightComponent={{
        icon: "home",
        color: "#fff",
        onPress: () => navigation.navigate("Home"),
        style: { textAlignVertical: "center" },
        size: 30,
      }}
      backgroundColor="#7a7a7a"
      statusBarProps={{ barStyle: "light-content" }}
    />
  );
}
