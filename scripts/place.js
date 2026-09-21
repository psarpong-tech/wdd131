document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;

const temperature = parseFloat(
  document.getElementById("temp").textContent
);

const windSpeed = parseFloat(
  document.getElementById("wind").textContent
);

const calculateWindChill = (t, s) =>
  (35.74 + (0.6215 * t) -
    (35.75 * Math.pow(s, 0.16)) +
    (0.4275 * t * Math.pow(s, 0.16))).toFixed(1);

const chillElement = document.getElementById("chill");

if (temperature <= 50 && windSpeed > 3) {
  chillElement.textContent =
    `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  chillElement.textContent = "N/A";
}
