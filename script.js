// 1. Seleciona o formulário pelo ID que criamos no HTML
const formContato = document.getElementById('form-contato');

// 2. Adiciona um "espião" que detecta quando o botão de submit for clicado
formContato.addEventListener('submit', function(event) {
    
    // Impedir o comportamento padrão do navegador de recarregar a página ao enviar
    event.preventDefault();

    // 3. Capturar os valores que o usuário digitou, removendo espaços em branco nas pontas (.trim)
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // VALIDAÇÕES OBRIGATÓRIAS

    // 1 - O nome não pode estar vazio
    if (nome === '') {
        alert('Por favor, preencha o seu nome completo.');
        return; // O "return" para a função aqui e impede o envio
    }

    // 2 - O e-mail precisa ter um formato válido
    // Usei uma Expressão Regular (Regex) simples para fazer esse teste
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido (ex: usuario@dominio.com).');
        return;
    }

    // 3 - A mensagem não pode estar vazia
    if (mensagem === '') {
        alert('Por favor, escreva a sua mensagem.');
        return;
    }

    // SIMULAÇÃO DE ENVIO BEM-SUCEDIDO

    // Se o código chegou até aqui, é porque passou em todas as validações
    alert('Mensagem enviada com sucesso! Obrigado pelo contato, ' + nome + '.');

    // Limpar todos os campos do formulário, deixando-o pronto para um novo uso
    formContato.reset();
});