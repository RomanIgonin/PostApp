import React from "react";
import { Text } from "react-native";
import { selectUserById } from "../../../store";
import { useAppSelector } from "../../../../hook";
import { AuthorPostStyle } from "./styles";

interface Props {
  userId: string;
}

export const AuthorPost: React.FC<Props> = ({ userId }) => {
  const user = useAppSelector((state) => selectUserById(state, userId));
  // console.log(user);
  return <Text style={AuthorPostStyle.main}>{user.name}</Text>;
};
