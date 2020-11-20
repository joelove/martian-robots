import {
  mockProcessExit,
  mockProcessStdout,
  mockConsoleLog,
} from "jest-mock-process";

import start from "./index";

const stdoutMock = mockProcessStdout();

// process.stdin.write("foo");

describe("CLI", () => {
  beforeEach(() => {
    start();
  });

  it("asks for the world size", async () =>
    expect(stdoutMock).toHaveBeenCalledWith(
      'Enter space-delimited world size (e.g. "3 5"): '
    ));
});
