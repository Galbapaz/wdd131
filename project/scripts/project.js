const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    const isOpen = mainNav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", `${isOpen}`);
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

const dailyTipElement = document.querySelector("#daily-tip");

const dailyTips = [
  "Read a short text in English every day.",
  "Repeat new vocabulary out loud to remember it better.",
  "Watch videos with English subtitles and write new words.",
  "Practice speaking for five minutes, even if you make mistakes.",
  "Review old words before learning new ones."
];

if (dailyTipElement) {
  const randomTip = dailyTips[Math.floor(Math.random() * dailyTips.length)];
  dailyTipElement.textContent = randomTip;
}

const motivationButton = document.querySelector("#motivation-button");
const motivationMessage = document.querySelector("#motivation-message");

const motivationMessages = [
  "Every small step helps you improve your English.",
  "Mistakes are part of the learning process.",
  "Practice with patience and you will see progress.",
  "Consistency is more important than perfection.",
  "You can learn more when you stay curious and active."
];

if (motivationButton && motivationMessage) {
  motivationButton.addEventListener("click", () => {
    const randomMessage =
      motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    motivationMessage.textContent = randomMessage;
  });
}

const resources = [
  {
    id: 1,
    title: "Vocabulary Builder",
    category: "vocabulary",
    description: "Practice useful words with flashcards, lists, and review activities."
  },
  {
    id: 2,
    title: "Listening Practice",
    category: "listening",
    description: "Improve comprehension with short audio clips, songs, and simple videos."
  },
  {
    id: 3,
    title: "Speaking Corner",
    category: "speaking",
    description: "Use questions, repetition, and shadowing techniques to speak more confidently."
  },
  {
    id: 4,
    title: "Grammar Guide",
    category: "grammar",
    description: "Review grammar rules and examples in a clear and organized way."
  },
  {
    id: 5,
    title: "Word Review Routine",
    category: "vocabulary",
    description: "Create a habit of reviewing words during the week to remember them longer."
  },
  {
    id: 6,
    title: "Conversation Practice",
    category: "speaking",
    description: "Answer simple questions and talk about daily life to build fluency."
  }
];

const resourceContainer = document.querySelector("#resource-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const favoritesList = document.querySelector("#favorites-list");

function getFavorites() {
  const savedFavorites = localStorage.getItem("favoriteResources");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem("favoriteResources", JSON.stringify(favorites));
}

function displayFavorites() {
  if (!favoritesList) {
    return;
  }

  const favorites = getFavorites();
  favoritesList.innerHTML = "";

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<li>No favorite resources saved yet.</li>";
    return;
  }

  favorites.forEach((favorite) => {
    const listItem = document.createElement("li");
    listItem.textContent = favorite;
    favoritesList.appendChild(listItem);
  });
}

function addFavorite(title) {
  const favorites = getFavorites();

  if (!favorites.includes(title)) {
    favorites.push(title);
    saveFavorites(favorites);
    displayFavorites();
  }
}

function displayResources(resourceList) {
  if (!resourceContainer) {
    return;
  }

  resourceContainer.innerHTML = "";

  resourceList.forEach((resource) => {
    const article = document.createElement("article");
    article.classList.add("resource-card");

    article.innerHTML = `
      <h2>${resource.title}</h2>
      <p><strong>Category:</strong> ${resource.category}</p>
      <p>${resource.description}</p>
      <button class="button favorite-button" data-title="${resource.title}">Save Favorite</button>
    `;

    resourceContainer.appendChild(article);
  });

  const favoriteButtons = document.querySelectorAll(".favorite-button");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      addFavorite(title);
    });
  });
}

if (resourceContainer) {
  displayResources(resources);
  displayFavorites();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active-filter"));
    button.classList.add("active-filter");

    const category = button.getAttribute("data-category");

    if (category === "all") {
      displayResources(resources);
    } else {
      const filteredResources = resources.filter(
        (resource) => resource.category === category
      );
      displayResources(filteredResources);
    }
  });
});

const contactForm = document.querySelector("#contact-form");
const formResponse = document.querySelector("#form-response");

if (contactForm && formResponse) {
  const savedName = localStorage.getItem("studentName");

  if (savedName) {
    formResponse.textContent = `Welcome back, ${savedName}. You can update your information below.`;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.querySelector("#full-name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const skill = document.querySelector("#skill").value;
    const message = document.querySelector("#message").value.trim();
    const frequency = document.querySelector('input[name="frequency"]:checked');

    if (!fullName || !email || !skill || !message || !frequency) {
      formResponse.textContent =
        "Please complete all fields before submitting the form.";
      return;
    }

    localStorage.setItem("studentName", fullName);

    formResponse.textContent = `Thank you, ${fullName}. Your favorite skill is ${skill}, and your message was received successfully.`;

    contactForm.reset();
  });
}