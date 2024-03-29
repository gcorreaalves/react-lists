# Contributing

Contributions are always welcome. Before contributing please read the
[code of conduct](https://code-of-conduct.openjsf.org) &
[search the issue tracker](https://github.com/gcorreaalves/react-lists/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/), commit your changes,
& [send a pull request](https://help.github.com/articles/using-pull-requests/).

## Feature Requests

Feature requests should be submitted in the
[issue tracker](https://github.com/gcorreaalves/react-lists/issues), with a description of
the expected behavior & use case, where they’ll remain closed until sufficient interest,
[e.g. :+1: reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/),
has been [shown by the community](https://github.com/gcorreaalves/react-lists/issues?q=label%3A%22votes+needed%22+sort%3Areactions-%2B1-desc).
Before submitting a request, please search for similar ones in the
[closed issues](https://github.com/gcorreaalves/react-lists/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Pull Requests

For additions or bug fixes, please modify the relevant files. Include
updated unit tests in the `test` directory as part of your pull request.
Unit test files should be named `[filename].test.js`.

Before running the unit tests you’ll need to install, `npm i`,
[development dependencies](https://docs.npmjs.com/files/package.json#devdependencies).
Run unit tests from the command-line via `npm test`.

## Coding Guidelines

In addition to the following guidelines, please follow the conventions already
established in the code.

- **Spacing**:<br>
  Use two spaces for indentation. No tabs.

- **Naming**:<br>
  Keep variable & method names concise & descriptive.<br>
  Variable names `index`, `array`, & `iteratee` are preferable to
  `i`, `arr`, & `fn`.

- **Quotes**:<br>
  Single-quoted strings are preferred to double-quoted strings; however,
  please use a double-quoted string if the value contains a single-quote
  character to avoid unnecessary escaping.

- **Comments**:<br>
  Please use single-line comments to annotate significant additions, &
  [JSDoc-style](http://www.2ality.com/2011/08/jsdoc-intro.html) comments for
  functions.

Guidelines are enforced using [ESLint](https://www.npmjs.com/package/eslint):
```bash
$ npm run style
```
