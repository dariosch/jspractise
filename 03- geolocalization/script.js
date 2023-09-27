(function () {
  let myMap = document.querySelector(".my-map");
  if (!navigator.geolocation) {
    alert("no soportado");
    return;
  }

  function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.src =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      lat +
      "," +
      lon +
      "&zoom=12&size=600x300";
    myMap.appendChild(img);
  }

  function error() {
    alert("Unable to retrieve location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
})();
