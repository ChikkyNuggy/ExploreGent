const Map = ol.Map;
const View = ol.View;
const TileLayer = ol.layer.Tile;
const BingMaps = ol.source.BingMaps;
const fromLonLat = ol.proj.fromLonLat;
const Feature = ol.Feature;
const LineString = ol.geom.LineString;
const VectorLayer = ol.layer.Vector;
const VectorSource = ol.source.Vector;

let ghentCords = fromLonLat([3.722461, 51.053828]);

const map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new BingMaps({
        key: "AsP27pmfd6otk9xrCXoVZMoLm3fqFcEItMSuhDSVtD6jCI7jJmZWNyiTt-yPdXvq",
        imagerySet: "CanvasDark",
      }),
    }),
  ],
  view: new View({
    center: ghentCords,
    zoom: 15,
  }),
  controls: [],
});

let features = routes.map(route => {
  let coordinates = route.coordinates.coordinates.map(coord => fromLonLat(coord));
  let lineString = new LineString(coordinates);
  return new Feature(lineString);
});

let vectorSource = new VectorSource({
  features: features
});

let vectorLayer = new VectorLayer({
  source: vectorSource
});

map.addLayer(vectorLayer);