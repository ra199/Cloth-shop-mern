const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');
const SideBar = require('./Routes/SideBarRouter');
require('dotenv').config();
require('./Models/db');
app.use(bodyParser.json());
app.use(cors());
const PORT = 8080;


app.use('/auth', AuthRouter);
app.use('/sidebar', SideBar);

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
