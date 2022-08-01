const express = require ('express');
const app = express();

const port =3030;
const mainRouter = require('./routers/main');

/* Recursos estaticos */
app.use(express.static('public'))

/* rutas */
app.use('/', mainRouter);


app.listen(3030, () => console.log(`Server running http://localhost:${port}`));



