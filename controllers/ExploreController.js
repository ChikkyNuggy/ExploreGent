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
export const getExploreCategory = (req, res) => {
    const id = req.params.id;
    let query = 'SELECT * FROM explores WHERE category_id = ?';

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, [id], (err, rows) => {
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                } else {
                    const explores = rows;
                    res.render('exploreList', {explores, layout: false});
                }
            });
        }
    });
};