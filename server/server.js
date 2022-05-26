const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes/comment.routes')(app)
require('./routes/post.routes')(app)
require('./routes/user.routes')(app)
app.listen(8000, () => console.log('Listening on port 8000'));