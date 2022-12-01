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
import { EditPostFormStyle } from "./styles";
import { useAppDispatch } from "../../../../../hook";
import { EditPostProps } from "../../../../../navigation/types";
import { useSelector } from "react-redux";
import { selectedPostSelector } from "../../../store/selectors";
import { patchPost } from "../../../store/action";

export default function EditPostForm({ navigation }: EditPostProps) {
  const selectedPost = useSelector(selectedPostSelector);
  if (selectedPost === null) return <Text>Error 3, post not found</Text>;

  const [title, setTitle] = useState(selectedPost.title);
  const [content, setContent] = useState(selectedPost.content);

  const dispatch = useAppDispatch();

  const onSavePostPressed = () => {
    if (title && content) {
      const editPost = { postId: selectedPost.id, title, content };
      dispatch(patchPost(editPost));
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

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
