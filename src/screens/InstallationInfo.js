import React, { useContext, useState } from "react";

import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { Button, Input } from "react-native-elements";
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
              <View style={{ flexDirection: "column", width: "50%" }}>
                <Text>Transaction Date</Text>
              </View>
              <View style={{ flexDirection: "column", width: "50%" }}>
                <DateTimePicker
                  value={date}
                  onChange={(event, selectedDate) => {
                    setDate(selectedDate);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Project Type</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Install Story</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Type of Home</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Workspace Location</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Bathroom Location</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Is this the customers only bathroom?</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Water Shut Off</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Does property have a basement?</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.insideRow}>
              <Text>Is Basement finished or unfinished?</Text>
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

          {/* <RNPickerSelect
            placeholder={{
              label: "Select State",
              value: null,
            }}
            items={[{ label: "hi", value: "hi" }]}
            onValueChange={(value) => {
              console.log(value);
            }}
            style={{ ...styles }}
          /> */}

          {/* <Button
            title="Submit Info"
            onPress={() => {
            //   checkCustomerInfo();
            }}
            style={{ marginBottom: 100, height: 100 }}
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
    marginTop: 5,
    marginBottom: 20,
  },
  row: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  insideRow: {
    padding: 10,
    flexDirection: "row",
    alignContent: "space-between",
  },
});
