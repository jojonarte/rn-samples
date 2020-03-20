import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import PropTypes from 'prop-types';

export default class AddContact extends React.Component {
	static propTypes = {
		onAddContactSubmit: PropTypes.func.isRequired
	};

	/**
	 * TODO:
	 * implement functions
	 * 1. must create a form
	 * 2. must input phone and name
	 * 3. must have a button to submit
	 *
	 * 4. function to submit must call prop
	 * 5. the prop callback must be implemented in Parent component App.js
	 */
	render() {
		/**
		 * TODO: Implement this
		 */
		return (
			<View style={styles.container}>
				<Text>Nothing to see here as of now</Text>
				<Text>Implement something in this component, you can remove these</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: Constants.statusBarHeight,
		flexDirection: 'column'
	}
});
