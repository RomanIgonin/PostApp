import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/";
import { SinglePostPageStyle } from "./styles";
import { PostsListStyle } from "../PostsList/styles";
import { ReactionButtons } from "../../components/ReactionButtons";
import { SinglePostProps } from "../../../../../navigation/types";
import { useSelector } from "react-redux";
import { selectedPostSelector } from "../../../store/selectors";

export default function SinglePostPage({ navigation }: SinglePostProps) {
  const selectedPost = useSelector(selectedPostSelector);

  const goToEditPostForm = () => {
    navigation.navigate("EditPostForm");
  };

  const onClosePressed = () => {
    navigation.goBack();
  };

  if (!selectedPost) {
    return <Text>Post not found!</Text>;
  }

  const goToEditPostForm = (post: any) => {
    navigation.navigate("EditPostForm", { postId: post.id });
  };

  const onClosePressed = () => {
    navigation.goBack();
  };

  return (
    <View style={SinglePostPageStyle.main}>
      <View style={SinglePostPageStyle.mainTitle}>
        <View style={SinglePostPageStyle.authorField}>
          <AuthorPost userId={post.userId} />
          <TouchableOpacity
            onPress={() => goToEditPostForm(post)}
            style={SinglePostPageStyle.editBtn}
          >
            <Text style={SinglePostPageStyle.fontButton}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={PostsListStyle.postTitle}>{post.title}</Text>
        <Text style={PostsListStyle.postContent}>{post.content}</Text>
        <View style={{ flexDirection: "row" }}>
          <ReactionButtons post={post} />
          <View style={SinglePostPageStyle.backBtn}>
            <TouchableOpacity onPress={onClosePressed}>
              <Text style={SinglePostPageStyle.fontButton}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
