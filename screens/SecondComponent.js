import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// this is an example of a named export
export const sampleNamedExport = 'SampleNamed export';

export default class SecondComponent extends React.Component {
	static propTypes = {
		onSecondComponentUnmountPressed: PropTypes.func.isRequired,
		title: PropTypes.string
	};

	render() {
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
