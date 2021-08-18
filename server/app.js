// Import modules
const
    express = require('express'),
    morgan = require('morgan'),

    serviceRouter = require('./routes/serviceRoutes'),
    errorController = require('./controllers/errorController');

// Main application
const app = express();

// Log requests
process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

// Mounting routers
app.use('/api/services', serviceRouter);

// Handle all errors
app.use(errorController);

// Export reference to main application
module.exports = app;