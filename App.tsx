import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import store from "./src/modules/core/Store";
import { PostsListStyle } from "./src/modules/media/posts/ui/screens/PostsList/styles";
import MainStack from "./src/modules/navigation/Navigation";
import GeneralStatusBarColor from "./src/modules/core/GeneralStatusBarColor";
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
