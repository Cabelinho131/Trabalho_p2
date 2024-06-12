let data;

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
}

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('mybutton');
    var minhaSenha = document.getElementById("Minhasenha");


});

function logar() {
    var senhaInserida = document.getElementById('Minhasenha').value;

    if (senhaInserida === 'UMASENHA') {
        localStorage.setItem('senha', senhaInserida);
        window.location.href = "elenco_botafogo.html";
    } else {
        alert('Senha incorreta. Por favor, tente novamente.');
    }
}

function SairPaginaElencos() {
    window.location.href = "index.html";
}

function mostrarElencos(elencos) {
    const listaElencos = document.getElementById('lista-Elencos');
    listaElencos.innerHTML = '';

    elencos.forEach(jogador => {
 
        const itemElenco = document.createElement('li');
       
        itemElenco.innerHTML = `
        
            <a href="${`detalhes.html?id=${jogador.id}`}">
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



const array = data;

function montarElenco(elenco) {
    const listaElencos = document.getElementById('elencos');
    listaElencos.innerHTML = '';

    elenco.forEach(jogador => {
        const li = document.createElement('li');
        li.textContent = `${jogador.nome}`;
        listaElencos.appendChild(li);
    });
}



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

document.addEventListener("DOMContentLoaded", function () {
    const senhaArmazenada = localStorage.getItem("senha");
    console.log("Senha armazenada:", senhaArmazenada);

    if (senhaArmazenada === "UMASENHA") {
        console.log("Senha armazenada corretamente.");

    } else {
        console.log("Senha não encontrada ou incorreta.");
        const erroLogin = document.createElement("h1");
        erroLogin.innerHTML = "É preciso estar logado para exibir detalhes";
        document.body.appendChild(erroLogin);
    }
});

