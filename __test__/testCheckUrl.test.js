import { TestScheduler } from 'jest';
import { checkUrl } from '../src/client/js/urlChecker';
describe('testing checkUrl function', () => {
    test("it should approve good URLs and dis bad ones", () => {
        const theGood = "https://www.udacity.com";
        const theBad = "hftp://wwu.alcapone.co.com";
        const theUgly = "Quasimodo@gmail.com";
        expect(checkUrl(theGood).toBeTruthy);
        expect(checkUrl(theBad).toBeFalsy);
        expect(checkUrl(theUgly)).toBeFalsy;
    });  
})