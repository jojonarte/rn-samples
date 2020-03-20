import React from 'react';
// these are examples of named imports
import { StyleSheet, Text, View, Button } from 'react-native';

// this is an example of a default import
import SecondComponent from './screens/SecondComponent';

// This is an example of a default export
export default class MainComponent extends React.Component {
	state = {
		isNewComponentMounted: false
	};
	componentWillMount() {
		console.log('MainComponent will mount');
	}
	componentDidMount() {
		console.log('MainComponent mounted');
	}
	toggleComponentMounting = () =>
		this.setState({
			isNewComponentMounted: !this.state.isNewComponentMounted
		});

	componentWillUnmount() {
		console.log('MainComponent will unmount');
	}

	render() {
		console.log('MainComponent rendered');
		if (this.state.isNewComponentMounted)
			return (
				<SecondComponent
					onSecondComponentUnmountPressed={this.toggleComponentMounting}
				/>
			);
		return (
			<View style={styles.container}>
				<Button
					title="Toggle New Component"
					onPress={this.toggleComponentMounting}
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
	}
});
