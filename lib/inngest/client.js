import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "skillience",
  name: "Skillience",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
