const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/appError');
const courseRouter = require('./routes/courseRoutes');
const userRouter = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with the allowed origin(s) of your choice
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
  })
);

//	START Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

//	START Route	//
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  //  To Handle All Http Functions
  next(
    new AppError(`Can't find ${req.originalUrl} on this server`, 404)
  ); 
  
  // Whenever we pass an argument to the next, it will consider as Error and it will skip all middlewares in callstack and go to the middleware the handle errors
});

app.use(globalErrorHandler);

module.exports = app;
