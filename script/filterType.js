import listJobs from "./listJobs.js";
import { caixaJobs } from "./selectors.js";

document.querySelector(".home").addEventListener("click", () => {
  filterType("Home Office");
});

document.querySelector(".hibrido").addEventListener("click", () => {
  filterType("Hibrído");
});

export default function filterType(tipo) {
  const novoArray = Array.from(caixaJobs);
  const filterTypes = novoArray.filter((item) => {
    return item.modelo === tipo;
  });

  listJobs(filterTypes);
}
