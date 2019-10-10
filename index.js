const express = require('express')
const app = express()
const port = 3000

const cookieParser = require('cookie-parser')


const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes')
app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 
app.use(cookieParser())

app.get('/', (req, res) => res.render('index', {
    name: 'Buro Shop'
}))

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))