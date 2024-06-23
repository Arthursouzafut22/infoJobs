
export default function erroValidity(input) {

    const elementInput = input.nextElementSibling;
    const $egundInput = elementInput.nextElementSibling;
    
    elementInput.innerHTML = "Preencha os dados corretamente!";
    elementInput.style.color = "red";

    if(elementInput) {
        $egundInput.innerHTML = "";
    }

    return input.style.border = '2px solid red';

}