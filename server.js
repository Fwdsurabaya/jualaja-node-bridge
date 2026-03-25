const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // untuk menerima JSON

// Test endpoint root
app.get('/', (req,res)=>{
  res.send('JualAja Node Bridge Active');
});

// Endpoint stress test
app.post('/stress-test', async (req,res)=>{
  const payload = req.body; 
  console.log('Stress test request:', payload);

  // Simulasikan batch buyer (contoh)
  const buyers = Array(payload.buyer_count || 10).fill(0).map((_,i)=>`Buyer${i+1}`);
  buyers.forEach(buyer => {
    console.log(`Simulasi order untuk ${buyer}`);
    // TODO: implementasi panggil Google Sheets API
  });

  res.json({status:'ok', message:`Batch ${payload.batch || 1} processed ${buyers.length} buyers`});
});

// Jalankan server
app.listen(PORT,'0.0.0.0',()=>{
  console.log(`Server running on port ${PORT}`);
});

