// // This function clear all screen of input

// function clearScreen() {
//     document.getElementById("result").value = "";
// }

// // this function is display value

// function display(value) {
//     document.getElementById("result").value += value;
// }

// // this function is displey result

// function calculate() {
//     var p = document.getElementById("result").value;
//     var q = eval(p);
//     document.getElementById("result").value = q;
// }

function display(event) {
    let output = document.getElementById("output");
    output.innerText += event.target.innerText;
}

function calAns() {
    let output = document.getElementById("output").innerText;

    if (output.includes("+")) {
        calAnswer(output, "+");
    }
    else if (output.includes("-")) {
        calAnswer(output, "-");
    }
    
    else if (output.includes("*")) {
        calAnswer(output, "*");
    }
    else if (output.includes("/")) {
        calAnswer(output, "/");
    }
}

function calAnswer(ipStr, op) {
    switch (op) {
        case "+":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("output").innerText = v1 + v2;
            break;


        case "-":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("output").innerText = v1 - v2;
            break;


        case "*":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("output").innerText = v1 * v2;
            break;


        case "/":
            var v1 = "";
            var v2 = "";
            var opIndex = ipStr.indexOf(op);

            for (let i = 0; i < opIndex; i++) {
                v1 += ipStr.charAt(i);
            }

            for (let j = opIndex + 1; j < ipStr.length; j++) {
                v2 += ipStr.charAt(j);
            }

            v1 = Number(v1);
            v2 = Number(v2);

            document.getElementById("output").innerText = v1 / v2;
            break;


    }
}