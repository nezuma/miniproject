function getMassive() {
    var a = document.getElementById("one").value;
    a = a.split('');
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += Number(a[i]);
    }
    document.getElementById('output').innerHTML = sum;
}