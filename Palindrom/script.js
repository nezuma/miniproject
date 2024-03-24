function getPalindrom() {
    var c;
    var a = document.getElementById("one").value;
    var massive = a.split('');
    massive.reverse();
    if (massive.join('') == a) {
        c = "Это палиндром";
    }
    else {
        c = "Неа";
    }
    document.getElementById("output").innerHTML = c;
}