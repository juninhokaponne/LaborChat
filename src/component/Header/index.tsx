import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ArrowBack from "../../../assets/icons/arrow-back.svg";
import Dialog from "../../../assets/icons/Health_bot_page/dailog.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { StatusBar } from "react-native";

export const CustomHeader = ({ navigation, title }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <View style={styles.backButtonIcon}>
              <ArrowBack width={20} height={20} />
            </View>
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Profile");
            }}
            style={styles.rightIcon}
          >
            <Dialog width={20} height={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
