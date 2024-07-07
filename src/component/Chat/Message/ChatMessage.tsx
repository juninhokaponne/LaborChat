import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Edit from "../../../../assets/icons/Health_bot_page/edit.svg";
import Copy from "../../../../assets/icons/Health_bot_page/copy.svg";
import Share from "../../../../assets/icons/Health_bot_page/share.svg";
import { styles } from "./style";

interface ChatMessageProps {
  message: {
    text: string;
  };
  botMessage?: {
    text: string;
  } | null;
  isBotMessage: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  botMessage,
  isBotMessage,
}) => {
  return (
    <View
      style={[
        styles.container,
        isBotMessage ? styles.botContainer : styles.userContainer,
      ]}
    >
      <Image
        source={
          isBotMessage
            ? require("../../../../assets/botimage.png")
            : require("../../../../assets/Rectangle.png")
        }
        style={styles.avatar}
      />
      <View
        style={
          isBotMessage ? styles.botMessageContent : styles.userMessageContent
        }
      >
        {isBotMessage ? (
          <>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Copy width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Share width={20} height={20} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                width: 311,
                marginTop: 30,
                marginLeft: -50,
              }}
            >
              <Text style={styles.messageText}>{botMessage?.text}</Text>
            </View>
          </>
        ) : (
          <View style={styles.iconContainerUser}>
            <TouchableOpacity>
              <View>
                <Edit width={20} height={20} />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ChatMessage;
