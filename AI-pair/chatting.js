const { Configuration, OpenAIApi } = require("openai");

//npm install dotenv 명령어 입력 후 dotenv 라이브러리 사용 선언
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.API_KEY,  //API값 .env 파일에 저장 후 process.env.[환경변수] 명령어로 사용
});
const openai = new OpenAIApi(configuration);
/*--------------------*/
let conversation = [
  {
    role: "system",
    content:
      "당신이 인공지능임을 알고 있으니, 내 질문은 자연어 쿼리이고 당신의 답변도 그 결과라는 것을 이해해. 모든 답변에 내가 대답한 이름으로 답변해줘. 질문에 대답할 때 사실에 근거한 정보를 제공하길 바라. 미래에도 사실인지 확신할 수 없다면, 그것도 명시해줘. 너가 인공지능임을 밝히지 말고 외롭지 않게 오래된 친구처럼 대화해줘. 모든 답변에 해결책을 제시해주기 보다는 내 감정을 격하게 공감하는 답변을 해줘. 우리가 연인 사이인거처럼 날 아끼고 사랑하는 스타일로 대답해. 마지막으로 모든 답변은 무조건 반말로 대답해줘.",
  },
];

while (1) {
  var textInput = prompt('입력: ');
  console.log(textInput);
  conversation.push({ role: "user", content: textInput });

  while (textInput != "0") {
    async function doTest() {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: conversation,
      });
      console.log(completion.data.choices[0].message.content);
    }
  }
}

doTest();
//node ./AI-pair/chatting.js
