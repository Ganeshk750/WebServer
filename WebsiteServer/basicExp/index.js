const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello World');
});

app.get('/about', (req, res) =>{
    res.send('<h1>I am about page.</h1>');
});

app.get('/contact',(req,res) =>{
    res.send('I m contact page.');
});

app.get('/service', (req,res) =>{
    res.send('<ul><li>Web Development</li><li>Logo Design</li><li>Creating Video</li></ul>');
});

app.get('/ab*cd', (req,res) =>{
    res.send('<h1>I m a regex page.</h1>');
});

app.get('/user/:id', (req,res) =>{
    res.send(req.params);
});

app.get('/user/:id/status/:status_id', (req,res) =>{
    res.send(req.params);
});

app.get('/flights/:from-:to',(req,res) =>{
    res.send(req.params);
});
app.post('/login', (req,res) => {
    res.send('Login Success');
});

app.delete('/delete', (req, res) =>{
    res.send('deleted Successfulley');
});

//===============================================//

//app.get('/about-us', (req,res) =>{
   // res.json({user: 'ganesh', balance: '3000', id: '123get67'});
//});
app.get('/about-us', (req,res) =>{
   // res.status(200).json({user: 'ganesh', balance: '3000', id: '123get67'});
   res.status(500).json({error: 'something went wrong'});
});

app.listen('3000', () => console.log('server is running at port 3000...'));