import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import APIRouter from './routes/index';

require('./models/index');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', APIRouter);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});


module.exports = app;
