import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AppNavigator from "./src/navigation/Navigator";

export default function App() {
    return <AppNavigator />;
}
