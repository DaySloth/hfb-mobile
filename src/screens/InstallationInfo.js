import React, { useContext, useState } from "react";

import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import CustomerContext from "../context/customerContext";
import InstallContext from "../context/installContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import HFBHeader from "../components/HFBHeader";

export default function HomeScreen({ navigation }) {
  const { salesPerson, setSalesPerson, customer, setCustomer } = useContext(
    CustomerContext
  );
  const {
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
  } = useContext(InstallContext);
  const [error, setError] = useState({});
  const [date, setDate] = useState(new Date());

  const projectTypes = [
    { label: "Walk In Bath", value: "Walk In Bath" },
    {
      label: "Digital Shower(Free Upgrade)",
      value: "Digital Shower(Free Upgrade)",
    },
    { label: "Digital Shower", value: "Digital Shower" },
    { label: "Shower", value: "Shower" },
    { label: "Tub", value: "Tub" },
  ];

  const installStoryOptions = [
    { label: "1st Floor", value: "1st Floor" },
    { label: "2nd Floor", value: "2nd Floor" },
    { label: "3rd Floor", value: "3rd Floor" },
  ];

  for (let i = 4; i < 101; i++) {
    if (i.toString()[i.toString().length - 1] == 1 && i.toString()[0] != 1) {
      installStoryOptions.push({
        label: `${i}st Floor`,
        value: `${i}st Floor`,
      });
    } else if (
      i.toString()[i.toString().length - 1] == 2 &&
      i.toString()[0] != 1
    ) {
      installStoryOptions.push({
        label: `${i}nd Floor`,
        value: `${i}nd Floor`,
      });
    } else if (
      i.toString()[i.toString().length - 1] == 3 &&
      i.toString()[0] != 1
    ) {
      installStoryOptions.push({
        label: `${i}rd Floor`,
        value: `${i}rd Floor`,
      });
    } else {
      installStoryOptions.push({
        label: `${i}th Floor`,
        value: `${i}th Floor`,
      });
    }
  }

  const homeTypes = [
    { label: "Single Family", value: "Single Family" },
    { label: "Condo", value: "Condo" },
    { label: "Townhouse", value: "Townhouse" },
    { label: "Mid-Rise", value: "Mid-Rise" },
    { label: "High-Rise", value: "High-Rise" },
  ];

  // function formatPhoneNumber(phoneNumberString) {
  //   let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  //   let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  //   if (match) {
  //     setCustomer({
  //       ...customer,
  //       phone: "(" + match[1] + ") " + match[2] + "-" + match[3],
  //     });
  //   } else {
  //     setCustomer({ ...customer, phone: phoneNumberString });
  //   }
  // }

  function checkInstallInfo() {
    if (!projectType) {
      Alert.alert("Form Incomplete", "Please provide project type");
    } else if (!installStory) {
      Alert.alert("Form Incomplete", "Please provide install story");
    } else if (!typeOfHome) {
      Alert.alert("Form Incomplete", "Please provide type of home");
    } else if (!workspaceLocation) {
      Alert.alert("Form Incomplete", "Please provide a workspace location");
    } else if (!bathroomLocation) {
      Alert.alert("Form Incomplete", "Please provide a bathroom location");
    } else if (!onlyBathroom) {
      Alert.alert(
        "Form Incomplete",
        "Please indicate if this is the only bathroom"
      );
    }
    if (!waterShutOff) {
      Alert.alert("Form Incomplete", "Please provide water shut off type");
    } else if (hasBasement != true && hasBasement != false) {
      Alert.alert(
        "Form Incomplete",
        "Please indicate if the customer has a basement"
      );
    } else if (!isPermitRequired) {
      Alert.alert("Form Incomplete", "Please indicate if a permit is required");
    } else if (hoa != true && hoa != false) {
      Alert.alert(
        "Form Incomplete",
        "Please indicate if the home is part of an HOA"
      );
    } else if (hasBasement) {
      if (!basementCondition) {
        Alert.alert(
          "Form Incomplete",
          "Please indicate if basement is finished or not"
        );
      } else {
        navigation.navigate("Measurements");
      }
    } else {
      navigation.navigate("Measurements");
    }
  }

  return (
    <View style={styles.container}>
      <HFBHeader navigation={navigation} />
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
          style={
            Platform.isPad ? styles.scrollContainer : styles.mobileContainer
          }
        >
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Transaction Date:</Text>
              </View>
              <View style={styles.right}>
                <Text style={{ fontSize: 20 }}>
                  {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
                </Text>
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Project Type:</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Project type...",
                    value: null,
                  }}
                  items={projectTypes}
                  onValueChange={(value) => {
                    setProjectType(value);
                  }}
                  style={{ ...styles }}
                  value={projectType}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Install Story:</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Install Story...",
                    value: null,
                  }}
                  items={installStoryOptions}
                  onValueChange={(value) => {
                    setInstallStory(value);
                  }}
                  style={{ ...styles }}
                  value={installStory}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Type of Home:</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Home type...",
                    value: null,
                  }}
                  items={homeTypes}
                  onValueChange={(value) => {
                    setTypeOfHome(value);
                  }}
                  style={{ ...styles }}
                  value={typeOfHome}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Workspace Location:</Text>
              </View>
              <View style={styles.right}>
                <TextInput
                  style={styles.textInput}
                  clearButtonMode="while-editing"
                  onChangeText={(text) => {
                    setWorkspaceLocation(text);
                  }}
                  value={workspaceLocation}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Bathroom Location:</Text>
              </View>
              <View style={styles.right}>
                <TextInput
                  style={styles.textInput}
                  clearButtonMode="while-editing"
                  onChangeText={(text) => {
                    setBathroomLocation(text);
                  }}
                  value={bathroomLocation}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 16 }}>
                  Is this the customers only bathroom?
                </Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Only Bathroom?",
                    value: null,
                  }}
                  items={[
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                  ]}
                  onValueChange={(value) => {
                    setOnlyBathroom(value);
                  }}
                  style={{ ...styles }}
                  value={onlyBathroom}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Water Shut Off:</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Water Shutoff...",
                    value: null,
                  }}
                  items={[
                    {
                      label: "Individual Water Shutoff",
                      value: "Individual Water Shutoff",
                    },
                    {
                      label: "Building Shutoff(Need Approval)",
                      value: "Building Shutoff(Need Approval)",
                    },
                  ]}
                  onValueChange={(value) => {
                    setWaterShutOff(value);
                  }}
                  style={{ ...styles }}
                  value={waterShutOff}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 16 }}>
                  Does property have a basement?
                </Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Basement?",
                    value: null,
                  }}
                  items={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                  onValueChange={(value) => {
                    setHasBasement(value);
                  }}
                  style={{ ...styles }}
                  value={hasBasement}
                />
              </View>
            </View>
          </View>
          {hasBasement === true && (
            <View style={Platform.isPad ? styles.tabletRow : styles.row}>
              <View
                style={
                  Platform.isPad ? styles.tabletInsideRow : styles.insideRow
                }
              >
                <View style={styles.left}>
                  <Text style={{ fontSize: 16 }}>
                    Is basement finished or unfinished?
                  </Text>
                </View>
                <View style={styles.right}>
                  <RNPickerSelect
                    placeholder={{
                      label: "Basement condition...",
                      value: null,
                    }}
                    items={[
                      {
                        label: "Finished",
                        value: "Finished",
                      },
                      {
                        label: "Unfinished",
                        value: "Unfinished",
                      },
                    ]}
                    onValueChange={(value) => {
                      setBasementCondition(value);
                    }}
                    style={{ ...styles }}
                    value={basementCondition}
                  />
                </View>
              </View>
            </View>
          )}
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 16 }}>Is a permit required?</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Permit?",
                    value: null,
                  }}
                  items={[
                    {
                      label: "Required (Obtained by HFB)",
                      value: "Required (Obtained by HFB)",
                    },
                    {
                      label: "Required (Obtained by home owner)",
                      value: "Required (Obtained by home owner)",
                    },
                    {
                      label: "Not Required by home owner",
                      value: "Not Required by home owner",
                    },
                  ]}
                  onValueChange={(value) => {
                    setIsPermitRequired(value);
                  }}
                  style={{ ...styles }}
                  value={isPermitRequired}
                />
              </View>
            </View>
          </View>
          <View style={Platform.isPad ? styles.tabletRow : styles.row}>
            <View
              style={Platform.isPad ? styles.tabletInsideRow : styles.insideRow}
            >
              <View style={styles.left}>
                <Text style={{ fontSize: 16 }}>HOA?</Text>
              </View>
              <View style={styles.right}>
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    title="Yes"
                    checked={hoa === true && true}
                    size={30}
                    center
                    containerStyle={{
                      backgroundColor: "transparent",
                      padding: 0,
                    }}
                    textStyle={{ fontSize: 18 }}
                    checkedColor="green"
                    onPress={() => {
                      setHoa(true);
                    }}
                  />
                  <CheckBox
                    title="No"
                    checked={hoa === false && true}
                    size={30}
                    center
                    containerStyle={{
                      backgroundColor: "transparent",
                      padding: 0,
                    }}
                    textStyle={{ fontSize: 18 }}
                    checkedColor="red"
                    onPress={() => {
                      setHoa(false);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {hoa === true && (
            <View
              style={{
                width: "90%",
                height: 200,
                backgroundColor: "white",
                alignSelf: "center",
                margin: 10,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
                  borderColor: "black",
                  borderWidth: 1,
                  padding: 5,
                  fontSize: 20,
                }}
                multiline={true}
                placeholder="HOA details..."
                onChangeText={(text) => {
                  setHoaDetails(text);
                }}
                value={hoaDetails}
              />
            </View>
          )}

          <Button
            title="Submit Info"
            onPress={() => {
              checkInstallInfo();
            }}
            style={
              Platform.isPad
                ? {
                    width: 300,
                    alignSelf: "center",
                    marginBottom: 100,
                    marginTop: 50,
                    height: 100,
                  }
                : { width: 200, alignSelf: "center" }
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    width: "80%",
    alignSelf: "center",
  },
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "black",
    marginTop: 20,
    marginBottom: 20,
    height: 45,
  },
  row: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    height: 70,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: Dimensions.get("screen").width,
  },
  insideRow: {
    padding: 10,
    flexDirection: "row",
    alignContent: "space-between",
    width: Dimensions.get("screen").width,
  },
  tabletRow: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    height: 70,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "90%",
  },
  tabletInsideRow: {
    padding: 10,
    flexDirection: "row",
    alignContent: "space-between",
    width: "100%",
  },
  left: {
    width: 100,
    flex: 1,
    justifyContent: "center",
  },
  right: {
    width: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textInput: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 4,
    borderColor: "gray",
    padding: 10,
    fontSize: 16,
  },
});

{
  /* <DateTimePicker
    value={date}
    onChange={(event, selectedDate) => {
        setDate(selectedDate);
    }}
/>; */
}
