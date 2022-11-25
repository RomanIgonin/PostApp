import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AddPostStyle } from "../AddPost/styles";
import { PostAdded } from "../../../store/index";
import { Dropdown } from "../../components/Dropdown/index";
import { AddPostProps } from "../../../../../navigation/types";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import { usersSelector } from "../../../../../users/store/selectors";

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function AddPostForm({ navigation }: AddPostProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(null);

  const users = useAppSelector(usersSelector);
  const dispatch = useAppDispatch();

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const getUserId = (value: any) => {
    // забирает из Dropdown юзера который постит
    setUserId(value);
  };

  const onSavePostPressed = () => {
    if (canSave) {
      dispatch(PostAdded(title, content, userId));
      setTitle("");
      setContent("");
      onClosePressed();
    } else {
      Alert.alert("Enter the title, content & select user");
    }
  };

  const onClosePressed = () => {
    navigation.goBack();
  };

  return (
    <DismissKeyboard>
      <View style={AddPostStyle.main}>
        <View style={AddPostStyle.background}>
          <View style={AddPostStyle.mainInput}>
            <Text style={AddPostStyle.textEnter}>Enter title:</Text>
            <TextInput
              style={AddPostStyle.addPostTitle}
              keyboardAppearance={"dark"}
              multiline={true}
              autoFocus={true}
              selectionColor={"silver"}
              returnKeyType={"done"}
              onSubmitEditing={Keyboard.dismiss}
              value={title}
              onChangeText={setTitle}
            />
            <Text style={AddPostStyle.textEnter}>Enter content:</Text>
            <TextInput
              style={AddPostStyle.addPostContent}
              keyboardAppearance={"dark"}
              multiline={true}
              selectionColor={"silver"}
              returnKeyType={"done"}
              onSubmitEditing={Keyboard.dismiss}
              value={content}
              onChangeText={setContent}
            />
          </View>
          <View style={AddPostStyle.line}></View>
          <View>
            <Dropdown data={users} getUserId={getUserId} />
          </View>
          <View style={AddPostStyle.bothBottom}>
            <View style={AddPostStyle.closeButton}>
              <TouchableOpacity onPress={onClosePressed}>
                <Text style={AddPostStyle.fontButton}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={AddPostStyle.postButton}>
              <TouchableOpacity onPress={onSavePostPressed}>
                <Text style={AddPostStyle.fontButton}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
}
