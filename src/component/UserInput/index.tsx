import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Send from "../../../assets/icons/Health_bot_page/send.svg";
import { styles } from "./style";

interface UserInputProps {
  onSendMessage: (message: string) => void;
}

const UserInput: React.FC<UserInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, Platform.OS === "ios" && styles.inputIOS]}
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="Send a message"
          returnKeyType="send"
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity
          onPress={sendMessage}
          style={styles.sendIconContainer}
        >
          <Send width={24} height={24} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserInput;
