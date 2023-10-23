import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return(
        <Text style={styleTimeAgo.main}>{timeAgo}</Text>
    )
}

export const styleTimeAgo = StyleSheet.create({
    main: {
        fontSize: 12,
        color: 'silver',
        marginRight: 10,
        alignSelf: 'center',
        fontStyle: 'italic'
    }
})