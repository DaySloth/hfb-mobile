import React, { useContext, useState } from "react";
import {
	View,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Platform,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { Button, Input, Image, Header, Icon } from "react-native-elements";
import InstallContext from "../context/installContext";
import HFBHeader from "../components/HFBHeader";

export default function PartsScreen({ navigation }) {
	const { projectType } = useContext(InstallContext);
	const [error, setError] = useState("");

	return (
		<View style={styles.container}>
			<HFBHeader navigation={navigation} />

			<View style={styles.statusView}>
				<Button
					title="Base"
					type="clear"
					icon={<Icon name="check-circle-outline" size={30} color="green" />}
					titleStyle={{ color: "black" }}
					onPress={() => {}}
				/>
				<Button
					title="Drain"
					type="clear"
					icon={<Icon name="highlight-off" size={30} color="gray" />}
					titleStyle={{ color: "black" }}
					onPress={() => {}}
				/>
				<Button
					title="Wall System"
					type="clear"
					icon={<Icon name="highlight-off" size={30} color="gray" />}
					titleStyle={{ color: "black" }}
					onPress={() => {}}
				/>
				<Button
					title="Enclosure"
					type="clear"
					icon={<Icon name="highlight-off" size={30} color="gray" />}
					titleStyle={{ color: "black" }}
					onPress={() => {}}
				/>
				<Button
					title="Faucet"
					type="clear"
					icon={<Icon name="highlight-off" size={30} color="gray" />}
					titleStyle={{ color: "black" }}
					onPress={() => {}}
				/>
			</View>
			<ScrollView>
				<KeyboardAvoidingView
					style={{
						flex: 1,
						marginTop: 30,
						flexDirection: "column",
						justifyContent: "center",
					}}
					behavior="padding"
				></KeyboardAvoidingView>
			</ScrollView>
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
});
