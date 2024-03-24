function getRandomInt() {
    var a = document.getElementById("one").value;
    var result = Math.ceil(Math.random() * a)
    document.getElementById("output").innerHTML = result;
    if(result == 0) {
        document.getElementById("output").innerHTML = "0 незя";
    }
}