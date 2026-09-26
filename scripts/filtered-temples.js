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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Atlanta Georgia",
  location: "Sandy Springs, Georgia, United States",
  dedicated: "1983, June, 1",
  area: 34500,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
  },
  {
  templeName: "Houston Texas",
  location: "Spring, Texas, United States",
  dedicated: "2000, August, 26",
  area: 33970,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/400x250/houston-temple04.jpg"
  },
  {
  templeName: "Accra Ghana",
  location: "Accra, Greater Accra, Ghana",
  dedicated: "2004, January, 11",
  area: 17500,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
  templeName: "Apia Samoa",
  location: "Apia, Pesega, Samoa",
  dedicated: "1983, August, 5",
  area: 18691,
  imageUrl:
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
  },
  {
  templeName: "Antofagasta Chile",
  location: "Antofagasta, Chile",
  dedicated: "2025, June, 15",
  area: 26163,
  imageUrl:
  
  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
  }
];

const templesContainer = document.querySelector(".filter-temples");

function displayTemples(templeList) {
    templesContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("article");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>${temple.location}</p>
            <p>${temple.dedicated}</p>
            <p>${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templesContainer.appendChild(card);
    });
}

displayTemples(temples);
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const filter = link.textContent;

        if (filter === "Home") {
            displayTemples(temples);
        }

        if (filter === "Old") {
        const oldTemples = temples.filter((temple) => {
            return Number(temple.dedicated.split(",")[0]) < 1900;
        });

        displayTemples(oldTemples);
        }

        if (filter === "New") {
        const newTemples = temples.filter((temple) => {
            return Number(temple.dedicated.split(",")[0]) > 2000;
        });

        displayTemples(newTemples);
        }

        if (filter === "Large") {
        const largeTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });

        displayTemples(largeTemples);
        }

        if (filter === "Small") {
        const smallTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });

        displayTemples(smallTemples);
        }
    });
});