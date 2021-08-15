const
    mongoose = require('mongoose'),
    dotenv = require('dotenv');

dotenv.config({path: './config.env'});

mongoose.connect(process.env.DB_CONNECT, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('db connection succesful'));

const app = require('./app');

app.listen(8000, () => console.log(`Listening at port ${8000}`));