import { Pressable, StatusBar, TextInput, View, Text } from "react-native";
import User from "../../../assets/icons/UserIcon.svg";
import Email from "../../../assets/icons/email.svg";
import Password from "../../../assets/icons/password.svg";
import Edit from "../../../assets/icons/Health_bot_page/edit.svg";
import { styles } from "./styles";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export const InformationEdit = () => {
  const handleClick = () => {
    console.log("Salvo com sucesso");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <View style={styles.itemContainer}>
            <User width={18} height={18} />
            <TextInput
              placeholder="FULL NAME"
              style={styles.inputText}
            ></TextInput>
            <View style={styles.iconContainer}>
              <Edit width={24} height={24} />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Email width={18} height={18} />
            <TextInput placeholder="EMAIL" style={styles.inputText}></TextInput>
            <View style={styles.iconContainer}>
              <Edit width={24} height={24} />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <Password width={18} height={18} />
            <TextInput
              placeholder="PASSWORD"
              style={styles.inputText}
            ></TextInput>
            <View style={styles.iconContainer}>
              <Edit width={24} height={24} />
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleClick}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "bold",
                  letterSpacing: 0.25,
                  color: "white",
                }}
              >
                Save changes
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
