
import valorName from './valorName.js'
import listJobs from './listJobs.js';



const search = document.getElementById('search');


 export default function filterJobs()  {

    const main = document.querySelector('.main');

    let value = valorName(); 

    const newArray = Array.from(jobsInfos);
    const fillt = newArray.filter((item) => item.nome.toLowerCase().includes(value));
    
    if(value.includes(fillt)) {
       main.innerHTML = `<span class="erro">Nenhum vaga encontrada...</span>`;
    }else {
        return listJobs(fillt);
    }

}

search.addEventListener('keyup', filterJobs);

// const search = document.getElementById('search');