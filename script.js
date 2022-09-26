//Sélection des éléments du DOM
const buttonJePostule = document.querySelector(
  ".header__left__button__postule"
);

buttonJePostule.addEventListener("click", goIntoForm);

function goIntoForm() {
  //Codes ici
}

// Implementation du Multilangue

const navBarButton = document.querySelectorAll(".navbar__button button");
const navBar = document.querySelector(".navbar__button ");

// Tableau d'objet Traduction

let dataTraduction = {
  ENG: [
    {
      firstParagraph: `Boostez</span> votre Start-up avec
      <span class="header__left__paragraph__span__text">
        une solution numérique offerte`,
    },
    {
      secondParagraph: `Vous êtes une Start-up, participez à Talent for Start-ups challenge by
    Digital Africa et profitez d'un accompagnement gratuit pour la
    réalisation de vos projets numériques(Website, Application mobile,
    Logiciel de gestion) par les apprennants de Kinshasa Digital Academy.`,
    },

    {
      PostulText: `Je postule`,
    },
    {
      programTitle: `PROGRAMME`,
    },

    {
      programText: `Voici quelques étapes à suivre pour procéder à l'inscription du
  challenge Talent 4 Start Up`,
    },
  ],
  English: [
    {
      firstParagraph: `Boostez</span> votre Start-up avec
      <span class="header__left__paragraph__span__text">
        une solution numérique offerte`,
    },
    {
      secondParagraph: `Vous êtes une Start-up, participez à Talent for Start-ups challenge by
    Digital Africa et profitez d'un accompagnement gratuit pour la
    réalisation de vos projets numériques(Website, Application mobile,
    Logiciel de gestion) par les apprennants de Kinshasa Digital Academy.`,
    },

    {
      PostulText: `Je postule`,
    },
    {
      programTitle: `PROGRAMME`,
    },

    {
      programText: `Voici quelques étapes à suivre pour procéder à l'inscription du
  challenge Talent 4 Start Up`,
    },
  ],
};

// Selection Boutton
navBarButton.forEach((button) => {
  button.addEventListener("click", () => {
    navBar.querySelector(".active").classList.remove("active");
    button.classList.add("active");
    console.log(button.innerText);
  });
});

// Implementation  Du timer
let Dead = new Date("Oct 24, 2022 15:00:00").getTime();
let Divday = document.querySelector(".days");
let DivHour = document.querySelector(".hours");
let DivMin = document.querySelector(".Min");
let DivSec = document.querySelector(".sec");

let SettingIntervall = setInterval(() => {
  let now = new Date().getTime();
  let difference = Dead - now;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor((difference % (1000 * 60)) / 1000);

  Divday.innerText = days;
  DivHour.innerText = hours;
  DivMin.innerText = minutes;
  DivSec.innerText = secondes;

  if (difference < 0) {
    clearInterval(setInterval);
  }
}, 1000);
