import React from "react";
import { useSelector } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/index";
import { AntDesign } from "@expo/vector-icons";
import { SinglePostPageStyle } from "../SinglePost/styles";
import { PostsListStyle } from "../PostsList/styles";
import { AddPostStyle } from "../AddPost/styles";
import { selectPostById } from "../../../store";
import { ReactionButtons } from "../../components/ReactionButtons";

export default function SinglePostPage({ route, navigation }) {
  const postId = route.params.postId;
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <View>
        <Text>Post not found!</Text>
      </View>
    );
  }

  const goToEditPostForm = (post) => {
    navigation.navigate("EditPostForm", { id: post.id });
  };

  const onClosePressed = () => {
    navigation.goBack();
  };

  return (
    <View style={SinglePostPageStyle.main}>
      <View style={SinglePostPageStyle.mainTitle}>
        <View style={SinglePostPageStyle.authorField}>
          <AuthorPost userId={post.userId} />

          <TouchableOpacity onPress={() => goToEditPostForm(post)}>
            <Text style={SinglePostPageStyle.editBtn}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={PostsListStyle.postTitle}>{post.title}</Text>
        <Text style={PostsListStyle.postContent}>{post.content}</Text>
        <View>
          <ReactionButtons post={post} />
          <View style={SinglePostPageStyle.backBtn}>
            <TouchableOpacity onPress={onClosePressed}>
              <Text style={AddPostStyle.fontButton}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
