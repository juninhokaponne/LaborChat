import React, { useState } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
import Invite from "../../../assets/icons/Invite_friends_page/Refer.svg";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";
import Copy from "../../../assets/icons/Invite_friends_page/copy.svg";

export const FriendsInvite = () => {
  const [copiedText, setCopiedText] = useState("BrainAiPartnerMR");
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(copiedText);
    setCopiedMessageVisible(true);

    // Animando a entrada do toast
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Ocultando o toast após 3 segundos
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCopiedMessageVisible(false);
      });
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Invite width={287} height={393} />
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
          <Text>{copiedText}</Text>
          <Copy width={20} height={20} />
        </TouchableOpacity>

        {copiedMessageVisible && (
          <Animated.View
            style={[
              styles.copiedMessage,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Text style={styles.copiedMessageText}>Copied to clipboard!</Text>
          </Animated.View>
        )}
      </View>
    </View>
  );
};
