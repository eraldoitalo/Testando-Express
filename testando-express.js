const express = require('express')
const server = express()

server.get('/', (req, res) =>{
    res.send('<h1>Home</h1>')
})

server.get('/contato', (req, res) => {
    res.send(`<h1>Contatos</h1>
    
    <form action="/contato" method="POST">
    <label for="email">Email: </label>
    <input type="email" name="email" id="email">
    <label for="mensagem">Mensagem: </label>
    <textarea name="mansagem" id="mensagem"></textarea>
    <input type="submit" value="Enviar">
    </form>`)
})

server.post('/contato', (req, res) => {
    res.send('<h1>Preciso aprender a pegar os valores que o usuario digitou!</h1>')
})

server.listen(3001, () => {
    console.log('Servidor aberto em: http://lacalhost:3001')
    console.log('Para derrubar o server: ctrl + c')
})