import { StyleSheet } from "react-native";

const shadowStyle = {
  shadowColor: "#D3D1D8",
  shadowOffset: { width: 5.92, height: 11.84 },
  shadowOpacity: 0.3,
  shadowRadius: 23.68,
};

export const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 35,
    height: 60,
    backgroundColor: "#FFF",
  },
  backButton: {
    width: 45,
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
    ...shadowStyle,
  },
  backButtonIcon: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCFD",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rightIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});
