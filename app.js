//* Objeto express
const express = require('express')
//* App de express
const app = express()
//* Puerto en que vamos a ver nuestra app -> localhost:3000
const port = 3000

//* HTTP Methods
//get
app.get('/v1/explorers', (req, res) => {
      console.log(`Api explorers GET ALL requests ${new Date()}`)
      const explorer1 = {id:1, name: 'Cristian'}
      const explorer2 = {id:117, name: 'John'}
      const explorer3 = {id:2, name: 'Cortana'}
      const explorer4 = {id:4, name: 'Halsey'}
      const explorer5 = {id:217, name: 'Fernando'}
      const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
      res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
      console.log(`Api explorers GET request ${new Date()}`)
      console.log(`Getting explorer with id ${req.params.id}`)
      const explorer = {id: 117, name: "John"}
      res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
      console.log(`Api explorers POST request ${new Date()}`)
      //Agregando la logica para persistir
      const requestBody = req.body //*? Parámetros de un cliente
      res.status(201).json({message: "Created ✔"})
})

app.put('/v1/explorers/:id', (req, res) => {
      console.log(`Api explorers PUT request ${new Date()}`)
      console.log(`Update explorer with id ${req.params.id}`)
      const requestBody = req.body
      res.status(200).json({message: "Updated! ✔"})
})

app.delete('/v1/explorers/:id', (req, res) => {
      console.log(`Api explorers DELETE request ${new Date()}`)
      console.log(`Delete explorer with id ${req.params.id}`)
      const requestBody = req.body 
      res.status(200).json({message: "Deleted ✖"})
})

//* Inicializamos la app
app.listen(port, () => {
      console.log(`Example app listening on port: ${port}`)
})