const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

const port = process.env.PORT || 3000

// routes
app.get('/', (req, res) => {
	res.render('index')
})

app.get('/*', (req, res) => {
	res.render('404')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))