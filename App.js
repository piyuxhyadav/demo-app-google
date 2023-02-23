import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import react, { useEffect, useState } from "react";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
	const [accessToken, setAccessToken] = useState(null);
	const [user, setUser] = useState(null);
	const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
		clientId: "XXxxXXxxXX.apps.googleusercontent.com",
		iosClientId: "XXxxXXxxXX.apps.googleusercontent.com",
		androidClientId: "XXxxXXxxXX.apps.googleusercontent.com",
	});

	useEffect(() => {
		if (response?.type === "success") {
			setAccessToken(response.authentication.accessToken);
			accessToken && fetchUserInfo();

			console.log("home redirect login done");
		}
	}, [response, accessToken]);

	async function fetchUserInfo() {
		let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		const userInfo = await response.json();
		setUser(userInfo);
	}

	return (
		<SafeAreaView>
			{user && <HomeScreen user={user} />}
			{user == null && <LoginScreen promptAsync={promptAsync} />}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
