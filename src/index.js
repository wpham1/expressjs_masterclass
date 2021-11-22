const { response } = require('express');
const express = require('express');
// Initialize Express as an instance named "app".
const app = express();

// Separate these out in case we wanna use Docker or something to wrap the app.
const port = process.env.port || 3000 ;
const host = '0.0.0.0'

// Best settings for setting up Express as an API server to receive and process JSON & form data.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res) {
  res.send('Bruh')
});
app.get('/json', (req, res) => {
    response.json({'message':"Hello World!"})
})


app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}!`)
});
