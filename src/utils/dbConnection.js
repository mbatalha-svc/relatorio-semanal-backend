// dbConnection.js
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

async function connectDB() {
    try {
        console.log(uri)
        
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conectado ao MongoDB Atlas");
        // Aqui você pode exportar o client ou fazer outras configurações
    } catch (e) {
        // Tratamento de erros
        // Encerramento de conexão
        console.error("Erro ao conectar ao MongoDB Atlas", e);
    }
}

module.exports = connectDB;
