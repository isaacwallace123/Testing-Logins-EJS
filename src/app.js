require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const discordStrategy = require('./strategies/discordstrategy');

const PORT = process.env.PORT || 5000

//Routes
const authRoute = require('./routes/auth');

app.use(session({
    secret: 'Discord Login Secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false
}));

//Passport

app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Now listening to requests on port ${PORT}`);
});