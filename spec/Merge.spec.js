// jscs:disable
// jshint ignore:start
define([
    "Merge"
], function (Merge) {
    describe('Merge.spec.js', function () {
        var instance;
        describe("Merge", function () {
            it("merges values of a and values of b to c", function () {
                var c = Merge({ a: "a" }, { b: "b" });
                expect(c.a).toEqual("a");
                expect(c.b).toEqual("b");
                c = Merge({ a: "a", c: "c" }, { b: "b" });
                expect(c.a).toEqual("a");
                expect(c.b).toEqual("b");
                expect(c.c).toEqual("c");
            });
            it("merges overrides value of first object with value of second object", function () {
                var c = Merge({ a: "a" }, { a: "b" });
                expect(c.a).toEqual("b");
            });
            it("throws type error if defaultOptions is not defined", function () {
                try {
                    var c = Merge(1, {});
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
            it("throws type error if defaultOptions is not defined", function () {
                try {
                    var c = Merge({});
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });
        });
    });
});

