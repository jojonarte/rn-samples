import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/**
 * Observe through the logs on what happened,
 * The very first component lifecycle to get invoked on each component
 * should be the componentWillMount
 * followed by the render
 * then the componentDidMount
 *
 * then upon removal of component from the scene
 * componentWillUnmount should be called
 *
 * try running the app and play around with it
 * then observe the logs.
 */
class SecondComponent extends React.Component {
	componentWillMount() {
		console.log('SecondComponent will mount');
	}
	componentDidMount() {
		console.log('SecondComponent did mount');
	}
	componentWillUnmount() {
		console.log('SecondComponent will Unmount');
	}

	render() {
		console.log('SecondComponent did render');
		return (
			<View style={styles.container}>
				<Button
					title="Unmount second component"
					onPress={this.props.onSecondComponentUnmountPressed}
				/>
			</View>
		);
	}
}

/**
 * only class based components can use react lifecycle functions
 */
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
