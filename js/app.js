let myColor = ["Red", "Green", "White", "Black"];
function addString() {
    let data = "";
    for (let i = 0; i < myColor.length; i++) {
        data += myColor[i] + ", ";
    }
    document.getElementById('result').innerHTML = data;
}
