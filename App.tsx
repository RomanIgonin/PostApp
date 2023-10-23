import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import store from './src/app/Store';
import {PostStyle} from "./src/styles/PostStyle";
import MainStack from './src/app/Navigat';
import GeneralStatusBarColor from './src/app/GeneralStatusBarColor';

export default function App() {
    return (
        <Provider store={store}>
            <GeneralStatusBarColor
                backgroundColor="#000a15"
                barStyle="light-content"
            />
            <SafeAreaView style={PostStyle.main}>
                <MainStack />
            </SafeAreaView>
        </Provider>
    );
}
