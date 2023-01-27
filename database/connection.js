const mongoose = require('mongoose');

const db_url = process.env.DATABASE_URL
mongoose.connect(db_url)
.then(() => {
    console.log('connection succesful');
})
.catch((err) => console.log(err));
