import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./src/modules/app/Store";
import { PostsListStyle } from "./src/modules/media/posts/ui/screens/PostsList/styles";
import MainStack from "./src/modules/app/Navigat";
import GeneralStatusBarColor from "./src/modules/app/GeneralStatusBarColor";
import { loadUsers } from "./src/modules/users/store/actions";
import { useEffect } from "react";

export default function App() {
  // const isUsersLoading = useSelector((state) => state.users.isUsersLoading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isUsersLoading === false) {
  store.dispatch(loadUsers());
  // }
  // }, [isUsersLoading, dispatch]);

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
