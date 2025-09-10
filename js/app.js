onload = function () {
    carregarConteudoComXHR('header.html', 'header');
    carregarConteudoComXHR('footer.html', 'footer');

    const saudacao = document.getElementById("saudacao");
    const botao = document.getElementById("acaoBtn");

    // Verifica se há usuário salvo no localStorage
    let usuarioLogado = localStorage.getItem("usuario");

    function atualizarTela() {
      if (usuarioLogado) {
        saudacao.textContent = `'Seja bem-vindo,' ${usuarioLogado}`;
        botao.textContent = "Sair";
      } else {
        saudacao.textContent = "Seja bem-vindo, Visitante";
        botao.textContent = "Entrar";
      }
    }

    botao.addEventListener("click", () => {
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
}
//login
function fazerLogin() {
      const usuario = document.getElementById("usuario").value;
      const senha = document.getElementById("senha").value;

      // Exemplo simples (aqui poderia ter validação real em backend)
      if (usuario && senha) {
        localStorage.setItem("usuario", usuario);
        window.location.href = "index.html";
      } else {
        alert("Preencha usuário e senha!");
      }
    }
function cadastro() {
      window.location.href = "cadastro.html";
    }