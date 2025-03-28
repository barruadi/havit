const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash" ,
    generationConfig: {
        responseMimeType: "application/json",
    }
});