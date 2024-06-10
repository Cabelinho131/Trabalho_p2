var loginButton = document.getElementById('mybutton');
var minhaSenha = document.getElementById("Minhasenha")
var senhaCorreta = 'UMASENHA';
loginButton.addEventListener('click',logar)
function logar(){
    var password = minhaSenha.value;
    console.log(password)
    if (password === 'UMASENHA') {
      
        window.location.href = "elenco_botafogo.html";
    }
    else {
        alert('Senha incorreta. Por favor, tente novamente.');
    }
    
}



minhaSenha.addEventListener('keypress', function(event) {
   
    if (event.key === 'Enter') {
        logar();
    }
});


function compararSenha() {
    const senha = 'UMASENHA';
    const hash = MD5('UMASENHA');
    const hashPredefinido ='f8b0d306cb8ee3fd94a8fe669bb8c202'

    if (Hash === hashPredefinido) {
        console.log('As senhas correspondem.');
    } else {
        alert('Senha incorreta. Por favor, tente novamente.');
    }
    }

    function SairPaginaElencos(){
        window.location.href = "index.html";
    }
    
   
    document.addEventListener('DOMContentLoaded', function() {
        BuscarMasculino();
    });
    
    
    document.getElementById("MButtton").addEventListener("click", function BuscarMasculino() {
       
    })
   

    document.getElementById('MButtton').addEventListener('click', function() {
            BuscarMasculino();
    })
    
    
    function BuscarMasculino() {
        
        const url = 'https://botafogo-atletas.mange.li/2024-1/masculino';
       
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível obter os elencos.');
        }
        return response.json();
    })
    .then(data => {
        mostrarElencos(data); // Mostra os elencos apenas após os dados serem recebidos
    })
    .catch(error => {
        console.error('Erro ao obter os elencos:', error);
    });
}


function mostrarElencos(elencos) {
    // Obtém a referência ao elemento onde os elencos serão exibidos
    const listaElencos = document.getElementById('container-elencos');

    elencos.forEach(jogador => {
        // Cria um elemento <li> para o jogador
        const itemElenco = document.createElement('div-container');

        // Define o conteúdo do elemento <li> com as informações do jogador
        itemElenco.innerHTML = `
          
           <a href="${jogador.url_detalhes}">
                <img src="${jogador.imagem}" alt="Imagem do jogador">
                <h3>${jogador.nome}</h3>
                <p>${jogador.elenco}</p>
                <p>${jogador.n_jogos}</p>
            </a>
        `;

        listaElencos.appendChild(itemElenco);
    });
}
document.getElementById("ElasButton").addEventListener("click", function BuscarFeminino() {
       
})

   
function BuscarFeminino() {
    
    const url = 'https://botafogo-atletas.mange.li/2024-1/feminino';
   
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Não foi possível obter os elencos.');
    }
    return response.json();
})
.then(data => {
    mostrarElencos(data); // Mostra os elencos apenas após os dados serem recebidos
})
.catch(error => {
    console.error('Erro ao obter os elencos:', error);
});
}


function mostrarElencos(elencos) {
    
// Obtém a referência ao elemento onde os elencos serão exibidos
const listaElencos = document.getElementById('container-elencos');

// Limpa o conteúdo atual da lista
listaElencos.innerHTML ='lista-Elencos';

elencos.forEach(jogador => {
    // Cria um elemento <li> para o jogador
    const itemElenco = document.createElement('li');

    // Define o conteúdo do elemento <li> com as informações do jogador
    itemElenco.innerHTML = `
        <a href="${jogador.url_detalhes}">
            <img src="${jogador.imagem}" alt="Imagem do jogador">
            <h3>${jogador.nome}</h3>
            <p>${jogador.elenco}</p>
            <p>${jogador.n_jogos}</p>
        </a>
    `;

    listaElencos.appendChild(itemElenco);
});
}



function BuscarElencoCompleto() {
    
    const url = 'https://botafogo-atletas.mange.li/2024-1/all';
   
fetch(url)
.then(response => {
    if (!response.ok) {
        throw new Error('Não foi possível obter os elencos.');
    }
    return response.json();
})
.then(data => {
    mostrarElencos(data); // Mostra os elencos apenas após os dados serem recebidos
})
.catch(error => {
    console.error('Erro ao obter os elencos:', error);
});
}


function mostrarElencos(elencos) {
// Obtém a referência ao elemento onde os elencos serão exibidos
const listaElencos = document.getElementById('lista-Elencos');

// Limpa o conteúdo atual da lista
listaElencos.innerHTML = 'lista-Elencos';

elencos.forEach(jogador => {
    // Cria um elemento <li> para o jogador
    const itemElenco = document.createElement('li');

    // Define o conteúdo do elemento <li> com as informações do jogador
    itemElenco.innerHTML = `
   
        <a href="${jogador.url_detalhes}">
            <img src="${jogador.imagem}" alt="Imagem do jogador"  class="Imagens">
            <h3>${jogador.nome}</h3>
         
           
        </a>
    `;

    listaElencos.appendChild(itemElenco);
});
document.getElementById('carregando').style.display = 'none';
document.getElementById('lista-Elencos').style.display = 'block';
}

function buscarJogador(event) {
    if (event.key === 'Enter') {
        const termoBusca = document.getElementById("Buscar").value.toLowerCase(); 
        const itensElenco = document.querySelectorAll(".item-elenco");

        itensElenco.forEach(function(item) {
            const nomeJogador = item.querySelector(".nome-jogador").textContent.toLowerCase();
    
            if (nomeJogador.includes(termoBusca)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
}


document.getElementById("Buscar").addEventListener("keypress", buscarJogador);



function tornarImagensClicaveis() {
    // Seleciona todas as imagens dentro do conteúdo da página
    const imagens = document.querySelectorAll('img');

    // Itera sobre cada imagem
    imagens.forEach(imagem => {
        // Cria um elemento de link
        const link = document.createElement('a');
        link.href = 'detalhes.html'; // Substitua 'detalhes.html' pelo URL da página de detalhes

        // Move a imagem para dentro do link
        link.appendChild(imagem.cloneNode(true)); // Clone a imagem para evitar removê-la do seu local original
        imagem.parentNode.replaceChild(link, imagem); // Substitui a imagem pelo link no DOM
    });
    window.onload = tornarImagensClicaveis;
}


