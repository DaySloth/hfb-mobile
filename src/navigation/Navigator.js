import {
    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import CustomerInfo from "../screens/CustomerInfo";
import Details from "../screens/Details";
import Login from "../screens/Login";
import React, { useContext } from "react";
import UserContext from "../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

export default function Navigator({ navigation }) {
    const { user, setUser } = useContext(UserContext);

    return (
        <NavigationContainer>
            {user.isLoggedIn ? (
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={(props) => {
                        return (
                            <DrawerContentScrollView {...props}>
                                <DrawerItemList {...props} />
                                <DrawerItem
                                    label={`Logout, ${user.first_name}`}
                                    onPress={async () => {
                                        await AsyncStorage.removeItem(
                                            "hfbUserData"
                                        );
                                        setUser({ isLoggedIn: false });
                                    }}
                                />
                            </DrawerContentScrollView>
                        );
                    }}
                >
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
