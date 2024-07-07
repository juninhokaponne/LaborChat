import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: Platform.OS === "android" ? 0 : 10,
  },
  container: {
    paddingLeft: 33,
    paddingRight: 37,
    paddingTop: 0,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 105,
    height: 112,
    borderRadius: 60,
    marginTop: Platform.OS === "ios" ? 0 : 50,
    objectFit: "cover",
    alignSelf: "center",
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#141718",
    position: "absolute",
    top: Platform.OS === "ios" ? 80 : 125,
    left: 190,
    borderWidth: 5,
    borderColor: "#fff",
  },
  titleContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  title: {
    fontSize: 27,
    color: "#212121",
    fontWeight: "bold",
    fontFamily: "Poppins_Regular",
  },
  subTitle: {
    fontSize: 14,
    color: "#323142",
    fontFamily: "Poppins_500Regular",
    opacity: 0.5,
    fontWeight: "500",
  },
  links: {
    marginTop: 50,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    gap: 32,
  },
  settingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    width: "100%",
  },
  text: {
    fontSize: 18,
    color: "#212121",
    fontFamily: "Poppins_Regular",
    fontWeight: "500",
  },
  redirectionContainer: {
    position: "absolute",
    right: 0,
  },
  settingsContainerSecurity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    width: "100%",
    marginBottom: 55,
  },
  progressBarContainer: {
    position: "absolute",
    left: 55,
    top: 60,
  },
  textSecurity: {
    fontSize: 16,
    color: "#323142",
    fontFamily: "Poppins_Regular",
    opacity: 0.5,
  },
  progressBar: {
    width: 211,
    height: 8,
    borderRadius: 5,
    marginTop: -20,
  },
});
