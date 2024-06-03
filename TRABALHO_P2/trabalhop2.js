var loginButton = document.getElementById('mybutton');
var minhaSenha = document.getElementById("Minhasenha")
loginButton.addEventListener('click',logar)
function logar(){
    var password = minhaSenha.value;
    console.log(password)
    if (password === 'UMASENHA') {
        // Senha correta, redirecionar para outra página
        window.location.href = "elenco_botafogo.html";
    }
    else {
    
        // Senha incorreta, exibir mensagem de erro ou realizar outra ação
        alert('Senha incorreta. Por favor, tente novamente.');
    }
}

    

// Função para obter os elencos de atletas
function getAthletes() {
    // Aqui você deve fazer uma chamada AJAX para os end-points fornecidos
    // e preencher o conteúdo da página principal com os dados obtidos
}

// Função para obter os detalhes de um atleta específico
function getAthleteDetails(athleteId) {
    // Aqui você deve fazer uma chamada AJAX para o end-point fornecido
    // e preencher o conteúdo da página de detalhes com os dados obtidos
}

// Event listener para filtrar a lista de atletas
// Aqui você precisa implementar a lógica para filtrar os atletas com base na entrada do usuário

// Event listener para selecionar um atleta e exibir os detalhes
// Aqui você precisa implementar a lógica para exibir os detalhes do atleta selecionado

// Event listener para lidar com a responsividade da página
// Aqui você precisa implementar a lógica para ajustar o layout com base no tamanho da tela
function writeToInput() {
    var inputValue = "";
    document.getElementById("password").value = inputValue;
}