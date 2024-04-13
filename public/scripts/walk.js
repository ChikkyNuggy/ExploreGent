const Map = ol.Map;
const View = ol.View;
const TileLayer = ol.layer.Tile;
const BingMaps = ol.source.BingMaps;
const fromLonLat = ol.proj.fromLonLat;

// Oefening 2
// Maak een nieuwe kaart target: map2. Gebruik ipv OpenStreetMaps nu Bing maps voor je kaartweergave.
// Gebruik volgende key: AsP27pmfd6otk9xrCXoVZMoLm3fqFcEItMSuhDSVtD6jCI7jJmZWNyiTt-yPdXvq
// Tip: imagerySet: "Aerial",

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
