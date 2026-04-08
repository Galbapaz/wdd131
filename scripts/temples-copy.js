
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },



{
  templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019-03-10",
  area: 41010,
  imageUrl: "https://www.churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/3840%2C/0/default"
},
{
  templeName: "Salt Lake",
  location: "Utah, USA",
  dedicated: "1893-04-06",
  area: 253000,
  imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/saltlakecityutah_large.jpg"
},
{
  templeName: "Laie Hawaii",
  location: "Hawaii, USA",
  dedicated: "1919-11-27",
  area: 42100,
  imageUrl: "https://news-pacific.churchofjesuschrist.org/media/960x540/laie_hawaii_temple1b.jpg"
}





];


function displayTemples(filteredTemples) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    container.appendChild(card);
  });
}


document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.area < 10000));
});


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

displayTemples(temples);

