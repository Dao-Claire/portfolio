function convert() {
  const value = parseFloat(document.getElementById("inputValue").value);
  const type = document.getElementById("type").value;

  let result = 0;
  let symbol = "";

  if (isNaN(value)) {
    document.getElementById("result").textContent = "Résultat : valeur invalide";
    return;
  }

  switch (type) {

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


    case "km-miles":
      result = value * 0.621371;
      symbol = "miles";
      break;

    case "miles-km":
      result = value / 0.621371;
      symbol = "km";
      break;


    case "c-f":
      result = (value * 9/5) + 32;
      symbol = "°F";
      break;

    case "f-c":
      result = (value - 32) * 5/9;
      symbol = "°C";
      break;
  }

  document.getElementById("result").textContent =
    "Résultat : " + result.toFixed(2) + " " + symbol;
}
