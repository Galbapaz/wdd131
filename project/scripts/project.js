
const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}



const yearSpan = document.querySelector("#currentyear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}



const dailyTip = document.querySelector("#daily-tip");

const tips = [
  "Read English every day.",
  "Practice speaking out loud.",
  "Watch videos with subtitles.",
  "Repeat new vocabulary.",
  "Write simple sentences."
];

if (dailyTip) {
  dailyTip.textContent = tips[Math.floor(Math.random() * tips.length)];
}



const motivationBtn = document.querySelector("#motivation-button");
const motivationText = document.querySelector("#motivation-message");

const messages = [
  "Keep going, you are improving!",
  "Small steps every day!",
  "Mistakes help you learn!",
  "Consistency is key!",
  "Believe in yourself!"
];

if (motivationBtn && motivationText) {
  motivationBtn.addEventListener("click", () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    motivationText.textContent = random;
  });
}



const resources = [
  {
    id: 1,
    title: "Vocabulary Builder",
    category: "vocabulary",
    description: "Practice useful words with flashcards."
  },
  {
    id: 2,
    title: "Listening Practice",
    category: "listening",
    description: "Improve comprehension with podcasts."
  },
  {
    id: 3,
    title: "Speaking Practice",
    category: "speaking",
    description: "Practice real conversations."
  },
  {
    id: 4,
    title: "Grammar Guide",
    category: "grammar",
    description: "Learn grammar rules easily."
  }
];



const imageMap = {
  vocabulary: "images/flashcards.jpg",
  listening: "images/podcast.webp",
  speaking: "images/conversation.avif",
  grammar: "images/grammar.jpg"
};



const container = document.querySelector("#resource-container");
const filterButtons = document.querySelectorAll(".filter-btn");



function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}



const favoritesList = document.querySelector("#favorites-list");

function displayFavorites() {
  if (!favoritesList) return;

  const favs = getFavorites();
  favoritesList.innerHTML = "";

  if (favs.length === 0) {
    favoritesList.innerHTML = "<li>No favorites yet</li>";
    return;
  }

  favs.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    favoritesList.appendChild(li);
  });
}



function addFavorite(title) {
  const favs = getFavorites();

  if (!favs.includes(title)) {
    favs.push(title);
    saveFavorites(favs);
    displayFavorites();
  }
}



function displayResources(list) {
  if (!container) return;

  container.innerHTML = "";

  list.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("resource-card");

    card.innerHTML = `
      <img src="${imageMap[item.category]}" 
           alt="${item.title}" 
           loading="lazy">

      <h3>${item.title}</h3>
      <p>${item.description}</p>

      <button class="button" data-title="${item.title}">
        Save Favorite
      </button>
    `;

    container.appendChild(card);
  });


  document.querySelectorAll(".button").forEach(btn => {
    btn.addEventListener("click", () => {
      addFavorite(btn.dataset.title);
    });
  });
}



if (container) {
  displayResources(resources);
  displayFavorites();
}



filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");

    const category = btn.dataset.category;

    if (category === "all") {
      displayResources(resources);
    } else {
      const filtered = resources.filter(r => r.category === category);
      displayResources(filtered);
    }
  });
});



const form = document.querySelector("#contact-form");
const response = document.querySelector("#form-response");

if (form && response) {

  const savedName = localStorage.getItem("name");

  if (savedName) {
    response.textContent = `Welcome back, ${savedName}`;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#full-name").value;

    if (!name) {
      response.textContent = "Please complete the form.";
      return;
    }

    localStorage.setItem("name", name);

    response.textContent = `Thank you, ${name}!`;
    form.reset();
  });
}