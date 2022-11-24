// отображает верхний заголовок и содержимое навигации
// Стек навигация по приложению. Подключение всех страниц приложения сюда
import * as React from "react";

import PostsList from "../media/posts/ui/screens/PostsList";
import SinglePostPage from "../media/posts/ui/screens/SinglePost";
import EditPostForm from "../media/posts/ui/screens/EditPost";
import AddPostForm from "../media/posts/ui/screens/AddPost";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#000a15',
            backgroundColor: "#849ab2",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      >
        <RootStack.Screen
          name="PostsList"
          component={PostsList}
          options={{ title: "" }}
        />
        <RootStack.Screen
          name="SinglePostPage"
          component={SinglePostPage}
          options={{ title: "" }}
        />
        <RootStack.Screen
          name="AddPostForm"
          component={AddPostForm}
          options={{ title: "" }}
        />
        <RootStack.Screen
          name="EditPostForm"
          component={EditPostForm}
          options={{ title: "" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
