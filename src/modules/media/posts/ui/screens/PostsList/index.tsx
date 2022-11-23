// Визуальная часть пост листа
import React, {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/index";
import { PostsListStyle } from "./styles";
import { useEffect, useState } from "react";
import { TimeAgo } from "../../components/TimeAgo/index";
import { ReactionButtons } from "../../components/ReactionButtons/index";
import {
  selectAllPosts,
  selectPostsLoad,
  selectRefreshPosts,
} from "../../../store/index";
import { loadPosts } from "../../../store/action";
import AddPostButton from "../../components/AddPostButton/index";
import { useAppDispatch, useAppSelector } from "../../../../../hook";

export default function PostsList({ navigation }) {
  const posts = useAppSelector(selectAllPosts);
  const isPostsLoading = useAppSelector(selectPostsLoad);
  const refreshPosts = useAppSelector(selectRefreshPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPostsLoading === false) {
      dispatch(loadPosts());
    }
  }, [refreshPosts]);

  const onPostPressed = (item) => {
    navigation.navigate("SinglePostPage", { postId: item.id });
  };

  // Sort posts in reverse chronological order by datetime string
  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const keyExtractor = (item) => item.id;

  const renderItem = ({ item }) => {
    return (
      <View style={PostsListStyle.mainTitle}>
        <Pressable onPress={() => onPostPressed(item)}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <AuthorPost userId={item.userId} />
            <TimeAgo timestamp={item.date} />
          </View>
          <Text style={PostsListStyle.postTitle}>{item.title}</Text>
          <Text style={PostsListStyle.postContent}>{item.content}</Text>
          <ReactionButtons post={item} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={PostsListStyle.main}>
      <AddPostButton />
      <FlatList
        // data={orderedPosts}
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}
