import { pool } from "../db.js";

export const getNews = (req, res) => {
    res.render('explore', { title: 'stay up to date'});
};