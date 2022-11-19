import React from "react";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import { usersSelector } from "../../../store/selectors";

export const AuthorPost = ({ postId }) => {
  const users = useSelector(usersSelector);

  console.log(users); //массив из стейта редакс

  return (
    <Text
      style={{
        fontWeight: "bold",
        marginLeft: 10,
        marginVertical: 10,
        color: "#2294b7",
      }}
      //Попробуй использовать emotion-js для стилей
    >
      {users.name}
    </Text>
  );
};
