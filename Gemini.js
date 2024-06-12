import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "";
// Reminder: This should only be for local testing

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
const r =await model.generateContent("Top 10 Programming Languages");
console.log(r.response.txt());