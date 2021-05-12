//import js file to test
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing that url checker works", () => {
    test("Testing the checkForName() function", () => {
        //check that checkForName exists
        expect(checkForName).toBeDefined();

        //valid urls
        expect(checkForName('https://www.google.com/')).toBeTruthy();

        //invalid urls
        expect(checkForName('h://www.google.com/')).toBeFalsy();
    })
})