import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import { reactionAdded } from "../../../store/index";
import { useDispatch } from "react-redux";
import { ReactionButtonStyle } from "./styles";
import { nanoid } from "@reduxjs/toolkit";

const reactionEmoji = {
  heart: "❤️",
  smile: "😄",
  boom: "🤯",
  poo: "💩",
};

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const postId = post.id;
    // console.log(name);
    return (
      <View key={nanoid()} style={ReactionButtonStyle.oneButton}>
        <Pressable
          onPress={
            () => dispatch(reactionAdded({ postId: postId, reaction: name }))
            // dispatch(reactionAdded({ postId, name }))
          }
        >
          <View style={ReactionButtonStyle.main}>
            <Text>{emoji}</Text>
            <Text style={ReactionButtonStyle.text}>{post.reactions[name]}</Text>
            {/*<Text style={ReactionButtonStyle.text}>{countReactions}</Text>*/}
          </View>
        </Pressable>
      </View>
    );
  });

  return <View style={{ flexDirection: "row" }}>{reactionButtons}</View>;
};
