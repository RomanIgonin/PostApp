import React from 'react';
import { View, StatusBar } from 'react-native';
import stylesStatusBar from "../styles/StatusBarColorStyle";

const GeneralStatusBarColor = ({ backgroundColor, ...props }) => (
    <View style={[stylesStatusBar.statusBar, { backgroundColor }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);
export default GeneralStatusBarColor;
