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
