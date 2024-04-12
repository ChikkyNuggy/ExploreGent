import { pool } from "../db.js";

export const getExplore = (req, res) => {
    let query = 'SELECT * FROM categories';

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, (err, rows) => {
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                } else {
                    const categories = rows;

                    query = 'SELECT * FROM explores';

                    pool.getConnection((err, connection) => {
                        if (err) {
                            console.error('Error connecting to database:', err);
                        } else {
                            connection.query(query, (err, rows) => {
                                connection.release();
                                if (err) {
                                    console.error('Error connecting to database:', err);
                                } else {
                                    const explores = rows;

                                    res.render('explore', { title: 'go explore', categories, explores });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

