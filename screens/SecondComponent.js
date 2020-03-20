import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

// this is an example of a named export
export const sampleNamedExport = 'SampleNamed export';

export default class SecondComponent extends React.Component {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
