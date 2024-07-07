import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    marginTop: 53,
    marginBottom: 51,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#757474",
  },
  questionsContainer: {
    flexDirection: "column",
    gap: 11,
    marginBottom: 96,
  },
  content: {
    backgroundColor: "#F7F7F8",
    borderRadius: 14,
    padding: 18,
  },
  sendMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    backgroundColor: "#F7F7F8",
    borderRadius: 14,
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: "100%",
  },
  scrollView: {
    backgroundColor: "#FFF",
  },
});
