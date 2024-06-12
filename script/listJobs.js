
import  cardsJobs  from "./cardsJobs.js";



export default function listJobs (jobs)  {
    const totalResults = document.querySelector('.totalResults');
    const main = document.querySelector('.main');

    totalResults.innerHTML = `Total Vagas(${jobs.length})`;
    main.innerHTML = jobs.splice(9)
    main.innerHTML = "";

    jobs.map((info) => {
        return main.innerHTML += cardsJobs(info);
        
        });
}

