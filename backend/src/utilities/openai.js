const OpenAI = require("openai");

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-mini";

const askGPT = async (user) => {
  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    temperature: 1.0,
    top_p: 1.0,
    model: model,
    messages: [{ role: "user", content: user }],
  });

  return response.choices[0].message.content;
};

module.exports = { askGPT };
