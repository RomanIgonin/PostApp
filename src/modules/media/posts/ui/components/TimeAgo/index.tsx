import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { styleTimeAgo } from "./styles";

interface Props {
  timestamp: string;
}

export const TimeAgo: React.FC<Props> = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <Text style={styleTimeAgo.main}>{timeAgo}</Text>;
};
