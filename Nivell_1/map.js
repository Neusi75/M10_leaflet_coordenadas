const titlesProvider = "https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png ";
let myMap = L.map("myMap").setView([41.386843, 2.170158], 16);
let marker = L.marker ([41.386930, 2.165960]).addTo(myMap)
    .bindPopup('<h3>Restaurant Centfocs</h3><p>Restaurante mediterráneo <br> Carrer Balmes, 16 08007 Barcelona</p>')
    .addTo(myMap);

L.tileLayer(titlesProvider, {
    maxZoom: 18,
}).addTo(myMap);

