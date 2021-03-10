import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AppNavigator from "./src/navigation/Navigator";
import CustomerContext from "./src/context/customerContext";
import UserContext from "./src/context/userContext";

export default function App() {
    const [salesPerson, setSalesPerson] = useState("");
    const [customer, setCustomer] = useState({
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
    const [user, setUser] = useState({
        isLoggedIn: false,
        first_name: undefined,
        last_name: undefined,
        email: undefined,
    });

    return (
        <CustomerContext.Provider
            value={{ salesPerson, setSalesPerson, customer, setCustomer }}
        >
            <UserContext.Provider value={{ user, setUser }}>
                <AppNavigator />
            </UserContext.Provider>
        </CustomerContext.Provider>
    );
}
