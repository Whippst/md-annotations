import {greeting} from '../index'

describe("simple test", () => {
    test("GIVEN test WHEN greeting THEN returns 'hello world!'", () =>{
        expect(greeting()).toBe("hello world!")
    })
})