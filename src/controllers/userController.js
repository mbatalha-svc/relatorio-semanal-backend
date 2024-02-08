const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
require('dotenv').config();

// Acesse a chave secreta do .env
const secretKey = process.env.JWT_SECRET;

exports.addUser = async (req, res) => {
    try {
        const newUser = new User({
            nome: req.body.nome,
            cpf: req.body.cpf,
            senha: req.body.senha,
            email: req.body.email,
            telefone: req.body.telefone,
        });

        await newUser.save();
        res.send('Usuário adicionado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao adicionar usuário');
    }
};

exports.login = async (req, res) => {
    const { cpf, senha } = req.body;
    try {
        const user = await User.findOne({ cpf });
    
        if (!user) {
            // O usuário não existe
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
    
        // Aqui você deve implementar a verificação da senha (hash/salt) e gerar o token JWT
        // Se a senha for válida, gere o token e retorne para o cliente
        console.log(senha)
        console.log(user.senha)
        const passwordMatch = await bcrypt.compare(senha, user.senha);
        console.log(passwordMatch)
        if (passwordMatch) {
            // Senha correta, você pode gerar um token JWT aqui e enviar de volta para o cliente
            // Ou fazer qualquer ação que precisa ser feita após o login bem-sucedido
            const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h'});
            
            console.log(token);
            res.json({ token });
        } else {
            // Caso contrário, retorne uma mensagem de erro de senha incorreta
            return res.status(401).json({ message: 'Senha incorreta' });
        }
        
    } catch (error) {
        console.error('Erro ao consultar o banco de dados:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}