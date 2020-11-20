import readline from "readline";

import instructionApplicator, {
  Coordinate,
  Coordinates,
  Position,
  WorldSize,
  Direction,
  Instruction,
  IsLost,
} from "./instructionApplicator";

import parse, {
  instructionsParser,
  positionParser,
  coordinatesParser,
} from "./inputParser";

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

const printOutcome = (position: Position, isLost: IsLost) => {
  console.log(position.join(" "), isLost ? "LOST" : "");
};

const readRobotInstructions = async (): Promise<Instruction[]> =>
  askQuestion(
    'Enter robot instructions (e.g. "RFLFFRFLF"): ',
    (instructionsInput) => parse(instructionsParser, instructionsInput)
  );

const readRobotPosition = async (): Promise<Position> =>
  askQuestion(
    'Enter space-delimited starting position (e.g. "1 1 E"): ',
    (positionInput) => parse(positionParser, positionInput)
  );

const readWorldSize = async (): Promise<WorldSize> =>
  askQuestion(
    'Enter space-delimited world size (e.g. "3 5"): ',
    (worldSizeInput) => parse(coordinatesParser, worldSizeInput)
  );

const readRobotInformation = async (worldSize: WorldSize) => {
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

if (process.env.NODE_ENV !== "test") {
  start();
}

export default start;
