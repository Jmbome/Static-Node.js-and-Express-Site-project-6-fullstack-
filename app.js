//server, routes and middleware

const express=require('express');
const path = require('path');
const routes = require('./routes');



//Instantiate Express app 
const app = express();


//LOAD VIEW ENGINE
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');


// Configure static folders
app.use('/static', express.static(path.join(__dirname, 'public')));

// Configure URL encoding with express
app.use(express.urlencoded({ extended: false }));

app.use(routes);

// page not found error handler.
app.use((req, res, next) => {
    const err = new Error(' request was not found.');
    err.status = 404;
    next(err);
});

//  404 status error handler and more
app.use((err, req, res, next) => {
    if (err.status === 404) {
        console.log(err.message);

        res.status(404)
            .render('page-not-found', { err });
    } else {
        err.message = 'Something went wrong!';
        res.status(err.status || 500);
        res.render('error', { err });
    }
});
  

  //START SERVER
  app.listen(3000, () => {
    console.log(`app listening at port 3000....`);
  })

