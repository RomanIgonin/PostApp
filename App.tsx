import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./src/modules/app/Store";
import { PostsListStyle } from "./src/modules/media/posts/ui/screens/PostsList/styles";
import MainStack from "./src/modules/app/Navigat";
import GeneralStatusBarColor from "./src/modules/app/GeneralStatusBarColor";
import { loadUsers } from "./src/modules/users/store/actions";

export default function App() {
  store.dispatch(loadUsers());

  return (
    <Provider store={store}>
      <GeneralStatusBarColor
        backgroundColor="#000a15"
        barStyle="light-content"
      />
      <SafeAreaView style={PostsListStyle.main}>
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
}
