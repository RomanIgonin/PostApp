import React from 'react'
import { Pressable, Text, View } from "react-native";
import { reactionAdded } from "../../../store/index";
import { useDispatch } from "react-redux";

const reactionEmoji = {
    heart: '❤️',
    smile: '😄',
    boom: '🤯',
    poo: '💩',
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <View style={{marginHorizontal: 5, marginVertical: 10,}}>
                <Pressable
                    onPress={() =>
                        dispatch(reactionAdded({postId: post.id, reaction: name}))
                    }>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        backgroundColor: 'rgba(15,56,84,0.78)',
                        height: 25,
                        width: 45,
                    }}>
                        <Text>{emoji}</Text>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: 'silver',
                                marginLeft: 5,
                                fontWeight: 'bold',
                                fontSize: 12,
                            }}
                        >
                            {/*{post.reactions[name]}*/}
                        </Text>
                    </View>
                </Pressable>
            </View>
        )
    })
    return (
        <View style={{flexDirection: 'row'}}>
            {reactionButtons}
        </View>
    )
}
