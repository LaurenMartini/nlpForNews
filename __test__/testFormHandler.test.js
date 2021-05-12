//base for this file from
//https://classroom.udacity.com/nanodegrees/nd0011/parts/5bb114fe-8add-4c47-bc13-1cee34886c1a/modules/0eb61bba-702e-4dc3-bf32-a838bac60c33/lessons/adbf2a15-5fa5-466b-a8fe-19ce08b82b61/concepts/5675966c-1a35-4d58-8715-e279d2303167

//source for import: https://stackoverflow.com/questions/42535270/regeneratorruntime-is-not-defined-when-running-jest-test
import "babel-polyfill"

//import js file to test
import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing form submit", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});