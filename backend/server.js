const app = require("./app");

const dotenv = require("dotenv");
const connectionDatabase = require("./config/database"); 

//Handle Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to Uncaught Exception`);
    process.exit(1);
});

//config
dotenv.config({path:"backend/config/config.env"});

//connection to Database
connectionDatabase(); 

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});


//Unhandled promise rejection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err,message}`);
    console.log(`Shuting down the server due to Unhandled Promise Rejection`);
    server.close(()=>{
        process.exit(1);
    });
});