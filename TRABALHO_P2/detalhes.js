document.addEventListener("DOMContentLoaded", async function () {
  if (localStorage.getItem("senha") === "UMASENHA") {
      await getJogador();
  } else {
      const erroLogin = document.createElement("h1");
      erroLogin.innerHTML = "É preciso estar logado para exibir detalhes";
      document.body.appendChild(erroLogin);
  }
});

const body = document.body;
const params = new URLSearchParams(window.location.search);
const idParam = params.get("id");
const id = idParam ? parseInt(idParam) : null;

function criaErroDetalhe() {
  const erroAtleta = document.createElement("h1");
  erroAtleta.innerHTML = "Atleta Não Encontrado(a)!!!";
  body.appendChild(erroAtleta);
}

function constroiAtleta(entrada) {
  const container_detalhe = document.createElement("article");
  const container_atleta = document.createElement("div");
  const container_descricao = document.createElement("div");

  const nome = document.createElement("h3");
  nome.innerHTML = entrada.nome;
  const imagem = document.createElement("img");
  imagem.src = entrada.imagem;
  imagem.alt = `foto de ${entrada.nome}`;
  const posicao = document.createElement("h3");
  posicao.innerHTML = entrada.posicao;

  const descricao = document.createElement("p");
  descricao.innerHTML = entrada.detalhes
  descricao.id = "descri"

  const naturalidade = document.createElement("p");
  naturalidade.innerHTML = `Naturalidade: ${entrada.naturalidade}`;
  naturalidade.id = "natu"

  const nascimento = document.createElement("p");
  nascimento.innerHTML = `Nascimento: ${entrada.nascimento}`;
  nascimento.id = "nasci"

  const altura = document.createElement("p");
  altura.innerHTML = `Altura: ${entrada.altura} m`;
  altura.id = "altule"

  const jogos = document.createElement("p");
  jogos.innerHTML = `Número de Jogos: ${entrada.n_jogos}`;
  jogos.id = "jogos"

  container_atleta.appendChild(imagem);
  container_atleta.appendChild(nome);
  container_atleta.appendChild(posicao);

  container_detalhe.appendChild(container_atleta);

  container_descricao.appendChild(descricao);
  container_descricao.appendChild(naturalidade);
  container_descricao.appendChild(nascimento);
  container_descricao.appendChild(altura);
  container_descricao.appendChild(jogos);

  container_detalhe.appendChild(container_descricao);

  body.appendChild(container_detalhe);
}

async function pegaJson(caminho) {
  const resposta = await fetch(caminho);
  const dados = await resposta.json();
  return dados;
}

async function getJogador() {
  if (!id) {
      criaErroDetalhe();
      return;
  }
  const url = `https://botafogo-atletas.mange.li/2024-1/${id}`;
  try {
      const jogador = await pegaJson(url);
      if (jogador.message === `Não há atleta com o id ${id}.`) {
          criaErroDetalhe();
      } else {
          constroiAtleta(jogador);
      }
  } catch (error) {
      criaErroDetalhe();
  }
}

function SairPaginaDetalhes() {
  window.location.href = "elenco_botafogo.html";
}
