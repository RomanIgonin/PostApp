// Визуальная часть пост листа
import React, {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import AddPostForm from "../AddPost/index";
import { AuthorPost } from "../../../../../users/ui/components/AuthorPost/index";
import { AddPostStyle } from "../AddPost/styles";
import { PostsListStyle } from "./styles";
import {useEffect, useState} from "react";
import {TimeAgo} from "../../components/TimeAgo/index";
import {ReactionButtons} from "../../components/ReactionButtons/index";
import {selectAllPosts, selectPostsLoad} from "../../../store/index"
import {loadPosts} from "../../../store/action";

export default function PostsList({ navigation }) {
    const posts = useSelector(selectAllPosts)
    const isPostsLoading = useSelector(selectPostsLoad)
    const dispatch = useDispatch()

    useEffect(() => {
        // if (isPostsLoading === false) {
            dispatch(loadPosts())
        // }
    }, [])
    // }, [isPostsLoading, dispatch])

    const onPostPressed = (item) => {
        navigation.navigate('SinglePostPage', { id: item.id, title: item.title})
    }

    const onAddPostPressed = () => {
        navigation.navigate('AddPostForm')
    }

    // Sort posts in reverse chronological order by datetime string
    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const keyExtractor = (item) => item.id;

    const renderItem = ({item}) => {
        return (
            <View style={PostsListStyle.mainTitle}>
                <Pressable onPress={() => onPostPressed(item)}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        {/*<AuthorPost postId={item.userId} />*/}
                        {/*<TimeAgo timestamp={item.date}/>*/}
                    </View>
                    <Text style={PostsListStyle.postTitle}>{item.title}</Text>
                    <Text style={PostsListStyle.postContent}>{item.body}</Text>
                    {/*<Text style={PostsListStyle.postContent}>{item.content}</Text>*/}
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
        <View style={PostsListStyle.main}>
            <AddPostButton />
            <FlatList
                // data={orderedPosts}
                data={posts}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
        </View>
    );
}
