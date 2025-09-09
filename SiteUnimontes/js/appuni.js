onload = function () {
    carregarConteudoComXHR('header.html', 'header');
    carregarConteudoComXHR('footer.html', 'footer');

    if (localStorage.getItem("logado") === "true" || localStorage.getItem("logado") === true) {
        document.getElementById("usuario").innerText = localStorage.getItem("nome");
        document.getElementById("acao").innerHTML = '<a href="" onclick="sair()">Sair</a>';
    }
    else {
        document.getElementById("usuario").innerText = localStorage.getItem("Visitante");
        document.getElementById("acao").innerHTML = '<a href="" onclick="entrar()">Entrar</a>';
    }
    //document.getElementById("acao").innerHTML = acao;
}
function entrar() {
    window.location.href = "login.html";
}
function sair() {
    localStorage.setItem("logado", "false");
    localStorage.removeItem("nome");
    window.location.reload;
}
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
