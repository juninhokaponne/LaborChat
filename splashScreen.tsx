import { View, StyleSheet, Image, Text } from "react-native";
import Icon from "./assets/splash2.png";

export const SplashScreenHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={Icon} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.bottomText}>BrainBox</Text>
        <Text style={styles.bottomSubtText}>Version 1.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  bottomSubtText: {
    fontSize: 12,
    color: "#757171",
  },
});
