import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import CustomerInfo from "../screens/CustomerInfo";
import Details from "../screens/Details";
import Login from "../screens/Login";
import * as React from "react";

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Customer Info" component={CustomerInfo} />
                <Drawer.Screen name="Details" component={Details} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
