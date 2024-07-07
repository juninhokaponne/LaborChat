import { OPEN_AI_KEY } from "@env";
const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";

export async function sendMessageToOpenAI(message: string): Promise<string> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPEN_AI_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ role: "system", content: message }],
        model: "gpt-3.5-turbo-1106",
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Failed to send message to OpenAI: ${errorResponse.error.message}`
      );
    }

    const data = await response.json();
    const completion =
      data.choices[0]?.message?.content || "No response from OpenAI";
    return completion.trim();
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    throw error;
  }
}
