import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppNavigator from "./src/navigation/Navigator";
import CustomerContext from "./src/context/customerContext";

export default function App() {
  const [salesPerson, setSalesPerson] = useState("");
  const [customer, setCustomer] = useState({
    salesperson: undefined,
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

  return (
    <CustomerContext.Provider
      value={{ salesPerson, setSalesPerson, customer, setCustomer }}
    >
      <AppNavigator />
    </CustomerContext.Provider>
  );
}
