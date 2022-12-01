import React from "react";
import { Pressable, Text, View } from "react-native";
import { ReactionButtonStyle } from "./styles";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../../../hook";
import { patchReaction } from "../../../store/action";

interface Props {
  post: any;
}

const reactionEmoji = {
  heart: "❤️",
  smile: "😄",
  boom: "🤯",
  poo: "💩",
};

export const ReactionButtons: React.FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();

  if (post === undefined) {
    return <Text>Error, in ReactionButtons post undefined</Text>;
  }

  const onPress = (name: string) => {
    post.reactions[name]++;
    const newReaction = {
      postId: post.id,
      reactionsNew: post.reactions,
    };
    dispatch(patchReaction(newReaction));
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <View key={nanoid()} style={ReactionButtonStyle.oneButton}>
        <Pressable onPress={() => onPress(name)}>
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
