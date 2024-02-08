const WeeklyReport = require('../models/weeklyReportModel');

exports.addWeeklyReport = async (req, res) => {
    try {
        const newReport = new WeeklyReport({
            userCpf: req.body.userCpf,
            referenceWeek: req.body.referenceWeek,
            numOracaoDias: req.body.numOracaoDias,
            numJohreiMin: req.body.numJohreiMin,
            numJohreiRec: req.body.numJohreiRec,
            estudoMinutos: req.body.estudoMinutos,
            donativoValor: req.body.donativoValor,
            mitamamigakiIgrejaMinutos: req.body.mitamamigakiIgrejaMinutos,
            mitamamigakiCasaMinutos: req.body.mitamamigakiCasaMinutos,
            numReuniaoMembros: req.body.numReuniaoMembros,
            nomesReuniaoMembros: req.body.nomesReuniaoMembros,
            numReuniaoFreq: req.body.numReuniaoFreq,
            nomesReuniaoFreq: req.body.nomesReuniaoFreq,
            numVisitaMembros: req.body.numVisitaMembros,
            nomesVisitaMembros: req.body.nomesVisitaMembros,
            numVisitaFreq: req.body.numVisitaFreq,
            nomesVisitaFreq: req.body.nomesVisitaFreq,
            numEntrevistaMembros: req.body.numEntrevistaMembros,
            nomesEntrevistaMembros: req.body.nomesEntrevistaMembros,
            numEntrevistaFreq: req.body.numEntrevistaFreq,
            nomesEntrevistaFreq: req.body.nomesEntrevistaFreq,
            numFreqAcompanhado: req.body.numFreqAcompanhado,
            numFreqAula: req.body.numFreqAula,
            numFreqAtendidosMinistro: req.body.numFreqAtendidosMinistro,
            numOhikari: req.body.numOhikari,
            obs: req.body.obs
        });

        await newReport.save();
        res.send('Relatório semanal adicionado com sucesso');
    } catch (error) {
        res.status(500).send('Erro ao adicionar relatório semanal');
    }
};
