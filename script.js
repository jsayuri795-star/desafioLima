const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "sayuu" && senha === "c66c40plqvqg") {
       window.location.href = "sucesso.html";
    } else {
        window.location.href = "falhou.html";
    }
});