import React, { FlatList, Pressable, Text, View } from "react-native";
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
import { AddPostButton } from "../../components/AddPostButton/index";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import { DeletePostButton } from "../../components/DeletePostButton/index";
import { PostsListProps } from "../../../../../navigation/types";

export default function PostsList({ navigation }: PostsListProps) {
  const posts = useAppSelector(selectAllPosts);
  const isPostsLoading = useAppSelector(selectPostsLoad);
  const refreshPosts = useAppSelector(selectRefreshPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPostsLoading === false) {
      dispatch(loadPosts());
    }
  }, [refreshPosts]);

  const onPostPressed = (item: any) => {
    navigation.navigate("SinglePostPage", { postId: item.id });
  };

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const keyExtractor = (item: any) => item.id;

  const renderItem = ({ item }: any) => {
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
          <View style={{ flexDirection: "row" }}>
            <ReactionButtons post={item} />
            <DeletePostButton postId={item.id} />
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={PostsListStyle.main}>
      <AddPostButton />
      <FlatList
        data={orderedPosts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}
