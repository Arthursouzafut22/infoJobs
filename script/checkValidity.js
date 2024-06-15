

export default function checkValidity(input) {


    const firstInput = input.nextElementSibling;
    const $egundInput = firstInput.nextElementSibling;

    $egundInput.innerHTML = "Obrigado dados corretos!";
    $egundInput.style.color = "green";

    if($egundInput) {
        firstInput.innerHTML = "";
    }

    return input.style.border = '2px solid green';

}