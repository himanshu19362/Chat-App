const express = require('express');
const { PORT } = require('./config/serverConfig');
const connectDatabase  = require('./config/dbConfig');

const startServer = async () => {
    const app = express();
    app.listen(PORT , async () => {
        console.log(`Server is running on PORT ${PORT}`);
        await connectDatabase()
    });
}

startServer();