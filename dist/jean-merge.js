!function(r,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(r.Merge=r.Merge||{},r.Merge=e())}(this,function(){var r,e;return function(n){function t(r){for(var e=0,n=[];e<r.length;e++){var t=s.resolved[r[e]];t&&n.push(t)}return n}function o(){for(var r in s.unresolved){var e=s.unresolved[r],n=t(e.dependencies);i(r,e.factory,e.dependencies,n,!1)}}function i(r,e,n,t,o){t.length===n.length?s.resolved[r]=e.apply(e,t):o&&(s.unresolved[r]={dependencies:n,factory:e})}var s={resolved:{},unresolved:{}};e=function(r,e,n){return s.resolved[r]?void console.warn("There is already a module with id <"+r+"> defined. Therefore this module will be ignored"):"string"==typeof r&&Array.isArray(e)&&"function"==typeof n?(0===e.length?i(r,n,e,[],!1):i(r,n,e,t(e),!0),void o()):void console.warn("Passed arguments for module are invalid")},e.amd={},r=function(r,e){r=Array.isArray(r)?r:[r];var n=t(r);if(1===n.length&&!e)return n[0];if(n.length!==r.length||!e)throw new Error("Not all modules are resolved");e.apply(e,n)}}(),e("node_modules/jean-amd/dist/jean-amd",function(){}),e("TypeCheck",[],function(){return{isString:function(r){return"string"==typeof r},isBoolean:function(r){return"boolean"==typeof r},isNumber:function(r){return"number"==typeof r},isObject:function(r){var e=!1;if(this.isString(r)||this.isFunction(r))return!1;if(this.isEmptyObject(r))return!0;for(var n in r)if(r.hasOwnProperty(n)){e=!0;break}return e},isEmptyObject:function(r){var e=!0;if(!this.isDefined(r)||this.isBoolean(r)||this.isFunction(r)||this.isNumber(r)||this.isString(r)||Array.isArray(r))return!1;for(var n in r)if(r.hasOwnProperty(n)){e=!1;break}return e},isFunction:function(r){return"function"==typeof r},isDefined:function(r){return void 0!==r&&null!=r},isArray:function(r){return Array.isArray(r)},isArrayTypeOf:function(r,e){var n=!0;if(!this.isString(e))throw new TypeError("options.type is not a string");if(!Array.isArray(r))throw new TypeError("options.array is not an array");0===r.length&&(n=!1);for(var t=0,o=r.length;t<o;t++){if(typeof r[t]!==e){n=!1;break}}return n}}}),e("Failure",[],function(){return{throwError:function(r){throw new Error(r)},throwTypeError:function(r){throw new TypeError(r)}}}),e("src/Merge",["TypeCheck","Failure"],function(r,e){return function(n,t){r.isObject(n)&&r.isObject(t)||e.throwTypeError("defaultOptions or options is not an object");var o,i,s={},u=Object.keys(t),a=u.length,f=Object.keys(n),c=f.length;for(o=0;o<c;o++)i=f[o],s[i]=n[i];for(o=0;o<a;o++)i=u[o],s[i]=t[i];return s}}),r("src/Merge")});