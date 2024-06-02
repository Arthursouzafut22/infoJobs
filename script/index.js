
import axios from "https://cdn.skypack.dev/axios";

// import actionFillter  from "./actionFillter.js";
// import  axioJobs  from "./axioJobs.js";
// import filterJobs from "./filterJobs.js";


// actionFillter();
// axioJobs();
// filterJobs();



const actionFillter = () => {  
const btnFiltrar = document.getElementById('btn-filtrar');
const imgSeta = document.querySelector('.seta');

const clickFilter = (event) => {
    const element = event.target.nextElementSibling;
    imgSeta.classList.toggle('ativo');

    return element.classList.toggle('active');
}

btnFiltrar.addEventListener('click', clickFilter);

}
actionFillter();







window.addEventListener('load', () => {
    axioJobs();
    
});


let jobsInfos = [];


const axioJobs = async () => {
    const res = await axios.get('db/db.json');

    if(!res.status === 200) {
        throw new Error('Erro na Chamada');
    }

    const response = await res.data;

    jobsInfos = response.vagas;

    listJobs(jobsInfos);

}




const listJobs = (jobs = []) => {
    const totalResults = document.querySelector('.totalResults');
    const main = document.querySelector('.main');

    main.innerHTML = "";
    
    jobsInfos = jobs;
    totalResults.innerHTML = `Total Vagas(${jobsInfos.length})`

    jobs.map((info) => {
        return main.innerHTML += cardsJobs(info);
        
    });
}




const cardsJobs = (job) => {

    return `

          <div class="cards-info" data-name="${job.nome}">
                <h1>${job.nome}</h1>
                <p>${job.empresa}</p>
                <p>${job.modelo}</p>
                <span>Tempo integral</span>
                <ul>
                    <li>${job.descricao[0]}</li>
                    <li>${job.descricao[1]}</li>
                </ul>
                <div class="cc-info">
                    <span>${job.anunciada}</span>
                    <button id="btn-cadastrar">Candidatar</button>
                </div>
            </div>`
}












const search = document.getElementById('search');

function filterJobs()  {
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
filterJobs()

search.addEventListener('keyup', filterJobs);



function valorName()  {
    let valor = search.value;
    return valor;
}







document.querySelector('.home').addEventListener('click',() => {
    carregarDados('Home Office');
})

document.querySelector('.hibrido').addEventListener('click',() => {
    carregarDados('Hibrído');
})


function carregarDados(tipo) {
    const novoArray = Array.from(jobsInfos);
    const filterTypes = novoArray.filter((item) => {
        console.log(`Comparando: ${item.modelo} === ${tipo}`);

        return item.modelo === tipo;
    });


     return listJobs(filterTypes);
}


