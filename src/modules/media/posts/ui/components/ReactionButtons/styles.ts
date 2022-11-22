import { StyleSheet } from "react-native";

export const ReactionButtonStyle = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "rgba(15,56,84,0.78)",
    height: 25,
    width: 45,
  },
  text: {
    alignSelf: "center",
    color: "silver",
    marginLeft: 5,
    fontWeight: "bold",
    fontSize: 12,
  },
  oneButton: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
});
