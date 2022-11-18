// отображает верхний заголовок и содержимое навигации
// Стек навигация по приложению. Подключение всех страниц приложения сюда
import * as React from "react";

import PostsList from "../media/posts/PostsList";
import SinglePostPage from "../media/posts/SinglePostPage";
import EditPostForm from "../media/posts/EditPostForm";
import AddPostForm from "../media/posts/ui/screens/AddPost/AddPostForm";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigate({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen
          name="PostsList"
          component={PostsList}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="SinglePostPage"
          component={SinglePostPage}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="AddPostForm"
          component={AddPostForm}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="EditPostForm"
          component={EditPostForm}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
