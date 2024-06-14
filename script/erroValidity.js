
import { erro } from "./selectors.js";

export default function erroValidity(input) {

    erro.forEach((item) => {
        item.innerHTML = 'Preencha os dados corretamente';
        item.style.color = 'red'
    });

    return input.style.border = '2px solid red';

}