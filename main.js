const form = document.getElementById('form-numbers');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');
let formEValido = false;

function validaNumeros(numeroA, numeroB){
    if (numeroB > numeroA){
        return true;
    }
    else{
        return;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    const mensagemSucesso = `Formulário é valido. Número A: <b>${numeroA.value}</b> menor que o número B: <b>${numeroB.value}</b>`;
    
    formEValido = validaNumeros(parseFloat(numeroA.value), parseFloat(numeroB.value))
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroA.value = '';
        numeroB.value = '';
    }
})

function verificarValidade() {
    const valorA = parseFloat(numeroA.value);
    const valorB = parseFloat(numeroB.value);
    if (!isNaN(valorB)) {
        if (validaNumeros(valorA, valorB)) {
            numeroA.style.border = ''; // Remove a borda vermelha se válido
            document.querySelector('.error-message').style.display = 'none';
        } else {
            numeroA.style.border = '1px solid red'; // Adiciona a borda vermelha se inválido
            document.querySelector('.error-message').style.display = 'block';
        }
    } else {
        // Se numeroB não está preenchido, não faz nada
        numeroA.style.border = ''; // Remove a borda vermelha caso o campo esteja vazio
        document.querySelector('.error-message').style.display = 'none';
    }
}
// Adiciona o evento keyup para o campo numeroA
numeroA.addEventListener('keyup', verificarValidade);

// Adiciona o evento keyup para o campo numeroB
numeroB.addEventListener('keyup', verificarValidade);