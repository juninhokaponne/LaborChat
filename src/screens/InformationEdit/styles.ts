import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flexDirection: "column",
    gap: 24,
    paddingLeft: 36,
    paddingRight: 26,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    fontFamily: "Poppins-Regular",
    paddingTop: Platform.OS === "ios" ? 0 : 122,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: 68,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingLeft: 22,
    paddingRight: 26,
    gap: 30,
  },
  inputText: {
    color: "#CBCBCB",
    fontSize: 15,
    textAlign: "left",
  },
  buttonContainer: {
    backgroundColor: "#000",
    width: "100%",
    borderRadius: 14,
    paddingVertical: 11,
  },
  iconContainer: {
    position: "absolute",
    right: 29,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});
