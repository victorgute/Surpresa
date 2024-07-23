function revelarMensagem() {
    var mensagem = document.getElementById("mensagem");
    var body = document.body;
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
        body.classList.add("revelar");
    } else {
        mensagem.style.display = "none";
        body.classList.remove("revelar");
    }
}
