// app.js
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const connectDB = require('./utils/dbConnection');
const userRoutes = require('./routes/userRoutes');
const semanaRoutes = require('./routes/semanaRoutes');


const app = express();
const port = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

app.use(express.json()); // Para parsear dados de formulário
app.use(cookieParser());
// Configure o middleware CORS para permitir solicitações apenas da origem do seu aplicativo React
const corsOptions = {
    origin: 'http://localhost:3000', // Substitua pelo URL correto do seu aplicativo React
  };

app.use(cors());

// Middleware para verificar o JWT
const verifyJWT = (req, res, next) => {
  const token = req.cookies['token'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Token inválido
    req.user = decoded;
    next();
  });
};

app.use(userRoutes);
app.use(semanaRoutes);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
