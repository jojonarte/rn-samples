import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Constants from 'expo-constants';

import getContacts from './getContacts';

function Row({ contact }) {
	return (
		<View style={styles.rowContainer}>
			<Text style={styles.text}>{contact.name}</Text>
			<Text style={styles.text}>{contact.phone}</Text>
		</View>
	);
}

/**
 * at the start this app is fast
 * clicking on toggle contacts will load the contacts fast
 *
 * try changing the value passed to `getContacts` in reloadContacts function
 * notice the changes in performance in the app.
 */
export default class App extends React.Component {
	state = {
		contacts: getContacts(),
		isContactsShown: false
	};

	reloadContacts = () =>
		this.setState({
			contacts: getContacts(1), // try changing the value passed to `getContacts` here
			isContactsShown: !this.state.isContactsShown
		});

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Button title="Toggle contacts" onPress={this.reloadContacts} />
					{this.state.isContactsShown &&
						this.state.contacts.map(contactItem => (
							<Row contact={contactItem} />
						))}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		marginTop: Constants.statusBarHeight,
		flexDirection: 'column'
	},
	rowContainer: {
		height: 50,
		width: '100%',
		paddingHorizontal: 16
	},
	text: {
		fontSize: 16,
		color: 'blue'
	}
});
