define(["TypeCheck", "Failure"], function (TypeCheck, Failure) {
    /**
     * Merges two objects into one 
     * Only able to merge flat objects - no deep copy
     * @throws {TypeError} - defaultOptions or options is not an object
     * @param {Object} defaultOptions - default options provided by system
     * @param {Object} options - options provided by user
     * @returns {Object} - an object with the merged values
     */
    return function merge(defaultOptions, options) {
        if (!TypeCheck.isObject(defaultOptions) || !TypeCheck.isObject(options)) {
            Failure.throwTypeError("defaultOptions or options is not an object");
        }
        var result = {}, i, key,
            optionsKeys = Object.keys(options), optionsLength = optionsKeys.length,
            defaultOptionsKeys = Object.keys(defaultOptions), defaultOptionsLength = defaultOptionsKeys.length;
        for (i = 0; i < defaultOptionsLength; i++) {
            key = defaultOptionsKeys[i];
            result[key] = defaultOptions[key];
        }
        for (i = 0; i < optionsLength; i++) {
            key = optionsKeys[i];
            result[key] = options[key];
        }
        return result;
    }
});