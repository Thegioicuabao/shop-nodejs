require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes')
const authRoutes = require('./routes/auth.routes')
const cartRoutes = require('./routes/cart.routes')

const authMiddleware = require('./middlewares/auth.middleware');
const sessionMiddleware = require('./middlewares/session.middleware');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) ;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(sessionMiddleware);
app.use(express.static('public'));
app.get('/', (req, res) => res.render('index', {
    name: 'Buro Shop'
}))

app.use('/users', authMiddleware.requireAuth, userRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRoutes);
app.use('/cart', cartRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))