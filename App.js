import React from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	Button,
	Alert,
	KeyboardAvoidingView
} from 'react-native';

/**
 * Try replacing KeyboardAvoidingView view below with View
 * then compare the app behavior
 *
 * read more - https://reactnative.dev/docs/keyboardavoidingview
 */
export default class App extends React.Component {
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />
				<TextInput style={styles.input} placeholder="Input 1" />

				<Button title="Submit values" />
			</KeyboardAvoidingView>
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
		padding: 10,
		marginVertical: 24
	}
});
