import readline from "readline";

import instructionApplicator, {
  Position,
  WorldSize,
  Instruction,
  IsLost,
} from "./instructionApplicator";

import parse, {
  instructionsParser,
  positionParser,
  coordinatesParser,
} from "./inputParser";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const askQuestion = async <T>(
  question: string,
  read: (input: string) => unknown
): Promise<T> =>
  new Promise((resolve) =>
    rl.question(question, (line: string) => {
      resolve(read(line) as T);
    })
  );

export const printOutcome = (position: Position, isLost: IsLost) => {
  console.log(position.join(" "), isLost ? "LOST" : "");
};

export const readRobotInstructions = async (): Promise<Instruction[]> =>
  askQuestion(
    'Enter robot instructions (e.g. "RFLFFRFLF"): ',
    (instructionsInput) => parse(instructionsParser, instructionsInput)
  );

export const readRobotPosition = async (): Promise<Position> =>
  askQuestion(
    'Enter space-delimited starting position (e.g. "1 1 E"): ',
    (positionInput) => parse(positionParser, positionInput)
  );

export const readWorldSize = async (): Promise<WorldSize> =>
  askQuestion(
    'Enter space-delimited world size (e.g. "3 5"): ',
    (worldSizeInput) => parse(coordinatesParser, worldSizeInput)
  );

export const readRobotInformation = async (worldSize: WorldSize) => {
  const startingPosition = await readRobotPosition();
  const instructions = await readRobotInstructions();

  const [position, isLost] = instructionApplicator(
    worldSize,
    startingPosition,
    instructions
  );

  printOutcome(position, isLost);
  readRobotInformation(worldSize);
};

export const start = async () => {
  const worldSize = await readWorldSize();

  readRobotInformation(worldSize);
};

export default start;

if (process.env.NODE_ENV !== "test") {
  start();
}
