const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore nel recupero dei dati' });
  }
});

app.post('/api/submit', (req, res) => {
  const { name, email } = req.body;
  // Logica per l'invio dei dati
  res.json({ message: 'Dati inviati correttamente' });
});

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});