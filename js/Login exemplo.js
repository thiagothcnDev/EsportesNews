var usuario = "admin";  // Usuário fixo
var senha = "1234"; // Senha fixa
var nome = "Dexter Pescopata" // Nome do usuário
var usuariodigitado; // Variável para armazenar o usuário digitado   
var senhadigitada; // Variável para armazenar a senha digitada
function login() {
    usuariodigitado = document.getElementById("username").value; // Obtém o valor do campo usuário
    senhadigitada = document.getElementById("password").value; // Obtém o valor do campo senha

    if (usuariodigitado === usuario && senhadigitada === senha) {
        // Se o usuário e senha estiverem corretos, exibe mensagem de sucesso
        //alert("Login bem-sucedido!");
        //document.getElementById("mensagem").innerText = "Login bem sucedido"; // Exibe mensagem de sucesso
        // Aqui você pode redirecionar o usuário para outra página, por exemplo:
        localStorage.setItem("nome", nome); // Armazena o nome do usuário no localStorage
        localStorage.setItem("logado", true); // Armazena o usuário logado no localStorage
        window.location.href=("home.html"); // Redireciona para a página principal
        } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
        //document.getElementById("mensagem").innerText = "Usuário ou senha incorretos. Tente novamente."; // Exibe mensagem de erro
    }
}   
