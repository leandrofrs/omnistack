const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://leandro:leandro@cluster0-753bk.mongodb.net/app?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

//Métodos HTTP: get, post, put, delete
//query params: re.query (filtros, ordenação e paginação)
//route params: request.params (indentifcar um recurso na alteração ou remoção)
//body:

//MongoDB (Não-relacional)

app.use(routes);

app.listen(3333);
