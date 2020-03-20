import React from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
	state = {
		name: '',
		phone: '',
		isFormValid: false
	};
	handleNameChange = name => this.setState({ name }, this.checkFormValidity);
	handlePhoneNumChange = phone =>
		this.setState({ phone }, this.checkFormValidity);

	/**
	 * sample live validation via this.setState callback
	 * - most common pattern in mobile apps
	 */
	checkFormValidity = () => {
		if (this.state.phone.length < 10 || !this.state.name) {
			return this.setState({ isFormValid: false });
		}

		return this.setState({ isFormValid: true });
	};

	/**
	 * example basic validation on submit
	 */
	handleSubmit = () => {
		let isFormValid = false;
		if (this.state.phone.length < 10) {
			Alert.alert('error', 'Invalid phone number');
		} else if (!this.state.name) {
			Alert.alert('error', 'Invalid name');
		} else {
			console.log('submit success');
			isFormValid = true;
		}
		this.setState({ isFormValid });
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
				<Button
					title="Submit values"
					onPress={this.handleSubmit}
					disabled={!this.state.isFormValid}
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
