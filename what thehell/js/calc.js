

var calc = (function () {

    // Private stuff up here
    //var converterValue = 2.2;
    // Public methods here
    return {
        add: function (num1, num2) {
            var first = parseInt(num1);
            var second = parseInt(num2);

            if (isNaN(first) == true) {
                throw new Error(“Not a number”);
            }
            answer = first + second;
            return answer;
        },

        multiply: function (num1, num2) {
            var first = parseInt(num1);
            var second = parseInt(num2);

            if (isNaN(first) == true) {
                throw new Error(“Not a number”);
            }
            answer = first * second;
            return answer;
        },

        divide: function (num1, num2) {
            var first = parseInt(num1);
            var second = parseInt(num2);

            if (isNaN(first) == true) {
                throw new Error(“Not a number”);
            }
            answer = first / second;
            return answer;
        },
        subtract: function (num1, num2) {
            var first = parseInt(num1);
            var second = parseInt(num2);

            if (isNaN(first) == true) {
                throw new Error(“Not a number”);
            }
            answer = first – second;
            return answer;
        }
    }
}())

