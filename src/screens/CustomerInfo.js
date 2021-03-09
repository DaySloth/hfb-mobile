import React, { useContext, useState } from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Alert,
    Keyboard,
    ScrollView,
    KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import StateSelect from "../components/StateSelect";
import CustomerContext from "../context/customerContext";

export default function HomeScreen({ navigation }) {
    const { salesPerson, setSalesPerson, customer, setCustomer } = useContext(
        CustomerContext
    );
    const [error, setError] = useState({});

    function formatPhoneNumber(phoneNumberString) {
        let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            setCustomer({
                ...customer,
                phone: "(" + match[1] + ") " + match[2] + "-" + match[3],
            });
        } else {
            setCustomer({ ...customer, phone: phoneNumberString });
        }
    }

    function checkCustomerInfo() {
        for (const property in customer) {
            if (!customer[property]) {
                if (property === "address2" || property === "customer2") {
                } else {
                    Alert.alert("Form Incomplete", `Field: ${property}`);
                    break;
                }
            } else if (!salesPerson) {
                Alert.alert("Form Incomplete", `Field: Sales Person`);
                break;
            } else {
                Alert.alert("hi");
                break;
            }
        }
    }

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
                    style={styles.scrollContainer}
                >
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
                    <Input
                        label="Customer 1"
                        value={customer.customer1}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, customer1: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        autoCompleteType="name"
                        autoCapitalize="words"
                        returnKeyType="done"
                    />
                    <Input
                        label="Customer 2"
                        value={customer.customer2}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, customer2: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        autoCompleteType="name"
                        autoCapitalize="words"
                        returnKeyType="done"
                    />
                    <Input
                        label="Telephone"
                        value={customer.phone}
                        onChangeText={(text) => {
                            formatPhoneNumber(text);
                        }}
                        keyboardAppearance="default"
                        keyboardType="phone-pad"
                        clearButtonMode="while-editing"
                        textContentType="telephoneNumber"
                        dataDetectorTypes="phoneNumber"
                        maxLength={14}
                        returnKeyType="done"
                    />
                    <Input
                        label="Email"
                        value={customer.email}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, email: text });
                        }}
                        keyboardAppearance="default"
                        keyboardType="email-address"
                        clearButtonMode="while-editing"
                        textContentType="emailAddress"
                        returnKeyType="done"
                    />
                    <Input
                        label="Address"
                        value={customer.address1}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, address1: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        textContentType="streetAddressLine1"
                        returnKeyType="done"
                    />
                    <Input
                        label="Apt, Suite"
                        value={customer.address2}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, address2: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        textContentType="streetAddressLine2"
                        returnKeyType="done"
                    />
                    <Input
                        label="City"
                        value={customer.city}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, city: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        textContentType="addressCity"
                        returnKeyType="done"
                    />

                    <StateSelect
                        value={customer.state}
                        setCustomer={setCustomer}
                        customer={customer}
                    />

                    <Input
                        label="Zipcode"
                        value={customer.zipcode}
                        onChangeText={(text) => {
                            setCustomer({ ...customer, zipcode: text });
                        }}
                        keyboardAppearance="default"
                        clearButtonMode="while-editing"
                        textContentType="postalCode"
                        maxLength={5}
                        returnKeyType="done"
                    />
                    <Button
                        title="Submit Info"
                        onPress={() => {
                            checkCustomerInfo();
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
        marginBottom: 100,
    },
});
