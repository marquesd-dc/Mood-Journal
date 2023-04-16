const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


const uri = process.env.ATLAS_URI; 

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection is successful');
})


const journalRouter = require('./routes/journalEntryRoutes');

app.use('/', journalRouter)

app.listen(PORT, (
    console.log(`Server running on port: ${PORT}`)
))