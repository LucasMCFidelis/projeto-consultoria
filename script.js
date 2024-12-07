document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe uma mensagem de confirmação
    alert('Mensagem enviada com sucesso!');

    // Limpa o formulário
    this.reset();
});