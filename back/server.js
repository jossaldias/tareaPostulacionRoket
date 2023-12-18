const express = require('express');
const cors = require('cors');
const app = express();

//inicializa y configura el servidor utilizando Express en Node.js

const InfoRoutes = require('./routes/rutas');

//Middlewares que preocesarán las solicitudes 
app.use(express.json());
app.use(cors()); 

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.use('/', InfoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
