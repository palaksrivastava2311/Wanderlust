console.log("Map JS loaded");
console.log(window.coordinates);

let [lon, lat] = window.coordinates;

const map = L.map("map").setView([lat, lon], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([lat, lon])
    .addTo(map)
    .bindPopup(window.locationName)
    .openPopup();