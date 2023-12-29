import React from 'react';
import { ActivityIndicator, SafeAreaView, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <StatusBar
                animated={true}
                backgroundColor="#111111"
            />
            <WebView
                source={{ uri: 'http://192.168.15.117/deltabarber_client_1/' }}
				textZoom={100}
                startInLoadingState
                renderLoading={() => (
                    <View style={{ flex: 1 }}>
                        <ActivityIndicator size="large" color="#333333" />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}