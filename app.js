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
      console.log(`Api Explorers GET request ${new Date()}`)
      console.log(`Getting explorer with id ${req.params.id}`)
      const explorer = {id: 117, name: "John"}
      res.status(200).json(explorer)
})

//* Inicializamos la app
app.listen(port, () => {
      console.log(`Example app listening on port: ${port}`)
})
