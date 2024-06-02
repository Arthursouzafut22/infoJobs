
import  cardsJobs  from "./cardsJobs.js";

let jobsInfos = []

export default function listJobs  (jobs)  {
    const main = document.querySelector('.main');

    main.innerHTML = "";
    
    jobsInfos = jobs;

    jobs.map((info) => {
        return main.innerHTML += cardsJobs(info);
        
    });
}

