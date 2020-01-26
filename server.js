const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const port = 8000;

const userRoute = require('./src/routes/user');

app.use(bodyParser.json());
app.use('/user', userRoute);

app.get('/', (req, res) => {
    res.send('Express Hands on')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);

    mongoose.connect(`mongodb+srv://vajid:vajid@cluster0-istoc.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('MongoDB Connected Successfully')
    })
})