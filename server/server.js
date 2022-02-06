const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();


// app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => console.log('DB CONNECTED'))
    .catch(err => console.log(`DB CONNECTION ERR ${err}`));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());


// import routes
// const authRoutes = require('./routes/auth');
// app.use('/api', authRoutes) OR

// routes 

readdirSync('./routes').map((r) =>
    app.use('/api', require('./routes/' + r))
);

// const router = require('..')
// app.use('/api',router)

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));