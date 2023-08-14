const express = require('express')
const app = express()

// github.io/LearnWebcode/youtube-backend





app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/animals/:name', (req, res) => {
    res.send(`Good Bye ${req.params.name}`)
})


app.listen(3000, () => {
    console.log("listening on port 3000");
})