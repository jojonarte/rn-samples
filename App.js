import React from 'react';
import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import Constants from 'expo-constants';

import getContacts from './getContacts';

const sectionContactsByInitials = contacts => {
	const contactsByLetter = contacts.reduce((contactsMap, currentContact) => {
		const letterKey = currentContact.name[0];
		if (!contactsMap[letterKey]) {
			return {
				...contactsMap,
				[letterKey]: [currentContact]
			};
		}
		return {
			...contactsMap,
			[letterKey]: contactsMap[letterKey].concat(currentContact)
		};
	}, {});
	const sectionedContacts = Object.keys(contactsByLetter)
		.map(key => ({
			title: key,
			data: contactsByLetter[key]
		}))
		.sort((a, b) => {
			if (a.title < b.title) {
				return -1;
			} else if (a.title > b.title) {
				return 1;
			}
			return 0;
		});

	return sectionedContacts;
};

function Row({ contact }) {
	return (
		<View style={styles.rowContainer}>
			<Text style={styles.text}>{contact.name}</Text>
			<Text style={styles.text}>{contact.phone}</Text>
		</View>
	);
}

/**
 * see how it looks in the simulator/emulator
 *
 * read through documentations in https://reactnative.dev/docs/sectionlist
 * Try out some prop features
 * play around with the code
 */
export default class App extends React.Component {
	state = {
		contacts: getContacts(),
		isContactsShown: false
	};

	reloadContacts = () =>
		this.setState({
			contacts: getContacts(1000),
			isContactsShown: !this.state.isContactsShown
		});

	render() {
		return (
			<View style={styles.container}>
				<Button title="Toggle contacts" onPress={this.reloadContacts} />
				{this.state.isContactsShown && (
					<SectionList
						style={{ marginTop: 16, flex: 1 }}
						sections={sectionContactsByInitials(this.state.contacts)}
						keyExtractor={(item, index) => item.key}
						renderItem={({ item }) => <Row contact={item} />}
						renderSectionHeader={({ section: { title } }) => (
							<View style={styles.sectionHeaderContainer}>
								<Text style={styles.sectionHeaderTitle}>{title}</Text>
							</View>
						)}
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
	},
	sectionHeaderContainer: {
		backgroundColor: 'black'
	},
	sectionHeaderTitle: {
		color: 'white',
		fontWeight: '900',
		fontSize: 48
	}
});
