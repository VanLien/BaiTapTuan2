function convertMoney() {
    let a, b, c, d;
    a=parseInt(document.getElementById("a").value);
    b=+document.getElementById("b").value;
    c=+document.getElementById("c").value;

    d= (c/b)*a;

    document.getElementById("d").value=d;
}