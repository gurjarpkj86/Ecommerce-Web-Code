const mongoose = require("mongoose");

const dbUrl = 'mongodb+srv://pankajgurjar:sam1186@cluster0.vwvp2.mongodb.net/merndb?retryWrites=true&w=majority';
const connectionDatabase = ()=>{
    mongoose.connect(dbUrl,{useNewUrlParser: true,
        useUnifiedTopology: true }).then((data)=>{
        console.log(`MongoDB Connected With Server:${data.connection.host}`);
        });
};

module.exports = connectionDatabase