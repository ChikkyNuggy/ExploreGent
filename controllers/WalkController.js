import { pool } from "../db.js";

export const getWalk = (req, res) => {
    res.render('walk', { title: 'take a walk'});
};