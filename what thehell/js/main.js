window._skel_config = {
    prefix: 'css/style',
        preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};



var oper=""
var num =""
 
function displaynum(n) {
document.form1.t1.value = document.form1.t1.value + n
}
 
function operator(op) {         
oper = op
 num= document.form1.t1.value
document.form1.t1.value = ""
}
 //code for equals starts here
function equals() {
doesthejob( eval(num) , eval(document.form1.t1.value ), oper)
}
 //a sub-function of equals 
function doesthejob(n1,n2, op) {
if (op == "+" ) 
document.form1.t1.value = n1 + n2
else if ( op == "-" )
document.form1.t1.value = n1- n2
else if (op == "*")
document.form1.t1.value = n1 * n2
else if (op =="/")
document.form1.t1.value = n1/n2 
else if (op=="nCr" )
document.form1.t1.value = fact2(n1)/ fact2(n1 - n2) / fact2(n2)
else if (op =="nPr")
document.form1.t1.value = fact2(n1) / fact2(n1-n2)
}
 //code for equals ends here

function fact2(n) {    // fact2() for nCr & nPr
if (errorchecking(n) ==false)  
return

var answer = 1
for (i = n; i >=2; i--){
answer = answer*i
} 
return answer
}

function fact() {
n = Number(document.form1.t1.value)
if (errorchecking(n) ==false) 
return
var answer = 1
for (i = n; i >=2; i--){
answer = answer*i
} 
document.form1.t1.value = answer
}

function errorchecking(n) {
if ( n < 0) {
alert("Number shouldn't be negative" )
return false 
}
var mod = n%1
if (!mod ==0) {
alert("The number should be an integer" )
return false
}
} 

function prime(n) {
if (errorchecking(n) == false)
return
var b = true
for ( i = 2; i<= n/2; i ++ ) {
if (n % i == 0 ) {
document.form1.t1.value = "Not prime; its first divided by " + i
b = false
break
}
}
if (b)
document.form1.t1.value = "Is prime"
}

function negation() {
document.form1.t1.value = document.form1.t1.value * -1
}
 
function reset() {
document.form1.t1.value = ""
num = ""
}













/* tried using this calculator js but broke my site

$(document).ready(function() {
    $(“#convertbutton”).click(function() {
        var metricValue = $(“#metricinput”).val();
        var imperialValue = $(“#imperialinput”).val();
        if (((metricValue.length !=0) && (imperialValue.length !=0))
        || ((metricValue.length == 0) && imperialValue.length == 0)) {
            alert(“Please set one field to convert”)
        }
        if (metricValue.length != 0) {
            $(“#imperialinput”).val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $(“#metricinput”).val(Converter.convertFromMetricToImperial(imperialValue));
        }
    });
    $(“#clearbutton”).click(function() {
        $(“#imperialinput”).val(”);
        $(“#metricinput”).val(”);
    });

});

$(document).ready(function () {

    $(“#add”).click(function () {
        var numoneValue = $(“#numone”).val();
        var numtwoValue = $(“#numtwo”).val();

        if ((numoneValue.length == 0) || (numtwoValue.length == 0))
        {
            alert(“Please populatate two textboes with numbers”);
        }

        $(“#answer”).val(calc.add(numoneValue, numtwoValue));

    });
    $(“#divide”).click(function () {
        var numoneValue = $(“#numone”).val();
        var numtwoValue = $(“#numtwo”).val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert(“Please populatate two textboes with numbers”);
        }
        $(“#answer”).val(calc.divide(numoneValue, numtwoValue));

    });
    $(“#multiply”).click(function () {
        var numoneValue = $(“#numone”).val();
        var numtwoValue = $(“#numtwo”).val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert(“Please populatate two textboes with numbers”);
        }
        $(“#answer”).val(calc.multiply(numoneValue, numtwoValue));

    });
    $(“#subtract”).click(function () {
        var numoneValue = $(“#numone”).val();
        var numtwoValue = $(“#numtwo”).val();
        if ((numoneValue.length == 0) || (numtwoValue.length == 0)) {
            alert(“Please populatate two textboes with numbers”);
        }
        $(“#answer”).val(calc.subtract(numoneValue, numtwoValue));

    });

 
    $(“#clearbutton”).click(function () {
        $(“#numone”).val(”);
        $(“#numtwo”).val(”);
        $(“#answer”).val(”);

    });
});
*/


























// this function is called by the id of the button

// his Jquery



// beaverslider


$(function () {
    var slider = new BeaverSlider({
        structure: {
            container: {
                id: "my-slider",
                width: 720,
                height: 420
            }
        },
        content: {
            images: [
              "img/bobdylan.jpg",
              "img/gangoffor.jpg",
              "img/smiths.jpg",
              "img/libs.jpg",
              "img/thesmiths.jpg",
              "img/whites.jpg",
              "img/thers.jpg",

            ]
        },
        animation: {
            effects: effectSets["slider: big set 2"],
            interval: 1000
        }
    });
});