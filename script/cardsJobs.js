

export default function cardsJobs (job) {
   
    return `

          <div class="cards-info">
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
                    <button id="btn-cadastrar" data-id="${job.id} class="btn-cadastrar-${job.id}" >Candidatar</button>
                </div>
            </div>`
    
}

   
 

