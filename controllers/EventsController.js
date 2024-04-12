import { pool } from "../db.js";

export const getEvents = (req, res) => {
    res.render('explore', { title: 'our events'});
};