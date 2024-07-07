import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileImage from "../../../assets/Rectangle.png";
import { Image } from "expo-image";
import Settings from "../../../assets/icons/Profile_page/settings.svg";
import Chevron from "../../../assets/icons/Profile_page/chevron.svg";
import Help from "../../../assets/icons/Profile_page/help.svg";
import Lock from "../../../assets/icons/Profile_page/lock.svg";
import Logout from "../../../assets/icons/Profile_page/logout.svg";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStackParamList";
type ProfileScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Profile"
>;

export const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleClick = (route: keyof RootStackParamList) => () => {
    navigation.navigate(route);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <Image source={ProfileImage} style={styles.image} />
            <View style={styles.dot} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Tom Hillson</Text>
              <Text style={styles.subTitle}>Tomhill@mail.com</Text>
            </View>
          </View>

          <View style={styles.links}>
            <TouchableOpacity
              style={styles.settingsContainer}
              onPress={handleClick("Preferences")}
            >
              <Settings width={28} height={28} />
              <Text style={styles.text}>Prefences</Text>
              <View style={styles.redirectionContainer}>
                <Chevron width={12} height={12} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsContainerSecurity}>
              <Lock width={28} height={28} />
              <Text style={styles.text}>Account Security</Text>
              <View style={styles.redirectionContainer}>
                <Chevron width={12} height={12} />
              </View>
              <View style={styles.progressBarContainer}>
                <ProgressBar
                  progress={0.6}
                  color={MD3Colors.neutral0}
                  style={styles.progressBar}
                />
                <Text style={styles.textSecurity}>Excellent</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsContainer}>
              <Help width={28} height={28} />
              <Text style={styles.text}>Customer Support</Text>
              <View style={styles.redirectionContainer}>
                <Chevron width={12} height={12} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingsContainer}>
              <Logout width={28} height={28} />
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
