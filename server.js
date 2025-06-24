const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); 

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales (agrupadas por funcionalidad)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/reminder', require('./routes/reminderRoutes'));

// Ruta de prueba (opcional)
app.get('/', (req, res) => {
  res.send('API funcionando correctamente ✅');
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
