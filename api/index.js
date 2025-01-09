const express = require('express');
const cors = require('cors');

app.use(cors());
const app = express();



app.get('/api/test', (req, res) => {
    res.json('test ok');
});

app.post('/api/transaction',(req,res)=> {
    res.json(req.body)
})

app.listen(4040, () => {
    console.log('Server running on http://localhost:4040');
});
