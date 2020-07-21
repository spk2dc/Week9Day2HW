const express = require('express')
const app = express()
const PORT = 3000

//Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Listen
app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊')
})