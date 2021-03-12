import React, { useState, useEffect } from "react";
import AppNavigator from "./src/navigation/Navigator";
import CustomerContext from "./src/context/customerContext";
import UserContext from "./src/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  useEffect(() => {
    checkLocalUser();
  }, []);

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

  async function checkLocalUser() {
    let localUser = await AsyncStorage.getItem("hfbUserData");
    if (localUser) {
      localUser = JSON.parse(localUser);
      const lastLogin = new Date(localUser.last_login).getTime();
      const oneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
      if (oneDay > lastLogin) {
        if (await LocalAuthentication.hasHardwareAsync()) {
          if (await LocalAuthentication.isEnrolledAsync()) {
            if (
              await LocalAuthentication.authenticateAsync({
                promptMessage: `Verify this is ${localUser.first_name}`,
              })
            ) {
              setSalesPerson(`${localUser.first_name} ${localUser.last_name}`);
              setUser({ isLoggedIn: true, ...localUser });
            }
          } else {
            //prompt for a login code
          }
        } else {
          //prompt for a login code
        }
      }
    }
  }

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
