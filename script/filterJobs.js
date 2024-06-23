import valorName from "./valorName.js";
import listJobs from "./listJobs.js";
import { search, caixaJobs } from "./selectors.js";

export default function filterJobs() {
  const main = document.querySelector(".main");

  let value = valorName();

  const newArray = Array.from(caixaJobs);
  const fillt = newArray.filter((item) =>
    item.nome.toLowerCase().includes(value)
  );

  if (value.includes(fillt)) {
    main.innerHTML = `<span class="erro">Nenhum vaga encontrada...</span>`;
  } else {
    return listJobs(fillt);
  }
}

search.addEventListener("keyup", filterJobs);
