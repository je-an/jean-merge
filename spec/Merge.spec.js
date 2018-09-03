// jscs:disable
// jshint ignore:start
define([
    "Merge"
], function (Merge) {
    describe('Merge.spec.js', function () {
        var instance;
        describe("Merge", function () {
            it("merges a and b to c", function () {
                var c = Merge({ a: "a" }, { b: "b" });
                expect(c.a).toEqual("a");
                expect(c.b).toEqual("b");
            });
        });
    });
});

