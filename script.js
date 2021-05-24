var temps = document.querySelectorAll(".highs,.lows");
var unit = 'Fahrenheit';
var cookieBox = document.querySelector(".cookies");
function wait() {
    setTimeout(reveal, 1000); /* to have function wait take out parenthesis so you don't call immediately  */
}
function reveal() {
    cookieBox.style.display = 'flex';
}
wait();

function convertUnits(element) {
    unit = element.value;
    console.log(unit);
    if (unit == 'Celcius') {
        for (i = 0; i<temps.length; i++) {
            temps[i].innerHTML = Math.round(((temps[i].innerHTML - 32) * 5 / 9)*10)/10;
        }
    } else if (unit == 'Fahrenheit') {
        for (i = 0; i<temps.length; i++) {
            temps[i].innerHTML = Math.round(((temps[i].innerHTML * 9 / 5) + 32)*10)/10;
        }
    }
}