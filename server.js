const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req,res)=>{
res.send('JualAja Node Bridge Active');
});

app.listen(PORT,'0.0.0.0',()=>{
console.log('Server running');
});
const express = require('express');
const axios = require('axios'); // jika nanti perlu panggil Google API
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // untuk menerima JSON

// Test endpoint root
app.get('/', (req,res)=>{
  res.send('JualAja Node Bridge Active');
});

// Endpoint stress test
app.post('/stress-test', async (req,res)=>{
  const payload = req.body; // data dari Apps Script
  // Simulasikan stress test atau panggil Google Sheets API
  console.log('Stress test request:', payload);

  // TODO: implement logic stress test per batch
  res.json({status:'ok', message:'Stress test queued'});
});

app.listen(PORT,'0.0.0.0',()=>{
  console.log('Server running');
});
