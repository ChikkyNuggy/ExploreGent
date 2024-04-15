import mysql from 'mysql2';

export const pool = mysql.createPool({
    host: 'host',
    user: 'user',
    password: 'pass',
    database: 'db',
    // not required
    port: 25060,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to the database!');
        connection.release();
    }
});