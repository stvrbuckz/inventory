const app = require('./app');

const port = process.env.PORT || 3000;
// const { Pool, Client} = require("pg");


app.listen(port, () => {
    console.log(`Listening at ${port}`);
});

// postgreSQL connection 
// const pool = new Pool ({
//     user: "postgres",
//     host: "localhost",
//     database: "inventory",
//     password: "5700",
//     port: "5432"
// });

// pool.on('error', (err, client) => {
//     console.error('Error:', err);
// });
