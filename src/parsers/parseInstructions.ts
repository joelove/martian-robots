import { parse, instructionParser } from "../inputParser";
import { Instruction } from "../instructionApplicator";

const parseInstructions = <Instruction>(input: string): Instruction[] => {
  return input
    .trim()
    .split("")
    .map((instruction) => parse(instructionParser, instruction));
};

export default parseInstructions;
