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
import { Button } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import CustomerContext from "../context/customerContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import HFBHeader from "../components/HFBHeader";

export default function HomeScreen({ navigation }) {
  const { salesPerson, setSalesPerson, customer, setCustomer } = useContext(
    CustomerContext
  );
  const [error, setError] = useState({});
  const [date, setDate] = useState(new Date());

  const [hasBasement, setHasBasement] = useState(false);

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

  const installStory = [
    { label: "1st Floor", value: "1st Floor" },
    { label: "2nd Floor", value: "2nd Floor" },
    { label: "3rd Floor", value: "3rd Floor" },
  ];

  for (let i = 4; i < 101; i++) {
    if (i.toString()[i.toString().length - 1] == 1 && i.toString()[0] != 1) {
      installStory.push({ label: `${i}st Floor`, value: `${i}st Floor` });
    } else if (
      i.toString()[i.toString().length - 1] == 2 &&
      i.toString()[0] != 1
    ) {
      installStory.push({ label: `${i}nd Floor`, value: `${i}nd Floor` });
    } else if (
      i.toString()[i.toString().length - 1] == 3 &&
      i.toString()[0] != 1
    ) {
      installStory.push({ label: `${i}rd Floor`, value: `${i}rd Floor` });
    } else {
      installStory.push({ label: `${i}th Floor`, value: `${i}th Floor` });
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
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Transaction Date:</Text>
              </View>
              <View style={styles.right}>
                <Text style={{ fontSize: 20 }}>
                  {date.getMonth()}/{date.getDate()}/{date.getFullYear()}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Install Story:</Text>
              </View>
              <View style={styles.right}>
                <RNPickerSelect
                  placeholder={{
                    label: "Install Story...",
                    value: null,
                  }}
                  items={installStory}
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Workspace Location:</Text>
              </View>
              <View style={styles.right}>
                <TextInput
                  style={styles.textInput}
                  clearButtonMode="while-editing"
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <View style={styles.left}>
                <Text style={{ fontSize: 20 }}>Bathroom Location:</Text>
              </View>
              <View style={styles.right}>
                <TextInput
                  style={styles.textInput}
                  clearButtonMode="while-editing"
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                />
              </View>
            </View>
          </View>
          {hasBasement && (
            <View style={styles.row}>
              <View style={styles.insideRow}>
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
                      { label: "Yes", value: "Yes" },
                      { label: "No", value: "No" },
                    ]}
                    onValueChange={(value) => {
                      console.log(value);
                    }}
                    style={{ ...styles }}
                  />
                </View>
              </View>
            </View>
          )}
          <View style={styles.row}>
            <View style={styles.insideRow}>
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
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                  ]}
                  onValueChange={(value) => {
                    console.log(value);
                  }}
                  style={{ ...styles }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <View style={styles.left}>
                <Text style={{ fontSize: 16 }}>HOA?</Text>
              </View>
              <View style={styles.right}></View>
            </View>
          </View>

          {/* <Input
            label="Sales Person"
            value={salesPerson}
            onChangeText={(text) => {
              setSalesPerson(text);
            }}
            keyboardAppearance="default"
            clearButtonMode="while-editing"
            autoCompleteType="name"
            autoCapitalize="words"
            returnKeyType="done"
          /> */}

          <Button
            title="Submit Info"
            onPress={() => {
              //   checkCustomerInfo();
            }}
            style={{ marginBottom: 100, height: 100 }}
          />
          {/* <DateTimePicker
            value={date}
            onChange={(event, selectedDate) => {
              setDate(selectedDate);
            }}
          /> */}
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
    width: "70%",
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
    height: 60,
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
