describe("My Converter", function () {
    it("this should convert imperial weight to metric weight", function () {
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);
    });

    it("this should be able to handle with strings", function () {
        expect(function () {
            Converter.convertFromImperialToMetric("Hello")
        }).toThrow(new Error("Not a number"));
    });

    it("this should convert metric weight to imperial", function () {
        expect(Converter.convertFromMetricToImperial(1)).toBe(2.20);
    });

    it("this should be able to deal with strings", function () {
        expect(function () {
            Converter.convertFromMetricToImperial("Hello")
        }).toThrow(new Error("Not a number"));
    });
});