import { Direction, directions } from "../instructionApplicator";

const parseDirection = <Direction>(input: string) => {
  if (!directions.includes(input)) return null;

  return (input as unknown) as Direction;
};

export default parseDirection;
