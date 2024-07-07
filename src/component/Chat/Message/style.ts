import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 8,
    alignItems: "flex-start",
    paddingHorizontal: 35,
  },
  botContainer: {
    backgroundColor: "#F7F7F8",
    paddingLeft: 35,
    paddingRight: 48,
    paddingTop: 13,
    paddingBottom: 34,
  },
  userContainer: {
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 8,
    backgroundColor: "#000",
  },
  botMessageContent: {
    flex: 1,
    borderRadius: 6,
    justifyContent: "flex-start",
  },
  userMessageContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 8,
  },
  iconContainerUser: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "100%",
  },
  messageText: {
    fontSize: 16,
    flex: 1,
  },
});
