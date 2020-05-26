import React from 'react';
import WebView from 'react-native-webview'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
	return (
		<WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />
	);
};


export default App;
