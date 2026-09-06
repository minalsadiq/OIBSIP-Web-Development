// Temperature Converter
// Converts a single input value (in C, F, or K) to all three units at once.

const form = document.getElementById("converter-form");
const input = document.getElementById("temp-value");
const errorMessage = document.getElementById("error-message");

const resultCards = {
  C: document.getElementById("result-C"),
  F: document.getElementById("result-F"),
  K: document.getElementById("result-K"),
};

// Absolute zero, expressed in each unit -- used to validate physically impossible input.
const ABSOLUTE_ZERO = { C: -273.15, F: -459.67, K: 0 };

function toCelsius(value, unit) {
  if (unit === "C") return value;
  if (unit === "F") return (value - 32) * (5 / 9);
  if (unit === "K") return value - 273.15;
}

function fromCelsius(celsius, unit) {
  if (unit === "C") return celsius;
  if (unit === "F") return celsius * (9 / 5) + 32;
  if (unit === "K") return celsius + 273.15;
}

function clearResults() {
  Object.values(resultCards).forEach((card) => {
    card.classList.remove("source");
    card.querySelector(".result-value").textContent = "—";
  });
}

function showError(message) {
  errorMessage.textContent = message;
  clearResults();
}

function getUnitLabel(unit) {
  return unit === "C" ? "°C" : unit === "F" ? "°F" : "K";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  errorMessage.textContent = "";

  const rawValue = input.value.trim();
  const selectedUnit = form.querySelector('input[name="unit"]:checked').value;

  // ---- Validation: reject empty or non-numeric input ----
  if (rawValue === "") {
    showError("Please enter a temperature value.");
    return;
  }

  const numericValue = Number(rawValue);
  if (Number.isNaN(numericValue)) {
    showError(`"${rawValue}" isn't a valid number. Please enter digits only (e.g. 25 or -10.5).`);
    return;
  }

  // ---- Validation: reject values below absolute zero for the selected unit ----
  if (numericValue < ABSOLUTE_ZERO[selectedUnit]) {
    showError(
      `That's below absolute zero (${ABSOLUTE_ZERO[selectedUnit]}${getUnitLabel(selectedUnit)} is the physical limit). Please enter a valid temperature.`
    );
    return;
  }

  // ---- Convert and display all three units at once ----
  const celsius = toCelsius(numericValue, selectedUnit);

  Object.keys(resultCards).forEach((unit) => {
    const converted = fromCelsius(celsius, unit);
    const card = resultCards[unit];
    card.querySelector(".result-value").textContent = `${converted.toFixed(2)} ${getUnitLabel(unit)}`;
    card.classList.toggle("source", unit === selectedUnit);
  });
});

// Clear any stale error as soon as the user starts correcting their input.
input.addEventListener("input", function () {
  errorMessage.textContent = "";
});
