import React, { FlatList, Pressable, Text, View } from "react-native";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/";
import { PostsListStyle } from "./styles";
import { useEffect } from "react";
import { TimeAgo } from "../../components/TimeAgo/";
import { ReactionButtons } from "../../components/ReactionButtons/";
import { postsActions } from "../../../store/";
import { getPosts } from "../../../store/action";
import { AddPostButton } from "../../components/AddPostButton/";
import { useAppDispatch } from "../../../../../hook";
import { DeletePostButton } from "../../components/DeletePostButton/";
import { PostsListProps } from "../../../../../navigation/types";
import { useSelector } from "react-redux";
import {
  isPostsLoadingSelector,
  postsListSelector,
  refreshPostsSelector,
} from "../../../store/selectors";

export default function PostsList({ navigation }: PostsListProps) {
  const posts = useSelector(postsListSelector);
  const isPostsLoading = useSelector(isPostsLoadingSelector);
  const refreshPosts = useSelector(refreshPostsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isPostsLoading === false) {
      dispatch(getPosts());
    }
    console.log("1: PostsList useEffect");
  }, [refreshPosts]);

  if (posts === undefined) {
    return <Text>Error 1, posts not fetched</Text>;
  }

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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
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
