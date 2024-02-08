// weeklyRecordModel.js
const mongoose = require('mongoose');

const weeklyRecordSchema = new mongoose.Schema({
    userCpf: String,
    referenceWeek: Date,
    numOracaoDias: Number,
    numJohreiMin: Number,
    numJohreiRec: Number,
    estudoMinutos: Number,
    donativoValor: Number,
    mitamamigakiIgrejaMinutos: Number,
    mitamamigakiCasaMinutos: Number,
    numReuniaoMembros: Number,
    nomesReuniaoMembros: String,
    numReuniaoFreq: Number, 
    nomesReuniaoFreq: String, 
    numVisitaMembros: Number, 
    nomesVisitaMembros: String, 
    numVisitaFreq: Number, 
    nomesVisitaFreq: String, 
    numEntrevistaMembros: Number, 
    nomesEntrevistaMembros: String, 
    numEntrevistaFreq: Number, 
    numEntrevistaFreq: String, 
    numFreqAcompanhado: Number, 
    numFreqAula: Number, 
    numFreqAtendidosMinistro: Number, 
    numOhikari: Number,
    obs: String
});

module.exports = mongoose.model('WeeklyRecord', weeklyRecordSchema);
