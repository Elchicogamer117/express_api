//* Objeto express
const express = require('express')
//* App de express
const app = express()
//* Puerto en que vamos a ver nuestra app -> localhost:3000
const port = 3000

//* Inicializamos la app
app.listen(port, () => {
      console.log(`Example app listening on port: ${port}`)
})
