import * as React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Button, Keyboard, Text, TextInput, TouchableOpacity, View, Alert} from "react-native";
import {useState} from "react";
import {AddPostStyle} from "../../styles/AddPostStyle";
import {PostAdded, PostUpdated, selectPostById} from "./PostsSlice";
import {EditPostFormStyle} from "../../styles/EditPostFormStyle";

export default function EditPostForm({ route, navigation }) {
    const postId = route.params.id
    const post = useSelector(state => selectPostById(state, postId))

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useDispatch()

    const onEditPostPressed = () => {
        if (title && content) {
            dispatch(
                PostUpdated({
                    postId,
                    title,
                    content
                })
            )
            navigation.goBack()
        } else {
            Alert('Enter the title & content')
        }
    }

    const onClosePressed = () => {navigation.goBack()}

    return(
        <View style={EditPostFormStyle.main}>
            <View style={EditPostFormStyle.background}>
                <View style={EditPostFormStyle.mainInput}>
                    <Text style={EditPostFormStyle.textEnter}>Enter title:</Text>
                    <TextInput
                        style={AddPostStyle.addPostTitle}
                        keyboardAppearance={'dark'}
                        multiline={true}
                        selectionColor={'silver'}
                        onBlur={() => Keyboard.dismiss()}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={EditPostFormStyle.textEnter}>Enter content:</Text>
                    <TextInput
                        style={EditPostFormStyle.addPostContent}
                        keyboardAppearance={'dark'}
                        multiline={true}
                        selectionColor={'silver'}
                        value={content}
                        onChangeText={setContent}
                    />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={EditPostFormStyle.closeBtn}>
                        <TouchableOpacity onPress={onClosePressed}>
                            <Text style={AddPostStyle.fontButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={EditPostFormStyle.saveBtn}>
                        <TouchableOpacity onPress={onEditPostPressed}>
                            <Text style={AddPostStyle.fontButton}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
