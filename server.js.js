const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Configurações do servidor
const app = express();
const port = 3000;

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/medicenter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração de diretórios estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Motor de visualização
app.set('view engine', 'ejs');

// Roteamento
const blogRoutes = require('./routes/blog');
const appointmentRoutes = require('./routes/appointments');
const contactRoutes = require('./routes/contact');

// Usando os roteadores
app.use('/blog', blogRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/contact', contactRoutes);

// Página inicial
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
