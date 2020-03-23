const express = require('express')
const app = express()

app.use(express.static('publix'))

app.listen(process.env.PORT || 8080, () => console.log('everthing is oki doki'))