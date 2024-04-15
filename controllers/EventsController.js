import { pool } from "../db.js";

export const getEvents = (req, res) => {
    let query = 'SELECT * FROM events';

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, (err, rows) => {
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                } else {
                    const events = rows;
                    res.render('events', {events, title: 'our events'});
                }
            });
        }
    });
};

export const filterEvents = (req, res) => {
    let query = 'SELECT * FROM events';
    let filters = [];

    if (req.query.term) {
        query += ' WHERE name LIKE ?';
        filters.push('%' + req.query.term + '%');
    }

    if (req.query.date) {
        const date = new Date(req.query.date);
        if (filters.length > 0) {
            query += ' AND start_date <= ? AND end_date >= ?';
        } else {
            query += ' WHERE start_date <= ? AND end_date >= ?';
        }
        filters.push(date, date);
    }

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            connection.query(query, filters, (err, rows) => {
                console.log(query, filters);
                connection.release();
                if (err) {
                    console.error('Error connecting to database:', err);
                } else {
                    const events = rows;
                    res.render('eventsList', {events, layout: false});
                }
            });
        }
    });
};