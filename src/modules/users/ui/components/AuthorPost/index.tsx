import React from "react";
import { Text } from "react-native";
import { AuthorPostStyle } from "./styles";
import { useSelector } from "react-redux";
import { usersSelector } from "../../../store/selectors";

interface Props {
  userId: number;
}

export const AuthorPost: React.FC<Props> = ({ userId }) => {
  const users = useSelector(usersSelector);
  const user = users.find((item) => item.userId === userId);
  if (user === undefined) return <Text>Error, user is undefined</Text>;

  return <Text style={AuthorPostStyle.main}>{user.name}</Text>;
};
