import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Ensure the API key is stored securely in environment variables
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain", // Ensure this is spelled correctly
};

// Function to generate AI content
export const generateAIContent = async (formData: FormData) => {
  try {
    // Initialize chat session with appropriate settings
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `give me YouTube video description with title: ${formData.get(
                "title"
              )}, description: ${formData.get("description")} `,
            },
          ],
        },
      ],
    });

    // Send a message to the chat session
    const result = await chatSession.sendMessage(
      "Generate content for video description"
    );

    // Extract and display the response
    const responseText = await result.response.text();

    return responseText;
  } catch (error) {
    console.error("Error generating AI content:", error);
    return "Error occurred";
  }
};
