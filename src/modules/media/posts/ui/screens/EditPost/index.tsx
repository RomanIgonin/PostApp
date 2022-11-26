import * as React from "react";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { useState } from "react";
import { AddPostStyle } from "../AddPost/styles";
import { PostAdded, postUpdated, selectPostById } from "../../../store/index";
import { EditPostFormStyle } from "../EditPost/styles";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import { EditPostProps } from "../../../../../navigation/types";

export default function EditPostForm({ route, navigation }: EditPostProps) {
  const postId = route.params.postId;
  const post: any = useAppSelector((state) => selectPostById(state, postId));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useAppDispatch();

  const onSavePostPressed = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          postId,
          title,
          content,
        })
      );
      navigation.goBack();
    } else {
      Alert.alert("Enter the title & content");
    }
  };

  const onClosePressed = () => {
    navigation.goBack();
  };

  return (
    <View style={EditPostFormStyle.main}>
      <View style={EditPostFormStyle.background}>
        <View style={EditPostFormStyle.mainInput}>
          <Text style={EditPostFormStyle.textEnter}>Enter title:</Text>
          <TextInput
            style={AddPostStyle.addPostTitle}
            keyboardAppearance={"dark"}
            multiline={true}
            selectionColor={"silver"}
            onBlur={() => Keyboard.dismiss()}
            value={title}
            onChangeText={setTitle}
          />
          <Text style={EditPostFormStyle.textEnter}>Enter content:</Text>
          <TextInput
            style={EditPostFormStyle.addPostContent}
            keyboardAppearance={"dark"}
            multiline={true}
            selectionColor={"silver"}
            value={content}
            onChangeText={setContent}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={EditPostFormStyle.closeBtn}>
            <TouchableOpacity onPress={onClosePressed}>
              <Text style={AddPostStyle.fontButton}>Close</Text>
            </TouchableOpacity>
          </View>
          <View style={EditPostFormStyle.saveBtn}>
            <TouchableOpacity onPress={onSavePostPressed}>
              <Text style={AddPostStyle.fontButton}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
