describe(“My Calcultor”, function() {
    it(“add numbers”, function() {
        expect(calc.add(3,2)).toBe(5);
    })

it(“multiply numbers”, function () {
    expect(calc.multiply(3, 2)).toBe(6);
})
it(“divide numbers”, function () {
    expect(calc.divide(6, 2)).toBe(3);
})
it(“subtract numbers”, function () {
    expect(calc.subtract(6, 2)).toBe(4);
})

it(“should be able to deal with strings”, function () {
    expect(function() {calc.multiply(“hello”)}).toThrow(new Error(“Not a number”))
})
}


