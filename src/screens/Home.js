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
import Logo from "../../assets/HomeForeverBaths-Blue-Horz.png";
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
        style={{ width: 200, height: 200, marginTop: 100 }}
        resizeMode="contain"
      />
      <Input
        label="Sales Person"
        value={salesPerson}
        onChangeText={(text) => {
          setSalesPerson(text);
        }}
        errorMessage={error}
        keyboardAppearance="default"
        clearButtonMode="while-editing"
        autoCompleteType="name"
        autoCapitalize="words"
      />
      <Button
        title="New Order"
        onPress={() => {
          if (!salesPerson) {
            setError("Please input your name");
          } else {
            Keyboard.dismiss();
            Alert.alert("Paige smells", salesPerson);
            setError("");
          }
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