const mongoose = require('mongoose')

mongoose.connect("http://127.0.0.1:27017/db_name", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('Established a connection to the database'))
.catch(err => console.log('Something went wrong when connecting to the database ', err));