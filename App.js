import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

/**
 * This is a demo of a react-native input
 * The most basic input component for react-native is the TextInput
 *
 *	First text input is an uncontrolled one
 * The second is a controlled input
 * If you remove line 30
 * then try typing anything into it in the simulator/emulator
 * you will not see changes appear to the input value
 */
export default class App extends React.Component {
	state = {
		controlledValue: ''
	};
	handleInputChange = newValue => this.setState({ controlledValue: newValue });
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="This is an uncontrolled input"
				/>
				<TextInput
					style={styles.input}
					value={this.state.controlledValue}
					placeholder="This is a controlled input"
					onChangeText={this.handleInputChange}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	input: {
		borderColor: 'black',
		borderWidth: 1,
		width: 300,
		padding: 10
	}
});
