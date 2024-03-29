import React, {useState} from 'react'
import {
    Alert,
    Button,
    FlatList,
    Keyboard,
    Modal,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {AddPostStyle} from "../../styles/AddPostStyle";
import {useDispatch, useSelector} from "react-redux";
import { PostAdded } from "./PostsSlice";
import Dropdown from "../../components/Dropdown";

export default function AddPostForm({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState(null)

    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const getUserId = (value) => {
        // забирает из Dropdown userId
        setUserId(value)
    }

    const onSavePostPressed = () => {
        if (canSave) {
            dispatch(PostAdded(title, content, userId))
            setTitle('')
            setContent('')
            onClosePressed()
        } else {
            alert('Enter the title, content & select user')
        }
    }

    const onClosePressed = () => {navigation.goBack()}

    return(
        <View style={AddPostStyle.main}>
            <View style={AddPostStyle.background}>
                <View style={AddPostStyle.mainInput}>
                    <Text style={AddPostStyle.textEnter}>Enter title:</Text>
                    <TextInput
                        style={AddPostStyle.addPostTitle}
                        keyboardAppearance={'dark'}
                        multiline={true}
                        selectionColor={'silver'}
                        onBlur={() => Keyboard.dismiss()}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={AddPostStyle.textEnter}>Enter content:</Text>
                    <TextInput
                        style={AddPostStyle.addPostContent}
                        keyboardAppearance={'dark'}
                        multiline={true}
                        selectionColor={'silver'}
                        value={content}
                        onChangeText={setContent}
                    />
                </View>
                <View style={AddPostStyle.line}></View>
                <View>
                    <Dropdown data={users} getUserId={getUserId}/>
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

    );
}
