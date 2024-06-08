
import listJobs from "./listJobs.js";
import { jobsInfos } from "./selectors.js";


document.querySelector('.home').addEventListener('click',() => {
    filterType('Home Office');

})

document.querySelector('.hibrido').addEventListener('click',() => {
    filterType('Hibrído');
})


export default function filterType(tipo) {
    const novoArray = Array.from(jobsInfos);
    const filterTypes = novoArray.filter((item) => {

        return item.modelo === tipo;
    });

      listJobs(filterTypes);
}