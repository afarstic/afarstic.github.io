var score = 0;
var s = 5;
var p = 1;

function Click() {
    score+=p;
    document.getElementById("score").innerHTML = "" + score;
}
function Upgrade() {
    if (score >= s) {
        score -= s;
        s *= 2;
        p++;
        document.getElementById("up").innerHTML = "" + s;
    }
}