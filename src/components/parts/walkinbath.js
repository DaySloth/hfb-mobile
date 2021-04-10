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

export default function WalkInBathOptions() {
	const [error, setError] = useState("");
	const [view, setView] = useState("bath");

	const [bath, setBath] = useState(false);
	const [drain, setDrain] = useState(false);
	const [wallSystem, setWallSystem] = useState(false);
	const [enclosure, setEnclosure] = useState(false);
	const [faucet, setFaucet] = useState(false);

	function add() {
		switch (view) {
			case "bath":
				setBath(true);
				break;
			case "drain":
				setDrain(true);
				break;
			case "wall system":
				setWallSystem(true);
				break;
			case "enclosure":
				setEnclosure(true);
				break;
			case "faucet":
				setFaucet(true);
				break;
			default:
				break;
		}
	}

	function remove() {
		switch (view) {
			case "bath":
				setBath(false);
				break;
			case "drain":
				setDrain(false);
				break;
			case "wall system":
				setWallSystem(false);
				break;
			case "enclosure":
				setEnclosure(false);
				break;
			case "faucet":
				setFaucet(false);
				break;
			default:
				break;
		}
	}

	return (
		<View>
			<View style={styles.statusView}>
				<Button
					title="Bath"
					type="clear"
					icon={
						bath ? (
							<Icon name="check-circle-outline" size={30} color="green" />
						) : (
							<Icon name="highlight-off" size={30} color="gray" />
						)
					}
					titleStyle={{ color: "black" }}
					onPress={() => {
						setView("bath");
					}}
				/>
				<Button
					title="Drain"
					type="clear"
					icon={
						drain ? (
							<Icon name="check-circle-outline" size={30} color="green" />
						) : (
							<Icon name="highlight-off" size={30} color="gray" />
						)
					}
					titleStyle={{ color: "black" }}
					onPress={() => {
						setView("drain");
					}}
				/>
				<Button
					title="Wall System"
					type="clear"
					icon={
						wallSystem ? (
							<Icon name="check-circle-outline" size={30} color="green" />
						) : (
							<Icon name="highlight-off" size={30} color="gray" />
						)
					}
					titleStyle={{ color: "black" }}
					onPress={() => {
						setView("wall system");
					}}
				/>
				<Button
					title="Enclosure"
					type="clear"
					icon={
						enclosure ? (
							<Icon name="check-circle-outline" size={30} color="green" />
						) : (
							<Icon name="highlight-off" size={30} color="gray" />
						)
					}
					titleStyle={{ color: "black" }}
					onPress={() => {
						setView("enclosure");
					}}
				/>
				<Button
					title="Faucet"
					type="clear"
					icon={
						faucet ? (
							<Icon name="check-circle-outline" size={30} color="green" />
						) : (
							<Icon name="highlight-off" size={30} color="gray" />
						)
					}
					titleStyle={{ color: "black" }}
					onPress={() => {
						setView("faucet");
					}}
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
				>
					<Card containerStyle={styles.card}>
						<Card.Title>{view.toUpperCase()}</Card.Title>
						<Card.Divider />
						<Text>{view.toUpperCase().repeat(20)}</Text>
						<Button
							title="Add to order"
							onPress={() => {
								add();
							}}
							icon={{
								name: "add",
								size: 20,
								color: "white",
							}}
							style={{
								width: 200,
								alignSelf: "center",
								marginTop: 20,
							}}
						/>
						<Button
							title="Remove"
							onPress={() => {
								remove();
							}}
							icon={{
								name: "delete",
								size: 20,
								color: "white",
							}}
							buttonStyle={{ backgroundColor: "red" }}
							style={{
								width: 200,
								alignSelf: "center",
								marginTop: 20,
							}}
						/>
					</Card>
				</KeyboardAvoidingView>
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
