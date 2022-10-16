const mongoose = require('mongoose');
 
function connectToDB() {
    let uri = process.env.DB_URI
        .replace("<user>", process.env.DB_USER)
        .replace("<password>", process.env.DB_PASS)
        .replace("<name>", process.env.DB_NAME);
    
    mongoose
        .connect(uri)
        .then(() => console.log(`Connected to database`))
        .catch(err => {
            console.log('Failed to connect database: ', err.message);
            mongoose.disconnect();
        });
}

module.exports = connectToDB;
