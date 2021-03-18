import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Button, Input, Image, Header } from "react-native-elements";
import { db } from "../../config/firebase.config.js";
import Logo from "../../assets/mobile-logo-horz-transparent.png";
import { Base64 } from "js-base64";
import UserContext from "../context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomerContext from "../context/customerContext.js";

export default function LoginScreen({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  const { salesPerson, setSalesPerson } = useContext(CustomerContext);

  useEffect(() => {
    navigation.closeDrawer();
  }, []);

  async function loginUser() {
    setError("");
    if (username && password) {
      let user = await db.ref(`/users/${username.toLowerCase()}`).once("value");
      user = user.val();
      if (user) {
        if (user.tempPassword) {
          if (password === user.password) {
            Alert.alert("Please update your password");
            setIsTempPass(true);
          } else {
            setError("Invalid username or password");
          }
        } else {
          if (password === Base64.decode(user.password)) {
            // try {
            //   await AsyncStorage.setItem(
            //     "hfbUserData",
            //     JSON.stringify({
            //       first_name: user.first_name,
            //       last_name: user.last_name,
            //       email: user.email,
            //       last_login: Date.now(),
            //     })
            //   );
            // } catch (error) {
            //   console.log("error")
            // }

            setSalesPerson({
              first_name: user.first_name,
              last_name: user.last_name,
            });
            setUser({
              isLoggedIn: true,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
            });
          } else {
            setError("Invalid username or password");
          }
        }
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("Please complete form");
    }
  }

  async function updatePassword() {
    setTempError("");
    if (newPassword && confirmNewPassword) {
      if (newPassword === confirmNewPassword) {
        const hashedPass = Base64.encode(newPassword);
        db.ref(`/users/${username.toLowerCase()}`)
          .update({
            password: hashedPass,
            tempPassword: false,
          })
          .then(async () => {
            let newUser = await db
              .ref(`/users/${username.toLowerCase()}`)
              .once("value");
            newUser = newUser.val();
            await AsyncStorage.setItem(
              "hfbUserData",
              JSON.stringify({
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                last_login: Date.now(),
              })
            );
            setSalesPerson({
              first_name: newUser.first_name,
              last_name: newUser.last_name,
            });
            setUser({
              isLoggedIn: true,
              first_name: newUser.first_name,
              last_name: newUser.last_name,
              email: newUser.email,
            });
          });
      } else {
        setTempError("Passwords must match");
      }
    } else {
      setTempError("Please complete form");
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isTempPass, setIsTempPass] = useState(false);

  const [error, setError] = useState("");
  const [tempError, setTempError] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          marginTop: 30,
          flexDirection: "column",
          justifyContent: "center",
        }}
        behavior="padding"
      >
        <ScrollView>
          <Image
            source={Logo}
            style={{
              width: "100%",
              height: 300,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />

          <View>
            <Input
              label="Username"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
              keyboardAppearance="default"
              clearButtonMode="while-editing"
              returnKeyType="done"
              errorMessage={error}
              disabled={isTempPass ? true : false}
            />
            <Input
              label="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
              keyboardAppearance="default"
              clearButtonMode="while-editing"
              autoCompleteType="password"
              returnKeyType="done"
              errorMessage={error}
              disabled={isTempPass ? true : false}
            />

            {isTempPass ? (
              <>
                <Input
                  label="New Password"
                  value={newPassword}
                  onChangeText={(text) => {
                    setNewPassword(text);
                  }}
                  secureTextEntry={true}
                  keyboardAppearance="default"
                  clearButtonMode="while-editing"
                  autoCompleteType="password"
                  returnKeyType="done"
                  errorMessage={tempError}
                />
                <Input
                  label="Confirm New Password"
                  value={confirmNewPassword}
                  onChangeText={(text) => {
                    setConfirmNewPassword(text);
                  }}
                  secureTextEntry={true}
                  keyboardAppearance="default"
                  clearButtonMode="while-editing"
                  autoCompleteType="password"
                  returnKeyType="done"
                  errorMessage={tempError}
                />

                <Button
                  title="Update password"
                  onPress={() => {
                    updatePassword();
                  }}
                  style={{
                    width: 200,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                />
              </>
            ) : (
              <Button
                title="Login"
                onPress={() => {
                  loginUser();
                }}
                style={{
                  width: 200,
                  alignSelf: "center",
                  marginTop: 20,
                }}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
