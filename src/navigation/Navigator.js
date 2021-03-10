import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import CustomerInfo from "../screens/CustomerInfo";
import Details from "../screens/Details";
import Login from "../screens/Login";
import React, { useContext } from "react";
import UserContext from "../context/userContext";

const Drawer = createDrawerNavigator();

export default function Navigator() {
    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            {user.isLoggedIn ? (
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen
                        name="Customer Info"
                        component={CustomerInfo}
                    />
                    <Drawer.Screen name="Details" component={Details} />
                </Drawer.Navigator>
            ) : (
                <Drawer.Navigator initialRouteName="Login">
                    <Drawer.Screen name="Login" component={Login} />
                </Drawer.Navigator>
            )}
        </NavigationContainer>
    );
}
