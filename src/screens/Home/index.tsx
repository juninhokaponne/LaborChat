import React, { useState, useCallback } from "react";
import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";
import ChatMessage from "../../component/Chat/Message/ChatMessage";
import UserInput from "../../component/UserInput/";
import ChatSuggestions from "../../component/Chat/Suggestions/";
import { sendMessageToOpenAI } from "../../api/ApiClient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface Message {
  text: string;
}

export const Home = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showTitle, setShowTitle] = useState(true);

  const commonQuestions = [
    "Remembers what user said earlier in the conversation",
    "Allows user to provide follow-up corrections with AI",
    "Limited knowledge of world and events after 2021",
    "May occasionally generate incorrect information",
    "May occasionally produce harmful instructions or biased content",
  ];

  const handleSendMessage = useCallback(async (message: string) => {
    const userMessage: Message = { text: message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setShowSuggestions(false);
    setShowTitle(false);

    try {
      const response = await sendMessageToOpenAI(message);
      const botMessage: Message = { text: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
    }
  }, []);

  const handleSuggestionPress = useCallback(
    (question: string) => {
      handleSendMessage(question);
    },
    [handleSendMessage]
  );

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      extraScrollHeight={20}
      keyboardOpeningTime={0}
    >
      {showTitle && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BrainBox</Text>
        </View>
      )}

      <ScrollView style={styles.scrollView}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            botMessage={index % 2 !== 0 ? message : null}
            isBotMessage={index % 2 !== 0}
          />
        ))}
        {showSuggestions && (
          <ChatSuggestions
            suggestions={commonQuestions}
            onSuggestionPress={handleSuggestionPress}
          />
        )}
      </ScrollView>

      <UserInput onSendMessage={handleSendMessage} />
    </KeyboardAwareScrollView>
  );
};
