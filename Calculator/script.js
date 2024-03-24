var op;

function calc() {
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var result;
    switch (op) {
        case '+':
            result = num1 + num2;
            document.getElementById("znak-output").innerHTML = op;
            break;
        case '-':
            result = num1 - num2;
            document.getElementById("znak-output").innerHTML = op;
            break;
        case '/':
            result = num1 / num2;
            document.getElementById("znak-output").innerHTML = op;
            break;
        case '*':
            result = num1 * num2;
            document.getElementById("znak-output").innerHTML = op;
            break;
    }
    document.getElementById("output").innerHTML = result;
}
// честно говоря лень его делать, не особо интересует подобный опыт, ибо сайты делать интереснее, а такую штучку можно и проще сделать