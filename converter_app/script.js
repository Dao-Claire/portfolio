function convert() {
    const input = document.getElementById("inputValue");
    const type = document.getElementById("type");
    const resultElement = document.getElementById("result");

    const value = parseFloat(input.value);
    const conversion = type.value;

    if (isNaN(value)) {
        resultElement.textContent = "Résultat : valeur invalide";
        return;
    }

    let result;
    let symbol;

    switch (conversion) {

        // =========================
        // DEVISES
        // =========================

        case "fcfa-eur":
            result = value / 655;
            symbol = "€";
            break;

        case "eur-fcfa":
            result = value * 655;
            symbol = "FCFA";
            break;

        case "fcfa-usd":
            result = value / 600;
            symbol = "$";
            break;

        case "usd-fcfa":
            result = value * 600;
            symbol = "FCFA";
            break;

        case "fcfa-cedi":
            result = value / 50;
            symbol = "GHS";
            break;

        case "cedi-fcfa":
            result = value * 50;
            symbol = "FCFA";
            break;


        // =========================
        // DISTANCE
        // =========================

        case "km-miles":
            result = value * 0.621371;
            symbol = "miles";
            break;

        case "miles-km":
            result = value / 0.621371;
            symbol = "km";
            break;


        // =========================
        // TEMPÉRATURE
        // =========================

        case "c-f":
            result = (value * 9 / 5) + 32;
            symbol = "°F";
            break;

        case "f-c":
            result = (value - 32) * 5 / 9;
            symbol = "°C";
            break;

        default:
            resultElement.textContent = "Résultat : conversion invalide";
            return;
    }

    // Évite les décimales inutiles
    const formattedResult = Number(result.toFixed(2));

    resultElement.textContent =
        "Résultat : " + formattedResult + " " + symbol;
}