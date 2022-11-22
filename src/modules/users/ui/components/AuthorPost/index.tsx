import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "react-native";
import { usersSelector } from "../../../store/selectors";
import { selectPostById } from "../../../../media/posts/store";
import { loadUsers } from "../../../store/actions";
import { selectUserById } from "../../../store";

// interface props {
//   userId: Number;
// }

export const AuthorPost = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  // const dispatch = useDispatch();
  // const isUsersLoading = useSelector((state) => state.users.isUsersLoading);

  // useEffect(() => {
  //   if (isUsersLoading === false) {
  //     dispatch(loadUsers());
  //   }
  // }, [isUsersLoading, dispatch]);

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
      {user.name}
    </Text>
  );
};
