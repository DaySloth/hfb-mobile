import {
    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import InstallationInfo from "../screens/InstallationInfo";
import Measurements from "../screens/Measurements";
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
                                    inactiveBackgroundColor="#ffa8a8"
                                    inactiveTintColor="red"
                                />
                            </DrawerContentScrollView>
                        );
                    }}
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen
                        name="Installation Info"
                        component={InstallationInfo}
                    />
                    <Drawer.Screen
                        name="Measurements"
                        component={Measurements}
                    />
                </Drawer.Navigator>
            ) : (
                <Drawer.Navigator initialRouteName="Login">
                    <Drawer.Screen name="Login" component={Login} />
                </Drawer.Navigator>
            )}
        </NavigationContainer>
    );
}
