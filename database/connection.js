const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food_recipe')
.then(() => {
    console.log('connection succesful');
})
.catch((err) => console.log(err));