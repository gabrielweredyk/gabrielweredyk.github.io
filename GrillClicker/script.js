var score = 0;
var container;
var text;
var stats = [1, 0, 0, 0, 1];
var names = ["spatula", "dad", "seasoning", "beverages", "pool"];
var prices = [10, 100, 1000, 10000, 100000];
var time = new Date().getTime();

function Grillin() {
    score += stats[1];
    document.getElementById("income").innerHTML = "Passive Income: " + stats[1];
    document.getElementById("score").innerHTML = "Cash: " + score.toString();
    setTimeout("Grillin()", 1000);
}

function Click() {
    score += stats[0];
    if (Math.random < stats[3] / 100) {
        score += stats[0];
    }
    document.getElementById("score").innerHTML = "Cash: " + score.toString();
}

function Upgrade(up) {
    text = document.getElementById(up).children;
    var index = names.indexOf(up);
    if (score >= prices[index]) {
        stats[index] += stats[4];
        text[1].innerHTML = "Amount owned: " + stats[names.indexOf(up)].toString();
        score -= prices[index];
        document.getElementById("score").innerHTML = "Cash: " + score.toString();
        prices[index] += 10 ** (index + 1);
        text[2].innerHTML = "Cost: " + prices[index];
    }
}