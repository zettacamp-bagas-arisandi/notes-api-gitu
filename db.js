
require('dotenv').config();
const mongoose = require('mongoose');
 
let uri = process.env.DB_URI
    .replace("<user>", process.env.DB_USER)
    .replace("<password>", process.env.DB_PASS)
    .replace("<name>", process.env.DB_NAME);

// mongoose.connect(uri).catch(error =>{
//     console.log(error.message);
//     mongoose.disconnect();
// });

mongoose.connect(uri).then(
    () => { 
        console.log(`Connected to database`);
    },
    err => { 
        console.log(err.message);
        mongoose.disconnect();
    }
  );
