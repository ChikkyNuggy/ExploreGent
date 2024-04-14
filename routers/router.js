import express from 'express';
import { getEvents } from '../controllers/EventsController.js';
import { getExplore, getExploreCategory } from '../controllers/ExploreController.js';
import { getNews } from '../controllers/NewsController.js';
import { getWalk, getRoute } from '../controllers/WalkController.js';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.render('home', { title: 'explore gent'});
    });
router.route('/explore')
    .get(getExplore);

router.route('/explore/:id')
    .get(getExploreCategory);

router.route('/news')
    .get(getNews);

router.route('/walk')
    .get(getWalk);

router.route('/walk/routes/:id')
    .get(getRoute);

router.route('/events')
    .get(getEvents);

export default router;