const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let questionArray = [
  {
    question: "What is capital of india",
    A: "Lahore",
    B: "Dehli",
    C: "Islamabad",
    answer: "B",
  },
  {
    question: "What is capital of Afghanistan",
    A: "Lahore",
    B: "Kabul",
    C: "Islamabad",
    answer: "B",
  },
  {
    question: "What is capital of America",
    A: "Lahore",
    B: "new york",
    C: "Washington, D.C.",
    answer: "C",
  },
  {
    question: "What is capital of pakistan",
    A: "Lahore",
    B: "Karachi",
    C: "Islamabad",
    answer: "C",
  },
];
let result = {
  corrects: 0,
  uncorrects: 0,
};

async function quizGame() {
  function readLineAsync(message, questionNumber) {
    return new Promise((resolve, reject) => {
      readline.question(message, (answer) => {
        resolve(calculateResult(answer, questionNumber));
      });
    });
  }

  const calculateResult = (answer, questionNumber) => {
    if (
      questionArray[questionNumber].answer.toLocaleLowerCase() ===
      answer.toLocaleLowerCase()
    ) {
      result.corrects += 1;
    } else {
      result.uncorrects += 1;
    }
  };

  const startGame = async () => {
    for (let i = 0; i < questionArray.length; i++) {
      const quetion = `${questionArray[i].question}
    A: ${questionArray[i].A}
    B: ${questionArray[i].B}
    C: ${questionArray[i].C}
    Answer: `;
      await readLineAsync(quetion, i);
    }
  };
  await startGame();
  console.log(`your result is :
    Correct answers = ${result.corrects}
    Wrong answers = ${result.uncorrects}`);
  readline.close();
}
quizGame();
