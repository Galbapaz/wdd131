
document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = 
    `Last Modified: ${document.lastModified}`;




const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/aba-nigeria-temple.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/manti-utah-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/yigo-guam-temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/washington-dc-temple.webp"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico-city-temple.webp"
    }
];




const container = document.getElementById("templeCards");




function createTempleCard(temple) {

    const card = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";
    img.width = 400;
    img.height = 250;

    card.appendChild(h2);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
}




function displayTemples(templeList) {
    container.innerHTML = "";
    templeList.forEach(createTempleCard);
}




displayTemples(temples);






document.getElementById("home").addEventListener("click", () => {
    displayTemples(temples);
});


document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(temple => 
        parseInt(temple.dedicated) < 1900
    );
    displayTemples(oldTemples);
});


document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(temple => 
        parseInt(temple.dedicated) > 2000
    );
    displayTemples(newTemples);
});


document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(temple => 
        temple.area > 90000
    );
    displayTemples(largeTemples);
});


document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(temple => 
        temple.area < 10000
    );
    displayTemples(smallTemples);
});

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
