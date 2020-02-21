function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer;

    var directionsService = new google.maps.DirectionsService;

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: { lat: 47.094845, lng: 37.518076 }
    });
    directionsRenderer.setMap(map);

    function calculateAndDisplayRoute(directionsService, directionsRenderer) {

        let btn = document.getElementById('btn')
        btn.addEventListener('click', function (e) {

            // let startPoint = '';
            // let endPoint = '';

            let startPoint = document.getElementById('start').value;
            let endPoint = document.getElementById('end').value

            console.log(startPoint, endPoint)

            var selectedMode = document.getElementById('mode').value;
            directionsService.route({
                origin: startPoint,  // Haight.
                destination: endPoint,  // Ocean Beach.
                // Note that Javascript allows us to access the constant
                // using square brackets and a string value as its
                // "property."
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