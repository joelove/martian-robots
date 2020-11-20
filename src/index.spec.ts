import { mockProcessStdout } from "jest-mock-process";

import start from "./index";

describe("Index", () => {
  describe("CLI", () => {
    let stdoutMock: jest.SpyInstance<boolean>;

    beforeEach(() => {
      stdoutMock = mockProcessStdout();

      start();
    });

    it("asks for the world size", async () =>
      expect(stdoutMock).toHaveBeenCalledWith(
        'Enter space-delimited world size (e.g. "3 5"): '
      ));
  });
});
