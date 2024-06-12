let data;

document.addEventListener('DOMContentLoaded', function () {
});
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
                mostrarElencos(data);
            })
            .catch(error => {
                console.error('Erro ao obter os elencos:', error);
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
                mostrarElencos(data);
            })
            .catch(error => {
                console.error('Erro ao obter os elencos:', error);
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
                mostrarElencos(data);
            })
            .catch(error => {
                console.error('Erro ao obter os elencos:', error);
            });
    };

    
        var loginButton = document.getElementById('mybutton');
        var minhaSenha = document.getElementById("Minhasenha");

           minhaSenha.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Verifica se a tecla pressionada é "Enter"
            event.preventDefault(); // Impede o envio padrão do formulário
            logar();
            }
        });
 
    function logar() {
      
        var senhaInserida = document.getElementById('Minhasenha').value;

        // Verifica se a senha inserida é igual à senha correta
        if (senhaInserida === 'UMASENHA') {
            // Redireciona para a página de elenco_botafogo.html se a senha estiver correta
            window.location.href = "elenco_botafogo.html";
        } else {
            // Se a senha estiver incorreta, exibe uma mensagem de alerta
            alert('Senha incorreta. Por favor, tente novamente.');
        }
    }

    

function SairPaginaElencos() {
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function () {
    BuscarMasculino();
});

document.getElementById("MButtton").addEventListener("click", BuscarMasculino);

document.getElementById("ElasButton").addEventListener("click", BuscarFeminino);

document.getElementById("EButton").addEventListener("click", BuscarElencoCompleto);





function mostrarElencos(elencos) {
    const listaElencos = document.getElementById('lista-Elencos');

   

    listaElencos.innerHTML = '';

    elencos.forEach(jogador => {

        const itemElenco = document.createElement('li');


        itemElenco.innerHTML = `
   
        <a href="${jogador.url_detalhes}">
            <img src="${jogador.imagem}" alt="Imagem do jogador"  class="Imagens">
            <h3>${jogador.nome}</h3>
         
           
        </a>
    `;

        listaElencos.appendChild(itemElenco);
    });

}

function buscarJogador(event) {
    if (event.key === 'click') {
        const termoBusca = document.getElementById("Buscar").value.toLowerCase();
        const itensElenco = document.querySelectorAll(".item-elenco");

        itensElenco.forEach(function (item) {
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


const array = data
function montarElenco(elenco) {
    const listaElencos = document.getElementById('elencos');
    listaElencos.innerHTML = ''; 

    elenco.forEach(jogador => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome}`;
        listaElencos.appendChild(li);
    });
}



document.addEventListener('DOMContentLoaded', function () {
    BuscarMasculino();
});

document.getElementById("EButton").addEventListener("click", function() {
    BuscarElencoCompleto().then(function(data) {
        filtrarElencos(data);
    });
});

function filtrarElencos() {
    const termoBusca = document.getElementById('Buscar').value.trim().toLowerCase();
    const itensElenco = document.querySelectorAll("#elencos li");

    itensElenco.forEach(function (item) {
        const nomeJogador = item.textContent.toLowerCase();

        if (nomeJogador.includes(termoBusca)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}