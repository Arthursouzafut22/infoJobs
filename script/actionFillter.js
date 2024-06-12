
 export default function actionFillter ()  {  
    const btnFiltrar = document.getElementById('btn-filtrar');
    const imgSeta = document.querySelector('.seta');
    
    const clickFilter = (event) => {
        const element = event.target.nextElementSibling;
        imgSeta.classList.toggle('ativo');
        
        return element.classList.toggle('active');
    }
    
    btnFiltrar.addEventListener('click', clickFilter);
    
    }