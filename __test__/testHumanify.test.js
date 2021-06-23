// // Import the js file to test
// import { TestScheduler } from "@jest/core";
// import  { handleSubmit } from "../src/js/client/formHandler.js";

// // The describe() function takes two argument - a string desctiption, and a test suite as a callback function.
// // A test suite may contain one or more related tests
// describe("Testing the submit functionality", () => {
//     // The test() function has two arguments - a string description, and an actual test as a callback function.
//     TestScheduler("Testing the handleSubmit() function", () => {
//         // Define the input for the function, if any, in the form of variables/array
//         // Define the expected output, if any, in the form of variables/arry
//         // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
//         // The general syntax is `expect(myFunction(arg1, arg2, ...)). toEqual(exectedValue);`, where `toEqual()` is a matcher
//     })
// })
import { TestScheduler } from 'jest';
import { humanify } from '../src/client/js/formHandler';
describe('testing sentiment code translation', () => {
    test("it should return a human readable description", () => {
        const inputs = ["P+", "P", "NEU", "N", "N+", "NONE"];
        const outputs = [
                "Strong Positive",
                "Positive",
                "Neutral",
                "Negative",
                "Strong Negative",
                "Without Polarity"
            ];
        for(let i = 0; i < inputs.length; i++) {
            expect(humanify(inputs[i])).toEqual(outputs[i]);
        };

    })   
})