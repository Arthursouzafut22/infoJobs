import { btnPlus, caixaJobs } from "./selectors.js";
import cardsJobs from "./cardsJobs.js";

export default function plusPage() {
  const section = document.querySelector(".section-2");

  section.innerHTML = "";

  const mapa = caixaJobs.map((item) => {
    if (item.id >= 10) {
      section.innerHTML += cardsJobs(item);
    }
  });

  return mapa;
}

btnPlus.addEventListener("click", plusPage);
