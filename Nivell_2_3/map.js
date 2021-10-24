	
let myMap = L.map("myMap").setView([41.386843, 2.170158], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



const iconMaker = L.icon({
    iconUrl: "Pin.png",
    iconSize: [50, 50],
    iconAnchor: [20, 60],
    popupAnchor: [0, -65]
});

let popup1 = L.popup();
let marker = null;

function onMapClick(e) {

    if(marker !== null){
        myMap.removeLayer(marker);
    }

    popup1
        .setLatLng(e.latlng)
        .openOn(myMap);
    marker = L.marker([e.latlng.lat, e.latlng.lng], {icon:iconMaker})
        .addTo(myMap)
        .bindPopup("Les coordenades són <br> <b> Lat: " + e.latlng.lat.toString() + " Lng: " + e.latlng.lng.toString() + "</b>")
        .openPopup();
        myMap.flyTo(e.latlng, 18);

    
};

myMap.on("click", onMapClick);

