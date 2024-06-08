
import axios from "https://cdn.skypack.dev/axios";
import  listJobs  from "./listJobs.js";
import  { jobsInfos }  from "./selectors.js";


window.addEventListener('load', () => {
    axioJobs();
});

export default async function axioJobs () {
    const res = await axios.get('db/db.json');

    if(!res.status === 200) {
        throw new Error('Erro na Chamada');
    }
    
    const response = await res.data;

    jobsInfos.length = 0;
    jobsInfos.push(...response.vagas);

    listJobs(jobsInfos);

}