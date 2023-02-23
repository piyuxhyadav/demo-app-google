import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ user }) => {
	const ShowUserInfo = () => {
		if (user != null)
			return (
				<View style={styles.container}>
					<Text style={styles.heading}>Name: {user.name}</Text>
					<Text style={styles.heading}>email: {user.email}</Text>
				</View>
			);
	};

	return (
		<SafeAreaView>
			{user && <ShowUserInfo />}
			<>
				<SafeAreaView style={styles.container}>
					<Text style={styles.heading}>loading...</Text>
				</SafeAreaView>
			</>
		</SafeAreaView>
	);
};

export default HomeScreen;

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
		fontSize: 24,
		textAlign: "left",
	},
});
