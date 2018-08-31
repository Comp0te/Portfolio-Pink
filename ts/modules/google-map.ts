const mapContainer = document.querySelector(".contacts__map");
const coords = {
  mapCenter: {
    lat: 59.94033683,
    lng: 30.3230474,
  },
  pinkAddress: {
    lat: 59.9387165,
    lng: 30.3230474,
  },
};
const markerImageSrs = "/img/map-marker.png";
const infoWindowContent = `<p style="text-align: center;">ул. Большая Конюшенная, 19/8. Очень ждем Вас</p>`;
let googleMapsScript;
let isMapAlreadyDownload = false;

// const googleMapTimer = setTimeout(getGoogleMaps, 300);

showGoogleMap();
window.addEventListener("scroll", showGoogleMap, false);

function showGoogleMap() {
  const windowHeight = document.documentElement.clientHeight;

  const isMapVisible = (elem) => {
    const coordsElem = elem.getBoundingClientRect();
    const bottomVisible = coordsElem.bottom > -windowHeight &&
      coordsElem.bottom < windowHeight * 2;

    return bottomVisible;
  };

  if (isMapVisible(mapContainer) && !isMapAlreadyDownload) {
    getGoogleMaps();
  }
}

function getGoogleMaps() {
  googleMapsScript = document.createElement("script");
  googleMapsScript.addEventListener("load", initMap, false);
  googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBRH4B5PkjVHWhNkUYeQj88fYR8DD_30lI`;
  document.head.appendChild(googleMapsScript);
  isMapAlreadyDownload = true;
}

function initMap() {
  const mapSample = new google.maps.Map(mapContainer, {
    center: coords.mapCenter,
    zoom: 15,
    mapTypeControl: false,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_RIGHT,
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });

  const marker = new google.maps.Marker({
    position: coords.pinkAddress,
    map: mapSample,
    icon: markerImageSrs,
    title: "А вот и мы! Компания Pink находится здесь",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
    maxWidth: 200,
  });

  marker.addListener("click", () => {
    infoWindow.open(mapSample, marker);
  });
}
