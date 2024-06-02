
 export default function actionFillter ()  {  
    const btnFiltrar = document.getElementById('btn-filtrar');
    
    const clickFilter = (event) => {
        const element = event.target.nextElementSibling;
        
        return element.classList.toggle('active');
    }
    
    btnFiltrar.addEventListener('click', clickFilter);
    
    }