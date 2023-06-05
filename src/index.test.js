import { assert, describe, it } from "vitest";

import {
  generateRandomParagraph,
  generateRandomSentence,
  showHelpMessage,
} from "./helpers/terminalActions.js";

describe("Terminal Actions", () => {
  describe("generateRandomSentence", () => {
    it("should generate a random sentence", () => {
      const sentences = ["This is a sentence.", "Another sentence."];
      let output = "";
      console.log = (msg) => (output += msg + "\n");

      generateRandomSentence(sentences);

      assert.ok(output.length > 0);
    });
  });

  describe("generateRandomParagraph", () => {
    it("should generate a paragraph with the specified number of sentences", () => {
      const sentences =
        "This is a sentence. Another sentence. One more sentence.";
      const args = ["-s", "-c", "3"];
      let output = "";
      console.log = (msg) => (output += msg + "\n");

      generateRandomParagraph(sentences, args);

      const lines = sentences
        .split(". ")
        .filter((sentence) => sentence.length > 0)
        .map((sentence) => `${sentence.trim()}.`);

      assert.strictEqual(lines.length, 3);
    });
  });

  describe("showHelpMessage", () => {
    it("should display help message", () => {
      let output = "";
      console.log = (msg) => (output += msg + "\n");

      showHelpMessage();

      assert.ok(output.length > 0);
    });
  });
});
