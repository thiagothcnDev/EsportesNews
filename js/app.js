window.onload = function () {
  carregarConteudoComXHR('header.html', 'header');
  carregarConteudoComXHR('footer.html', 'footer');

  // Funções de login/logout
  const saudacao = document.getElementById("saudacao");
  const botao = document.getElementById("acaoBtn");

  function atualizarTela() {
    let usuarioLogado = localStorage.getItem("usuario"); // sempre atualizado
    if (usuarioLogado) {
      saudacao.textContent = `Seja bem-vindo, ${usuarioLogado}`;
      botao.textContent = "Sair";
    } else {
      saudacao.textContent = "Seja bem-vindo, Visitante";
      botao.textContent = "Entrar";
    }
  }

  botao.addEventListener("click", () => {
    let usuarioLogado = localStorage.getItem("usuario");
    if (usuarioLogado) {
      // Logout → remove usuário e recarrega
      localStorage.removeItem("usuario");
      window.location.href = "index.html";
    } else {
      // Vai para tela de login
      window.location.href = "login.html";
    }
  });

  atualizarTela();
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
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Exemplo simples (poderia validar no backend)
  if (usuario && senha) {
    localStorage.setItem("usuario", usuario);
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
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html";
    }

    function voltarLogin() {
      window.location.href = "login.html";
    }