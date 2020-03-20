import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	ScrollView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.container}>
					<Button
						title="Button Component"
						onPress={() => console.log('Button component pressed')}
					/>
					<TouchableWithoutFeedback
						onPress={() =>
							console.log('TouchableWithoutFeedback component pressed')
						}
					>
						<View>
							<Text> TouchableWithoutFeedback</Text>
							<Text>
								You have to wrap child components with a View as parent if there
								are more than one child
							</Text>
							<Text>Try pressing on this and you will see no effect</Text>
						</View>
					</TouchableWithoutFeedback>
					<TouchableHighlight
						onPress={() => console.log('TouchableHighlight component pressed')}
					>
						<View>
							<Text> TouchableHighlight</Text>
							<Text>
								You have to wrap child components with a View as parent if there
								are more than one child
							</Text>
							<Text>
								Try pressing on this and you will see a highlighting effect
							</Text>
						</View>
					</TouchableHighlight>
					<TouchableOpacity
						onPress={() => console.log('TouchableOpacity component pressed')}
					>
						<Text>You can wrap anything just like a div</Text>
						<Text>
							Try pressing on this and you will see the text color will lighten
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginTop: Constants.statusBarHeight
	}
});
