import { pool } from "../db.js";

const getCount = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT COUNT(*) AS count FROM news';
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Error connecting to database:', err);
                reject(err);
            } else {
                connection.query(query, (err, rows) => {
                    connection.release();
                    if (err) {
                        console.error('Error connecting to database:', err);
                        reject(err);
                    } else {
                        console.log(rows[0].count);
                        resolve(rows[0].count);
                    }
                });
            }
        });
    });
}

export const getNews = async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const articlesPerPage = 10;
    const offset = (page - 1) * articlesPerPage;
    let articles = [];
    let query = `SELECT * FROM news LIMIT ${articlesPerPage} OFFSET ${offset}`;
    const totalPages = await getCount();

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, (err, rows) => {
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                    return res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van de nieuwsberichten' });
                } else {
                    articles = rows;
                    console.log(totalPages);
                    res.render('news', {articles, title: 'stay up to date', currentPage: page, totalPages: Math.ceil(totalPages / articlesPerPage)});
                }
            });
           
        }
    });
};

export const filterNews = (req, res) => {
    const term = req.query.term;
    let articles = [];
    let query = `SELECT * FROM news WHERE title LIKE '%${term}%'`;
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, (err, rows) => {
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                    return res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van de nieuwsberichten' });
                } else {
                    articles = rows;
                    res.render('newsList', {articles, title: 'stay up to date', layout: false});
                }
            });
        }
    });
};