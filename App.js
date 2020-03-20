import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
	/**
	 * The button will not be clickable and the JS thread is blocked for 5 seconds
	 * but you can interact with the whole screen or your whole simulator/emulator
	 * while it's happening and no crash will happen.
	 *
	 * bouncing view when scrolling might only work on iOS devices/Simulators
	 *
	 * the logs will also be visible on the terminal where you run expo
	 */
	blockJSThread = () => {
		const dateAfter5 = Date.now() + 5000;
		console.log('start blocking');
		while (Date.now() < dateAfter5) {
			console.log('blocked JS but you can keep scrolling the view');
		}
		console.log('end blocking');
	};

	render() {
		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.container}>
					<Button
						title="Press to block JS thread"
						onPress={this.blockJSThread}
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: Constants.statusBarHeight
	}
});
