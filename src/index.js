const express = require('express')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

const port = 3000 || process.env.PORT

// routes
app.get('/', (req, res) => {
	res.render('index')
})

app.listen(port, () => console.log(`Server is running on port ${port}`))