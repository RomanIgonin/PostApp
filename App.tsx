import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/modules/app/Store";
import { PostStyle } from "./src/modules/styles/PostStyle";
import MainStack from "./src/modules/app/Navigat";
import GeneralStatusBarColor from "./src/modules/app/GeneralStatusBarColor";

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
