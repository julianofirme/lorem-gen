import { getRandomPosition } from "./randomNumber.js";

const generateRandomSentence = (sentences) => {
  const paragraph = getRandomPosition(0, sentences.length);
  console.log(sentences[paragraph]);
};

const generateRandomParagraph = (sentences, args) => {
  const numSentences = parseInt(args[2]);

  for (let i = 0; i < numSentences; i++) {
    const paragraph = getRandomPosition(0, sentences.length);
    const sentence = sentences[paragraph].replace(".", ". ");
    process.stdout.write(sentence);
  }

  console.log();
};

const showHelpMessage = () => {
  console.log(`
    Usage:

    lorem -s                         
        Generates a random sentence.

    lorem -s -c <number>    
        Generates a number of random sentences in a paragraph.

    lorem -h                                
        Displays this help message.
  `);
  return;
};

export { generateRandomSentence, generateRandomParagraph, showHelpMessage };
