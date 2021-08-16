const
    mongoose = require('mongoose'),
    dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

mongoose
    .connect(process.env.DB_CONNECT, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('DB connection succesful'));

const app = require('./app');

const PORT = process.env.NODE_ENV === 'production' ? process.env.PORT : 3000;
app.listen(PORT, () => console.log(`Listening at port ${PORT}`));