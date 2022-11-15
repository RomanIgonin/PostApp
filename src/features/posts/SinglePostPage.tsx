import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import {Button, Text, TouchableOpacity, View} from "react-native";
import {AuthorPost} from "../users/AuthorPost";
import { AntDesign } from '@expo/vector-icons';
import { SinglePostPageStyle } from "../../styles/SinglePostPageStyle";

import {PostStyle} from "../../styles/PostStyle";
import {EditPostFormStyle} from "../../styles/EditPostFormStyle";
import {AddPostStyle} from "../../styles/AddPostStyle";

export default function SinglePostPage({route, navigation, props}) {
    const id = route.params.id

    const post = useSelector(state =>
        state.posts.find(post =>
            post.id === id
        )
    )

    if(!post) {
        return(
            <View>
                <Text>Post not found!</Text>
            </View>
        )
    }

    const goToEditPostForm = (post) => {
        navigation.navigate('EditPostForm', {id: post.id})
    }

    const onClosePressed = () => {navigation.goBack()}

    return(
        <View style={SinglePostPageStyle.main}>
            <View style={SinglePostPageStyle.mainTitle}>
                <View style={SinglePostPageStyle.authorField}>
                    <AuthorPost postId={post.userId} />
                    <AntDesign
                        name="edit"
                        size={23}
                        color="silver"
                        style={SinglePostPageStyle.editBtn}
                        onPress={() => goToEditPostForm(post)}
                    />
                </View>
                <Text style={PostStyle.postTitle}>{post.title}</Text>
                <Text style={PostStyle.postContent}>{post.content}</Text>
                <View style={SinglePostPageStyle.backBtn}>
                    <TouchableOpacity onPress={onClosePressed}>
                        <Text style={AddPostStyle.fontButton}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
