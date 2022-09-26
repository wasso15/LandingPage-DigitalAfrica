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
      firstParagraph: `Boost </span> your Start-up with
      <span class="header__left__paragraph__span__text">
        an offered digital solution`,
    },
    {
      secondParagraph: `You are a Start-up, participate to Talent for Start-ups challenge by
    Digital Africa and benefit from a free accompaniment for the
    realization of your digital projects (Website, Mobile application,
     Management software) by Kinshasa Digital Academy learners.`,
    },

    {
      PostulText: `I postulate`,
    },
    {
      programTitle: `PROGRAM`,
    },

    {
      programText: `Here are some steps to follow to register the
   Talent 4 Start-Up challenge`,
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

//Soumission du formulaire
const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Merci pour votre soumission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Oops! Il y a eu un problème lors de la soumission de votre formulaire";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
