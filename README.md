## Description

Merges two objects into one
Only for merging flat objects - no deep copy

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
    var a = { id: 1}, b = { name: "merge" };
    var c = Merge(a, b); 
    console.log(c) // { id: 1, name: "merge" }
});
```
- Use it with node.js
```js
var Merge = require("jean-merge");
```
## Installation

`npm install jean-merge --save --legacy-bundling`

## API Reference

### Merge(defaults, options) 

Merges to objects into one. Overrides defaults with options

**Parameters**
- **defaults**: `Object` - values in defaults gets override by options
- **options**: `Object` - values in options overrides values in default

**Returns**
- `Object` - the merged values of `defaults` and `options`

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT