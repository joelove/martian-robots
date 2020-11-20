import { Coordinate } from "../instructionApplicator";

const parseCoordinate = <Coordinate>(input: string) => {
  const coord = parseInt(input, 10);

  if (!Number.isInteger(coord)) return null;

  return (coord as unknown) as Coordinate;
};

export default parseCoordinate;
