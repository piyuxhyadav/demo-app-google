import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";

const LoginScreen = ({ promptAsync }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Welcome to the demo app</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					promptAsync();
				}}
			>
				<Text style={styles.buttonText}>login</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default LoginScreen;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		height: windowHeight,
		width: windowWidth,
		justifyContent: "center",
		backgroundColor: "#202D4C",
		color: "#F7DDBB",
	},
	heading: {
		marginLeft: 0.1 * windowWidth,
		color: "#F7DDBB",
		fontSize: 52,
		textAlign: "left",
	},
	button: {
		marginTop: 50,
		borderColor: "#F7DDBB",
		borderWidth: 2,
		borderRadius: 8,
		width: 150,
		height: 60,
		marginLeft: 0.1 * windowWidth,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#F7DDBB",
		fontSize: 24,
	},
});
