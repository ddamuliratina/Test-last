import { expect } from "chai";
import factorial  from "../factorial.js";

// const { expect } = require("chai");
// const factorial = require("./factorial");

describe("Factorial Function", function () {
    it("should return 1 for n = 0", function () {
        expect(factorial(0)).to.equal(1);
    });

    it("should return 1 for n = 1", function () {
        expect(factorial(1)).to.equal(1);
    });

    it("should return 120 for n = 5", function () {
        expect(factorial(5)).to.equal(120);
    });

    it("should return 3628800 for n = 10", function () {
        expect(factorial(10)).to.equal(3628800);
    });

    it("should throw an error for negative numbers", function () {
        expect(() => factorial(-5)).to.throw("Factorial is not defined for negative numbers");
    });

    it("should throw an error for float numbers", function () {
        expect(() => factorial(5.5)).to.throw("Factorial is only defined for integers");
    });
});










/*
written by:
Christina Ddamulira
Kambere Gilbert Silver
 */