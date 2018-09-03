## Description

Merges two objects into one

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Merge is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new Merge();
```
- Use it with require.js
```js
require(["path/to/Merge"], function(Merge){
    // Work with Merge
});
```
- Use it with node.js
```js
var Merge = require("jean-merge");
```
## Installation

`npm install jean-merge --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT