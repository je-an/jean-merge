define([], function () {
    /**
     * Merges two objects into one 
     * @param {Object} defaultOptions - default options provided by system
     * @param {Object} options - options provided by user
     */
    return function merge(defaultOptions, options) {
        Object.keys(options).forEach(function (key) { defaultOptions[key] = options[key]; });
        return defaultOptions;
    }
});