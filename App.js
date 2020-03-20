import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
	state = {
		name: '',
		phone: ''
	};
	handleNameChange = name => this.setState({ name });
	handlePhoneNumChange = phone => this.setState({ phone });
	handleSubmit = () => {
		// normally we can do the submission logic here or delegate the action in the upper scope
		// we can discuss more about this in the future
		// for now we log.
		console.log('Input values', this.state);
	};
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={this.state.name}
					placeholder="Name"
					onChangeText={this.handleNameChange}
				/>
				<TextInput
					style={styles.input}
					value={this.state.phone}
					placeholder="Phone"
					keyboardType="phone-pad"
					onChangeText={this.handlePhoneNumChange}
				/>
				<Button title="Submit values" onPress={this.handleSubmit} />
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
