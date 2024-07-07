import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    paddingHorizontal: 36,
    flexDirection: "column",
    paddingTop: Platform.OS === "ios" ? 0 : 72,
    gap: 50,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 26,
  },
  textContainer: {},
  title: {
    fontSize: 19,
    color: "#212121",
    fontWeight: "bold",
    fontFamily: "Poppins_Regular",
  },
  subTitle: {
    fontSize: 14,
    color: "#323142",
    fontFamily: "Poppins_500Regular",
    opacity: 0.5,
  },
});
