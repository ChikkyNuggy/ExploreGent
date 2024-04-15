import axios from 'axios';

export const getWalk = async (req, res) => {
  try {
    const response = await axios.get('https://data.stad.gent/api/v2/catalog/datasets/toeristische-wandelroutes-gent/records?limit=97');
    const data = response.data;
    const routes = data.records.map((result, index) => {
        const coordinates = result.record.fields.geometry.geometry;
        return {
            id: index + 1,
            name: `Route ${index + 1}`,
            coordinates
        };
    });
    const route = routes
    res.render('walk', { route, title: 'take a walk', routes});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Er is een fout opgetreden bij het ophalen van de routes' });
  }
};

export const getRoute = async (req, res) => {
    const routeId = req.params.id;
    const response = await axios.get('https://data.stad.gent/api/v2/catalog/datasets/toeristische-wandelroutes-gent/records?limit=97');
    const data = response.data;
    const routes = data.records.map((result, index) => {
        const coordinates = result.record.fields.geometry.geometry;
        return {
            id: index + 1,
            name: `Route ${index + 1}`,
            coordinates
        };
    });
    const route = routes.find(route => {
        return route.id === parseInt(routeId);
    });
    res.render('map', { route, title: 'take a walk', routes});
};