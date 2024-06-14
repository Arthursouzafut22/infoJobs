
import { erro } from "./selectors.js";

export default function checkValidity(input) {

    erro.forEach((item) => {
        item.innerHTML = 'Obrigado dados corretos';
        item.style.color = 'green'
    });

    return input.style.border = '2px solid green';

}