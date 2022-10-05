const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
    if(target.value.length > 2){ // contando a quantidade de caracteres digitados
        button.removeAttribute('disabled');
        return;
    } 

    button.setAttribute('disabled', '');
}

const handleSubmit = (event) =>{
    event.preventDefault(); //Inpedindo da pagina recarregar depois que aperta o botão
    
    localStorage.setItem('player', input.value); // salvando e armazenando o nome do jogador no Storage do browser
    window.location = 'pages/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);