#!/usr/bin/env node
import loremText from "./data/lorem.js";
import {
  generateRandomParagraph,
  generateRandomSentence,
  showHelpMessage,
} from "./utils/terminalActions.js";

const sentences = loremText
  .split(". ")
  .filter((sentence) => sentence.length > 0)
  .map((sentence) => `${sentence.trim()}.`);

const commandLineArguments = process.argv.slice(2);

if (commandLineArguments[0] === "-h" || commandLineArguments.length === 0) {
  showHelpMessage();
}

if (
  commandLineArguments[0] === "-s" &&
  commandLineArguments[1] === "-c" &&
  isNaN(commandLineArguments[2])
) {
  showHelpMessage();
}

if (
  commandLineArguments[0] === "-s" &&
  (commandLineArguments.length >= 2 && commandLineArguments[1] !== "-c")
) {
  showHelpMessage();
}

if (
  commandLineArguments[0] === "-s" &&
  (commandLineArguments.length === 1 || !commandLineArguments[1])
) {
  generateRandomSentence(sentences);
}

if (
  commandLineArguments[0] === "-s" &&
  commandLineArguments[1] === "-c" &&
  !isNaN(commandLineArguments[2])
) {
  generateRandomParagraph(sentences, commandLineArguments);
}
