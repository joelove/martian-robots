export type XCoord = number;
export type YCoord = number;
export type Instruction = string;
export type Direction = "N" | "E" | "S" | "W";
export type WorldSize = [XCoord, YCoord];
export type Postition = [XCoord, YCoord, Direction];

export default (
  worldsize: WorldSize,
  startingPosition: Postition,
  instruction: Instruction
) => [1, 1, "E"];
