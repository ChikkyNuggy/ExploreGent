import mysql from 'mysql2';

export const pool = mysql.createPool({
    host: 'mydatabasecluster-do-user-16008220-0.c.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_PY9LEMbCsPDOopnpem_',
    database: 'exploregentdb',
    port: 25060,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to the database!');
        connection.release();
    }
});