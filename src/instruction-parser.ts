const directions = ["N", "E", "S", "W"] as const;

export type Direction = typeof directions[number];
export type Instruction = "F" | "L" | "R";
export type InstructionString = string;
export type XCoord = number;
export type YCoord = number;
export type Coordinates = [XCoord, YCoord];
export type WorldSize = [XCoord, YCoord];
export type Position = [XCoord, YCoord, Direction];
export type ApplicatorFunction = (position: Position) => Position;

const ForwardTransformations: Record<Direction, Coordinates> = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
};

export const applyForward: ApplicatorFunction = ([x, y, d]) => {
  const [transformX, transformY] = ForwardTransformations[d];

  return [x + transformX, y + transformY, d];
};

export const applyLeft: ApplicatorFunction = ([x, y, d]) => {
  const newDirection =
    directions[directions.indexOf(d) - 1] ?? directions[directions.length - 1];

  return [x, y, newDirection];
};

export const applyRight: ApplicatorFunction = ([x, y, d]) => {
  const newDirection = directions[directions.indexOf(d) + 1] ?? directions[0];

  return [x, y, newDirection];
};

const InstructionApplicators: Record<Instruction, ApplicatorFunction> = {
  F: applyForward,
  L: applyLeft,
  R: applyRight,
} as const;

export const applyInstruction = (
  currentPosition: Position,
  instruction: Instruction
): Position => InstructionApplicators[instruction](currentPosition);

export default (
  worldsize: WorldSize,
  startingPosition: Position,
  instructionString: InstructionString
): Position => {
  let instructions = instructionString.split("") as Instruction[];

  return instructions.reduce(applyInstruction, startingPosition);
};
