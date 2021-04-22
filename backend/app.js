const { Pool, Client} = require("pg");

// postgreSQL connection 
const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "inventory",
    password: "5700",
    port: "5432"
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});


