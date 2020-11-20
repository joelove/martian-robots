module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 70,
      lines: 85,
      statements: 85,
    },
  },
  coverageReporters: ["json", "lcov", "text"],
};
