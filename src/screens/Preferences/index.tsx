import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";
import User from "../../../assets/icons/Preference_page/userIconPreference.svg";
import Eye from "../../../assets/icons/Preference_page/eyes.svg";
import Payment from "../../../assets/icons/Preference_page/payment.svg";
import Edit from "../../../assets/icons/Preference_page/edit.svg";
import Config from "../../../assets/icons/Preference_page/config.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootStackParamList";
type ProfileScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Profile"
>;

export const Preferences = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleClick = (route: keyof RootStackParamList) => () => {
    navigation.navigate(route);
  };

  const handlePop = () => {
    console.log("Alterou a cor");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.content}
            onPress={handleClick("InformationEdit")}
          >
            <User width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Account Information</Text>
              <Text style={styles.subTitle}>
                Change your Account information
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.content}
            onPress={handleClick("InformationEdit")}
          >
            <Eye width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Password</Text>
              <Text style={styles.subTitle}>Change your password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content}>
            <Payment width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Payment Methods</Text>
              <Text style={styles.subTitle}>Add Your Credit / Credit Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.content}
            onPress={handleClick("FriendsInvite")}
          >
            <Edit width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Invite Your Friends</Text>
              <Text style={styles.subTitle}>Get $3 For Each Invitation!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.content} onPress={handlePop}>
            <Config width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Theme Colour</Text>
              <Text style={styles.subTitle}>Change Your Theme Colour</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
