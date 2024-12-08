// Importando as dependências
const express = require('express');
const path = require('path');

// Inicializando o aplicativo Express
const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do Front-end
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para receber dados do formulário
app.post('/api/formulario', (req, res) => {
    console.log('Dados recebidos:', req.body); // Exibe os dados no console
    res.status(200).send('Dados recebidos com sucesso!'); // Resposta ao cliente
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});