function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");

  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erreur";
  }
}
document.addEventListener("keydown", function(event) {
  const key = event.key;

  // chiffres et opérateurs
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "."
  ) {
    append(key);
  }

  if (key === "Enter") {
    calculate();
  }

  if (key === "Backspace") {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }

  if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
