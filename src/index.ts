import readline from "readline";

import instructionApplicator, { WorldSize } from "./instructionApplicator";
import parse, { coordinatesParser } from "./inputParser";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = async <T>(
  question: string,
  read: (input: string) => unknown
): Promise<T> =>
  new Promise((resolve) =>
    rl.question(question, (line: string) => {
      resolve(read(line) as T);
    })
  );

const readWorldSize = async (): Promise<WorldSize> =>
  askQuestion(
    'Enter space-delimited world size (e.g. "3 5"): ',
    (worldSizeInput) => parse(coordinatesParser, worldSizeInput)
  );

const start = async () => {
  const worldSize = await readWorldSize();
};

if (process.env.NODE_ENV !== "test") {
  start();
}

export default start;
