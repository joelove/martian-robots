# Martian Robots

##### A lightweight CLI to control a martian robot horde, built using Node.js and TypeScript

---

### Prerequisites

This command line tool relies on [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/). If you're running MacOS, you should have this pre-installed and be ready to go. If you have any trouble, take a look at [the Node website](https://nodejs.org/en/).

### Installation

The CLI uses [NPM](https://www.npmjs.com/) to handle dependencies. To install everything we need, use:

```shell
npm install
```

Once that's out of the way, you can run the CLI with:

```shell
npm start
```

> _**Note:** The CLI has been manually tested on Node 14 and 15. It will probably work on any reasonably new version but if you have problems running it, try checking your version._

### Testing

Automated testing of this CLI uses [Jest](https://jestjs.io/). You can run the tests using:

```shell
npm run test
```

### Development

To make life easier, this CLI has a development server which will hot reload your changes when you change files. To run it, just use:

```shell
npm run dev
```

During development, you may also want the tests to run automatically (for some good old red-green refactoring!). You guessed it:

```shell
npm run test:watch
```

---

This tool was created by [Joe Love](https://github.com/joelove). For support or a chat, email github@joelove.uk.
