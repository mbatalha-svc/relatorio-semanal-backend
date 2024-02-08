const Semana = require('../models/semanaModel');

exports.addSemana = async (req, res) => {
    console.log("ADDSEMANA")
    try {
        const newSemana = new Semana({
            ano: req.body.ano,
            semana: req.body.semana,
            editavel: null,
            periodo: null
        });
        console.log("semana"+newSemana)
        await newSemana.save();
        res.send('Semana adicionada com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao adicionar semana');
    }
};
exports.getAllSemana = async (req, res) => {
    try {
        const semanas = await Semana.find(); // Encontra todos os itens no banco de dados
        res.json(semanas); // Envia os itens como resposta JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Em caso de erro, envia uma resposta de erro
    }
}