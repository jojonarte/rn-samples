import React from 'react';
import { StyleSheet, Text, View, SectionList, Button } from 'react-native';
import Constants from 'expo-constants';

import AddContact from './screens/AddContact';

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

export default class App extends React.Component {
	state = {
		contacts: [],
		isAddContactsShown: false
	};

	/**
	 * this function reverses the value of boolean isAddContactsShown
	 */
	toggleAddContacts = () =>
		this.setState(prevState => {
			return {
				isAddContactsShown: !prevState.isAddContactsShown
			};
		});

	render() {
		if (this.state.isAddContactsShown) {
			/**
			 * a prop callback must be implemented in AddContact, see previous
			 * examples we've tackled this in this session
			 *
			 * 1. the function called must add a new contact object to the contacts in this.state
			 * 2. it should show in the UI
			 * 3. saving from AddContact component must remove it from view and return to the flat list view
			 */
			return <AddContact />;
		}

		return (
			<View style={styles.container}>
				<Button title="Add contact" onPress={this.toggleAddContacts} />
				<Text style={{ color: 'black', fontSize: 24 }}>Contacts</Text>
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
