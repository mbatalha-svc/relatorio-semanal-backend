const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Função auxiliar para calcular o período da semana
function calcularPeriodo(ano, semana) {
  // Primeiro dia do ano
  const primeiroDiaAno = new Date(ano, 0, 1);
  // Dia da semana do primeiro dia do ano (0 = domingo, 6 = sábado)
  const diaSemanaPrimeiroDia = primeiroDiaAno.getDay();
  // Calcula a diferença em dias até o primeiro domingo do ano (pode ser negativo)
  const diferencaDias = diaSemanaPrimeiroDia === 0 ? 0 : 7 - diaSemanaPrimeiroDia;
  // Calcula o primeiro domingo do ano (pode ser no ano anterior)
  const primeiroDomingoAno = new Date(primeiroDiaAno);
  primeiroDomingoAno.setDate(primeiroDiaAno.getDate() - diaSemanaPrimeiroDia);

  // Calcula o primeiro dia da semana solicitada
  const primeiroDiaSemana = new Date(primeiroDomingoAno);
  primeiroDiaSemana.setDate(primeiroDomingoAno.getDate() + (semana - 1) * 7);

  // Calcula o último dia da semana (6 dias após o primeiro dia)
  const ultimoDiaSemana = new Date(primeiroDiaSemana);
  ultimoDiaSemana.setDate(primeiroDiaSemana.getDate() + 6);

  console.log(`${primeiroDiaSemana.toISOString().split('T')[0]} - ${ultimoDiaSemana.toISOString().split('T')[0]}`)
  // Retorna o período no formato "YYYY-MM-DD - YYYY-MM-DD"
  return `${primeiroDiaSemana.toISOString().split('T')[0]} - ${ultimoDiaSemana.toISOString().split('T')[0]}`;
}

const semanaSchema = new Schema({
  ano: { type: Number, required: true },
  semana: { type: Number, required: true },
  periodo: { type: String, required: false },
  editavel: { type: Boolean, default: false }
});

// Middleware pre-save para calcular o período antes de salvar o documento
semanaSchema.pre('save', function(next) {
  console.log('presave' + !this.periodo)
  if (!this.periodo) { // Se o período não estiver definido, calcular automaticamente
    this.periodo = calcularPeriodo(this.ano, this.semana);
  }
  
  next();
});

const Semana = mongoose.model('Semana', semanaSchema);

module.exports = Semana;
