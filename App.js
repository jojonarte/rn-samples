import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// go to this file to see propTypes sample
import SecondComponent from './screens/SecondComponent';

export default class MainComponent extends React.Component {
	state = {
		isNewComponentMounted: false
	};

	toggleComponentMounting = () =>
		this.setState({
			isNewComponentMounted: !this.state.isNewComponentMounted
		});

	render() {
		// if we remove line 26 onSecondComponentUnmountPressed={this.toggleComponentMounting}
		// when mounting the SecondComponent we will see an error related to propTypes
		// propTypes is used to self-document react components
		// for developers to know what the component is intended to receive
		// it is important to manage project as it grows
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
