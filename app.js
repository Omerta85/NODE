const express = require('express');
require('dotenv').config()

const userRouter = require('./router/user.router');
const config = require('./config/config.env');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/users', userRouter);



app.get('/', (req, res) => {
    res.json('WELOCME')
})

app.use((err, req, res, next) => {
    res.status(401).json({
        message: err.message || 'Unknown error',
        status: err.stattus || 500
        })
})
app.listen(config.PORT, () => {
    console.log(`Server listen ${config.PORT}`);
})