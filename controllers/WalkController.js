import { pool } from "../db.js";

export const getWalk = (req, res) => {
    res.render('explore', { title: 'take a walk'});
};