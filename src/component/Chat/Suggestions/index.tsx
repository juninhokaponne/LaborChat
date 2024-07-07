import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface ChatSuggestionsProps {
  suggestions: string[];
  onSuggestionPress: (question: string) => void;
}

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({
  suggestions,
  onSuggestionPress,
}) => {
  return (
    <View style={styles.container}>
      {suggestions.map((question, index) => (
        <TouchableOpacity
          key={index}
          style={styles.suggestionButton}
          onPress={() => onSuggestionPress(question)}
        >
          <Text>{question}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChatSuggestions;
