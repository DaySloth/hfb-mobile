import React, { useState, useEffect } from "react";
import AppNavigator from "./src/navigation/Navigator";
import CustomerContext from "./src/context/customerContext";
import UserContext from "./src/context/userContext";
import InstallContext from "./src/context/installContext";
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

    const [projectType, setProjectType] = useState("");
    const [installStory, setInstallStory] = useState("");
    const [typeOfHome, setTypeOfHome] = useState("");
    const [workspaceLocation, setWorkspaceLocation] = useState("");
    const [bathroomLocation, setBathroomLocation] = useState("");
    const [onlyBathroom, setOnlyBathroom] = useState("");
    const [waterShutOff, setWaterShutOff] = useState("");
    const [hasBasement, setHasBasement] = useState(false);
    const [basementCondition, setBasementCondition] = useState("");
    const [isPermitRequired, setIsPermitRequired] = useState("");
    const [hoa, setHoa] = useState(undefined);
    const [hoaDetails, setHoaDetails] = useState("");

    async function checkLocalUser() {
        let localUser = await AsyncStorage.getItem("hfbUserData");
        if (localUser) {
            localUser = JSON.parse(localUser);
            if (await LocalAuthentication.hasHardwareAsync()) {
                if (await LocalAuthentication.isEnrolledAsync()) {
                    if (
                        await LocalAuthentication.authenticateAsync({
                            promptMessage: `Verify this is ${localUser.first_name}`,
                        })
                    ) {
                        setSalesPerson(
                            `${localUser.first_name} ${localUser.last_name}`
                        );
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

    return (
        <CustomerContext.Provider
            value={{ salesPerson, setSalesPerson, customer, setCustomer }}
        >
            <UserContext.Provider value={{ user, setUser }}>
                <InstallContext.Provider
                    value={{
                        projectType,
                        setProjectType,
                        installStory,
                        setInstallStory,
                        typeOfHome,
                        setTypeOfHome,
                        workspaceLocation,
                        setWorkspaceLocation,
                        bathroomLocation,
                        setBathroomLocation,
                        onlyBathroom,
                        setOnlyBathroom,
                        waterShutOff,
                        setWaterShutOff,
                        hasBasement,
                        setHasBasement,
                        basementCondition,
                        setBasementCondition,
                        isPermitRequired,
                        setIsPermitRequired,
                        hoa,
                        setHoa,
                        hoaDetails,
                        setHoaDetails,
                    }}
                >
                    <AppNavigator />
                </InstallContext.Provider>
            </UserContext.Provider>
        </CustomerContext.Provider>
    );
}
