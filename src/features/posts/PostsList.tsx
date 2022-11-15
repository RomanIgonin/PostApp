// Визуальная часть пост листа
import React, {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import AddPostForm from "./AddPostForm";
import AxiosGetPosts from "../../api/AxiosGetPosts"
import { AuthorPost } from "../users/AuthorPost";
import { AddPostStyle } from "../../styles/AddPostStyle";
import { PostStyle } from "../../styles/PostStyle";
import {useEffect, useState} from "react";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import {fetchPosts, selectAllPosts} from "./PostsSlice"

export default function PostsList({ navigation }) {
    const posts = useSelector(selectAllPosts)
    // const [viewAddPostForm, setViewAddPostForm] = useState(false)
    // const posts = AxiosGetPosts()

    const postStatus = useSelector(state => state.posts.status)

    const dispatch = useDispatch()

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const onPostPressed = (item) => {
        navigation.navigate('SinglePostPage', { id: item.id, title: item.title})
    }

    const onAddPostPressed = () => {
        navigation.navigate('AddPostForm')
    }

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const keyExtractor = (item) => item.id;

    const renderItem = ({item}) => {
        return (
            <View style={PostStyle.mainTitle}>
                <Pressable onPress={() => onPostPressed(item)}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <AuthorPost postId={item.userId} />
                        <TimeAgo timestamp={item.date}/>
                    </View>
                    <Text style={PostStyle.postTitle}>{item.title}</Text>
                    <Text style={PostStyle.postContent}>{item.content}</Text>
                    <ReactionButtons post={item}/>
                </Pressable>
            </View>
        );
    }

    const AddPostButton = () => {
        return(
            <View style={AddPostStyle.addPostButton}>
                <Pressable onPress={onAddPostPressed}>
                    <Text style={AddPostStyle.fontButton}>Add Post</Text>
                </Pressable>
            </View>
        );
    }

    return(
        <View style={PostStyle.main}>
            <AddPostButton />
            <FlatList
                data={orderedPosts}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
}
