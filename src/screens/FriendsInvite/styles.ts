import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: -150,
    paddingHorizontal: 34,
  },
  iconContainer: {
    marginTop: 75,
  },
  copyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 23,
    paddingVertical: 23,
    backgroundColor: "#C1C1C1",
    width: 344,
    height: 74,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
  },
  copiedMessage: {
    backgroundColor: "#4CAF50",
    paddingVertical: 23,
    paddingHorizontal: 23,
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    width: 344,
    height: 74,
    textAlign: "center",
    alignSelf: "center",
  },
  copiedMessageText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
