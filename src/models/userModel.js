// userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    senha: String,
    email: String,
    telefone: String,
    papel: {
        type: String,
        enum: ['regular', 'responsavel', 'admin'],
        default: 'regular'
    },
    responsaveis: [String], // CPFs dos responsáveis
    subordinados: [String]  // CPFs dos subordinados
});

// Antes de salvar um novo usuário, criptografe a senha
userSchema.pre('save', async function (next) {
    if (!this.isModified('senha')) return next();
    console.log("PRE SAVE")
    try {
      const hashedPassword = await bcrypt.hash(this.senha, 10); // 10 é o número de rounds de hashing (custo)
      console.log(hashedPassword)
      this.senha = hashedPassword;
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = mongoose.model('User', userSchema);
