import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const contactsArray = [
	{
		name: 'Chaimel',
		phone: '123'
	},
	{
		name: 'Beverly',
		phone: '123'
	},
	{
		name: 'EJ',
		phone: '123'
	},
	{
		name: 'Audric',
		phone: '123'
	},
	{
		name: 'June',
		phone: '123'
	},
	{
		name: 'Karl',
		phone: '123'
	},
	{
		name: 'Ken',
		phone: '123'
	},
	{
		name: 'Kevin',
		phone: '123'
	},
	{
		name: 'Matias',
		phone: '123'
	}
];

function Row({ contact }) {
	return (
		<View style={styles.rowContainer}>
			<Text style={styles.text}>{contact.name}</Text>
			<Text style={styles.text}>{contact.phone}</Text>
		</View>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView>
				{contactsArray.map(contactItem => (
					<Row contact={contactItem} />
				))}
			</ScrollView>
		</View>
	);
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
