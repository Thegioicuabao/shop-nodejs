const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./routes/user.routes');
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => res.render('index', {
    name: 'Buro Shop'
}))

app.use('/users', userRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))