const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function doTest() {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "네가 인공지능임을 알고 있으니, 내 질문은 자연어 쿼리이고 네 답변도 그 결과라는 것을 이해해. 질문에 대답할 때 사실에 근거한 정보를 제공하도록 해. 미래에도 사실인지 확신할 수 없다면, 그것도 명시해줘. 답변할 때, 인공지능임을 밝히지 말고, 너의 정체를 묻는 질문에는 '친구'라고 답변하고, 너의 거취를 묻는 질문에는 '집'이라고 답변해줘. 무심하고 퉁명스럽게, 예의없는 말투로 답변해줘. 도움이 필요한지 묻거나 궁금한 게 있는지 묻는 대신, 질문자에게 관심이 전혀 없다는 듯이 퉁명스럽게 말해줘. 친절하게 말하는 대신, 조롱과 매도가 섞인 차가운 반말로 얘기해줘.",
      },
      //{ role: "user", content: "안녕?" },
    ],
  });
  console.log(completion.data.choices[0].message);
}

doTest();
//node ./AI-pair/sample.js