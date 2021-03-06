import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import * as React from "react";

const Drawer = createDrawerNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
