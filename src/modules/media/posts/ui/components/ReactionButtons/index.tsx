import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import { reactionAdded } from "../../../store/index";
import { useDispatch } from "react-redux";
import { ReactionButtonStyle } from "./styles";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../../hook";

interface Props {
  post: object;
}

const reactionEmoji = {
  heart: "❤️",
  smile: "😄",
  boom: "🤯",
  poo: "💩",
};

export const ReactionButtons: React.FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <View key={nanoid()} style={ReactionButtonStyle.oneButton}>
        <Pressable
          onPress={() => {
            dispatch(reactionAdded({ postId: post.id, reaction: name }));
          }}
        >
          <View style={ReactionButtonStyle.main}>
            <Text>{emoji}</Text>
            <Text style={ReactionButtonStyle.text}>{post.reactions[name]}</Text>
          </View>
        </Pressable>
      </View>
    );
  });

  return <View style={ReactionButtonStyle.commonField}>{reactionButtons}</View>;
};
