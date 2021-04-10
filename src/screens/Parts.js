import React, { useContext, useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	Text,
} from "react-native";
import {
	Button,
	Input,
	Image,
	Header,
	Icon,
	Card,
	ListItem,
} from "react-native-elements";
import InstallContext from "../context/installContext";
import HFBHeader from "../components/HFBHeader";
import ShowerOptions from "../components/parts/shower";
import WalkInBathOptions from "../components/parts/walkinbath";

export default function PartsScreen({ navigation }) {
	const { projectType } = useContext(InstallContext);
	const [error, setError] = useState("");

	return (
		<View style={styles.container}>
			<HFBHeader navigation={navigation} />
			{projectType === "Shower" && <ShowerOptions />}
			{projectType === "Digital Shower" && <ShowerOptions />}

			{projectType === "Digital Shower(Free Upgrade)" && <ShowerOptions />}

			{projectType === "Walk In Bath" && <WalkInBathOptions />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	statusView: {
		width: Dimensions.get("window").width,
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "flex-start",
		borderBottomColor: "gray",
		borderBottomWidth: 2,
		padding: 10,
	},
	cardContainer: {
		flex: 1,
		width: Dimensions.get("window").width,
		alignItems: "center",
	},
	card: {
		width: 350,
		height: 350,
		borderRadius: 30,
		alignSelf: "center",
	},
});
