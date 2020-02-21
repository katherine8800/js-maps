function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 34.052235, lng: -118.243683 }
    });


    var directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map
    });

    var directionsService = new google.maps.DirectionsService;

    directionsRenderer.setMap(map);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {

        let btn = document.getElementById('btn')
        btn.addEventListener('click', function (e) {

            let startPoint = document.getElementById('start').value;
            let endPoint = document.getElementById('end').value;

            var selectedMode = document.getElementById('mode').value;
            directionsService.route({
                origin: startPoint,
                destination: endPoint,
                travelMode: google.maps.TravelMode[selectedMode]
            }, function (response, status) {
                if (status == 'OK') {
                    directionsRenderer.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        })
    }

    calculateAndDisplayRoute(directionsService, directionsRenderer);

    document.getElementById('mode').addEventListener('change', function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });
}