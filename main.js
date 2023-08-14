const express = require('express')
const app = express()

// github.com/LearnWebCode/youtube-backend-frontend





app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/animals/:name', (req, res) => {
    res.send(`Good Bye ${req.params.name}`)
})


app.listen(3000, () => {
    console.log("listening on port 3000");
})