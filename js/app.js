window.onload = function () {
  carregarConteudoComXHR('header.html', 'header');
  carregarConteudoComXHR('footer.html', 'footer');

  // Funções de login/logout
  var nome = document.getElementById("nome");
  var acao = document.getElementById("acao");

  if (localStorage.getItem("logado") === null) {
    localStorage.setItem("logado", false);
  }

  let usuarioLogado = localStorage.getItem("usuario");
  let logado = localStorage.getItem("logado") === "true";
  nome.innerText = logado && usuarioLogado ? usuarioLogado : "Visitante";
  if (logado) {
    acao.innerHTML = '<a href="" onclick="sair()" class="btn">Sair</a>';
  } else {
    acao.innerHTML = '<a href="login.html" class="btn">Entrar</a><a href="cadastro.html" class="btn">Cadastre-se</a>';
  }
};

// Função para carregar conteúdo via XHR
function carregarConteudoComXHR(url, idElemento) {
  const elemento = document.getElementById(idElemento);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      elemento.innerHTML = xhr.responseText;
    } else if (xhr.readyState === 4) {
      console.error('Erro ao carregar conteúdo. Status:', xhr.status);
      elemento.innerHTML = '<p>Falha ao carregar o conteúdo.</p>';
    }
  };
  xhr.send();
}

// Login
function fazerLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  // Exemplo simples
  if (usuario === localStorage.getItem("usuario") && senha === localStorage.getItem("senha")) {
    localStorage.setItem("usuario", usuario); localStorage.setItem("logado", "true");
    window.location.href = "index.html";
  } else {
    alert("Preencha usuário e senha!");
  }
}
//Pagina de cadastro
function cadastro() {
  window.location.href = "cadastro.html";
}
function fazerCadastro() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  if (!usuario || !senha || !confirmarSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não conferem!");
    return;
  }

  // salvar local simplesmente
  localStorage.setItem("usuario", usuario);
  localStorage.setItem("senha", senha);
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}
function sair() {
  localStorage.setItem("logado", "false");
  usuarioLogado = "Visitante";
  window.location.href = "login.html";
}