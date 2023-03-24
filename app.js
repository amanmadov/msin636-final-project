const express = require('express');
const connectDB = require('./database/db');
const { engine } = require('express-handlebars');
const path = require('path');
const colors = require('colors');

//#region Routes 

const loginRoutes = require('./routes/authentication/login');
const passwordRecoveryRoutes = require('./routes/authentication/password-recovery');
const signupRoutes = require('./routes/authentication/signup');
const pageNotFoundRoutes = require('./routes/authentication/404');
const homeRoutes = require('./routes/home');

//#endregion

const PORT = 8181;
const app = express();

//#region Express Middlewares  

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//#endregion

//#region Handlebars Configuration

app.engine('hbs', engine({
    extname: '.hbs',
    partialsDir: 'views/partials',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true

    }
}));
app.set('view engine', 'hbs');

//#endregion

app.use(loginRoutes);
app.use(passwordRecoveryRoutes);
app.use(signupRoutes);
app.use(pageNotFoundRoutes);
app.use(homeRoutes);


//#region Start Server 
const startServer = async () => {
    //await connectDB();
    app.listen(PORT, console.log(`Server running on Port ${PORT}`.green.underline))
}
startServer();
//#endregion