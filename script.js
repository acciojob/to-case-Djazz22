function toCase(inputString) {
    if (inputString === "") {
        return "-";
    } else {
        const lowerCase = inputString.toLowerCase();
        const upperCase = inputString.toUpperCase();
        return `${lowerCase}-${upperCase}`;
    }
}

function showToCase() {
    const inputString = document.getElementById('inputString').value;
    const result = toCase(inputString);
    document.getElementById('result').innerText = result;
}
