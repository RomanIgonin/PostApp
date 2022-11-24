import { StyleSheet } from "react-native";

export const SinglePostPageStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000a15",
  },
  mainTitle: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: "rgba(10,76,100,0.75)",
    borderRadius: 10,
    backgroundColor: "rgba(0,43,58,0.75)",
    color: "silver",
  },
  authorField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editBtn: {
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(53,143,175,0.75)",
    backgroundColor: "rgba(10,76,100,0.75)",
    padding: 5,
  },
  backBtn: {
    alignSelf: "flex-end",
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "rgba(53,143,175,0.75)",
    backgroundColor: "rgba(10,76,100,0.75)",
    marginLeft: 50,
    marginBottom: 10,
    marginTop: 5,
  },
  fontButton: {
    color: "silver",
    fontWeight: "bold",
  },
});
