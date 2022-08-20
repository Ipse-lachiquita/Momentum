const quotes = [
  {
    english: "Be true to thyself.",
    korean: "자기 자신에게 솔직해져라.",
  },
  {
    english: "Life is a choice.",
    korean: "인생은 선택이다.",
  },
  {
    english: "Follow your own star.",
    korean: "너 자신의 별을 좇아라.",
  },
  {
    english: "Live life to the fullest.",
    korean: "인생을 마음껏 누려라.",
  },
  {
    english: "Never stop believing.",
    korean: "믿음을 멈추지 말아라.",
  },
  {
    english: "Don't dwell on the past.",
    korean: "과거에 연연하지 마세요.",
  },
  {
    english: "You only live once.",
    korean: "인생은 한 번 뿐이다.",
  },
  {
    english: "Past is just past.",
    korean: "과거는 과거다.",
  },
  {
    english: "Where there is a will there is a way",
    korean: "뜻이 있는 곳엔 길이 있다.",
  },
  {
    english: "I was never less alone than when by myself.",
    korean: "난 혼자 있을 때 가장 외롭지 않았다.",
  },
];

const english = document.querySelector("#quote span:first-child");
const korean = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

english.innerText = todaysQuote.english;
korean.innerText = todaysQuote.korean;
