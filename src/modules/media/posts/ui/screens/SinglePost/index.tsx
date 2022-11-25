import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/index";
import { SinglePostPageStyle } from "../SinglePost/styles";
import { PostsListStyle } from "../PostsList/styles";
import { selectPostById } from "../../../store";
import { ReactionButtons } from "../../components/ReactionButtons";
import { SinglePostProps } from "../../../../../navigation/types";
import { useAppSelector } from "../../../../../hook";

export default function SinglePostPage({ route, navigation }: SinglePostProps) {
  const postId = route.params.postId;
  const post: any = useAppSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <View>
        <Text>Post not found!</Text>
      </View>
    );
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
