import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Image } from "expo-image";
import ProfileImage from "../../../assets/Rectangle.png";
import ArrowRigth from "../../../assets/icons/arrow-right.svg";
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import LineSeparator from "../../../assets/icons/separator.svg";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import { Home } from "../Home/";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const OnBoarding = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FA" />
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}
        autoplay={true}
      >
        <View style={styles.slide}>
          <Image source={ProfileImage} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={ProfileImage} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={ProfileImage} style={styles.image} />
        </View>
      </Swiper>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Unlock the Power{"\n"}Of Future AI</Text>
        <Text style={styles.subtitleText}>
          Chat with the smartest AI Future
        </Text>
        <Text style={styles.subtitleText}>Experience power of AI with us</Text>

        <View style={styles.arrowsContainer}>
          <ArrowLeft width={24} height={24} disabled />
          <LineSeparator width={2} height={24} style={styles.lineSeparator} />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <ArrowRigth
              width={24}
              height={24}
              onPress={handlePress}
              style={styles.arrowRigth}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
