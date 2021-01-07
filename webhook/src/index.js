const express = require('express')
const path = require('path')

const app = express()



app.use('/', express.static( path.join(__dirname, '..', '..', 'frontend', 'build') ) )

app.use('/*',(req,res) => res.status(404).send('Page not found') )



app.listen(8080, () => console.log('run in port 8080'))