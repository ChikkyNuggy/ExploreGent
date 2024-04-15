import express from 'express';
import { getEvents, filterEvents } from '../controllers/EventsController.js';
import { getExplore, getExploreCategory } from '../controllers/ExploreController.js';
import { getNews, filterNews } from '../controllers/NewsController.js';
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

router.route('/news/filter')
    .get(filterNews);

router.route('/walk')
    .get(getWalk);

router.route('/walk/routes/:id')
    .get(getRoute);

router.route('/events')
    .get(getEvents);

router.route('/events/filter')
    .get(filterEvents);

export default router;