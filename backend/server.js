const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

/* MIDDLEWARES */
app.use(cors());
app.use(express.json());

/* ROTA TESTE */
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API Carona Green online 🌱'
    });
});

/* ROTA CONTATO */
app.post('/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    /* VALIDAÇÃO */
    if (!nome || !email || !mensagem) {
        return res.status(400).json({
            error: 'Todos os campos são obrigatórios'
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            error: 'Email inválido'
        });
    }

    /* SIMULA SALVAMENTO */
    console.log('📩 Nova mensagem recebida:');
    console.log({ nome, email, mensagem });

    return res.status(200).json({
        success: true,
        message: 'Mensagem enviada com sucesso 🌱'
    });
});

/* SERVIDOR */
app.listen(PORT, () => {
    console.log(`🚗 Carona Green API rodando em http://localhost:${PORT}`);
});