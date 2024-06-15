

import { form, name, senha } from "./selectors.js";
import erroValidity from "./erroValidity.js";
import checkValidity from "./checkValidity.js";


export default function formValidity(event) {
    event.preventDefault();

    if(name.value === '') erroValidity(name);
    else checkValidity(name);
    
    if(name.value.length <= 4) erroValidity(name)
    else checkValidity(name);

    if(name.value === name.value.toUpperCase()) erroValidity(name);
    else checkValidity(name)


    if(senha.value === '') erroValidity(senha);
    else checkValidity(senha);

    if(senha.value.length <= 4) erroValidity(senha);
    else checkValidity(senha);

    if(senha.value === senha.value.toUpperCase()) erroValidity(senha);
    else checkValidity(senha);
 
}



form.addEventListener('submit', formValidity);