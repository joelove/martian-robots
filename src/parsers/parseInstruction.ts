import { Instruction, instructions } from "../instructionApplicator";

const parseInstruction = <Instruction>(input: string) => {
  if (!instructions.includes(input)) return null;

  return (input as unknown) as Instruction;
};

export default parseInstruction;
