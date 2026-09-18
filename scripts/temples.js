const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');

    if (mainnav.classList.contains("show")) {
        hambutton.textContent = "❌";
        hambutton.setAttribute("aria-label", "Close navigation menu");
    } else {
        hambutton.textContent = "☰";
        hambutton.setAttribute("aria-label", "Open navigation menu");
    }
});    