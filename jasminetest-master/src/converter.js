var Converter = (function () {
    // la variable private va ici maintenant
    var convertovalue = 2.2;

    //la method public ici
    return {
        convertFromImperialToMetric: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error("Not a number");
            }
            num = num / convertovalue;
            return Math.round(num);
        },
        convertFromMetricToImperial: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error("Not a number");
            }
            num = num * convertovalue;
            return num;
        }
    }
})();
