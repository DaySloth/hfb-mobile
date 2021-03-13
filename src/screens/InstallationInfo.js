import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import {
    View,
    StyleSheet,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import CustomerContext from "../context/customerContext";
import DatePicker from "react-native-datepicker";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson, customer, setCustomer } = useContext(
        CustomerContext
    );
    const [error, setError] = useState({});
    const [date, setDate] = useState(Date.now);

    // function formatPhoneNumber(phoneNumberString) {
    //   let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    //   let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    //   if (match) {
    //     setCustomer({
    //       ...customer,
    //       phone: "(" + match[1] + ") " + match[2] + "-" + match[3],
    //     });
    //   } else {
    //     setCustomer({ ...customer, phone: phoneNumberString });
    //   }
    // }

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
            <KeyboardAvoidingView
                style={{
                    flex: 1,
                    marginTop: 30,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                behavior="padding"
            >
                <ScrollView
                    keyboardDismissMode="on-drag"
                    style={
                        Platform.isPad
                            ? styles.scrollContainer
                            : styles.mobileContainer
                    }
                >
                    <DatePicker
                        style={{ width: 200 }}
                        date="2020-05-15"
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2016-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {
                            console.log(date);
                        }}
                    />
                    <Input
                        label="Sales Person"
                        value={salesPerson}
                        onChangeText={(text) => {
                            setSalesPerson(text);
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        autoCompleteType="name"
                        autoCapitalize="words"
                        returnKeyType="done"
                    />

                    <RNPickerSelect
                        placeholder={{
                            label: "Select State",
                            value: null,
                        }}
                        items={[{ label: "hi", value: "hi" }]}
                        onValueChange={(value) => {
                            console.log(value);
                        }}
                        style={{ ...styles }}
                    />

                    <Button
                        title="Submit Info"
                        onPress={() => {
                            checkCustomerInfo();
                        }}
                        style={{ marginBottom: 100, height: 100 }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flex: 1,
        width: "70%",
        alignSelf: "center",
    },
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        backgroundColor: "#fff",
        color: "black",
        marginTop: 5,
        marginBottom: 20,
    },
});
