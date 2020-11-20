export const directions = ["N", "E", "S", "W"];
export const instructions = ["F", "L", "R"];

export type Direction = typeof directions[number];
export type Instruction = typeof instructions[number];
export type Coordinate = number;
export type IsLost = boolean;
export type XCoord = Coordinate;
export type YCoord = Coordinate;
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
};

export const applyInstruction = ([maxX, maxY]: WorldSize) => (
  [currentPosition, isLost]: [Position, IsLost],
  instruction: Instruction
): [Position, IsLost] => {
  const [x, y, d] = InstructionApplicators[instruction](currentPosition);

  return [[x, y, d], isLost || x > maxX || y > maxY];
};

export default (
  worldSize: WorldSize,
  startingPosition: Position,
  instructions: Instruction[]
): [Position, IsLost] =>
  instructions.reduce(applyInstruction(worldSize), [startingPosition, false]);
