import React from 'react'
import {useSelector} from "react-redux";
import {Text} from "react-native";

export const AuthorPost = ({ postId }) => {
    const user = useSelector(state =>
        state.users.find(user =>
            user.userId === postId
        )
    )
    return(
        <Text style={{
            fontWeight: 'bold',
            marginLeft: 10,
            marginVertical: 10,
            color: '#2294b7'}}>{user.name}</Text>
    )
}
