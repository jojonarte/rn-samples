import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
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
 * look at how many is loaded in reloadContacts function
 *
 * try changing it up and compare with your results from scrollview
 */
export default class App extends React.Component {
	state = {
		contacts: getContacts(),
		isContactsShown: false
	};

	reloadContacts = () =>
		this.setState({
			contacts: getContacts(100000), // notice how fast it loads even if I'm loading alot more compared to scrollview
			isContactsShown: !this.state.isContactsShown
		});

	render() {
		return (
			<View style={styles.container}>
				<Button title="Toggle contacts" onPress={this.reloadContacts} />
				{this.state.isContactsShown && (
					<FlatList
						data={this.state.contacts}
						renderItem={renderedItem => <Row contact={renderedItem.item} />}
					/>
				)}
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
