function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: 47.094845, lng: 37.518076 }
    });

    var directionsService = new google.maps.DirectionsService;
    var directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map
        // panel: document.getElementById('right-panel')
    });

    // directionsRenderer.addListener('directions_changed', function () {
    //     computeTotalDistance(directionsRenderer.getDirections());
    // });

    let btn = document.getElementById('btn')
    btn.addEventListener('click', function (e) {

        let startPoint = '';
        let endPoint = '';

        startPoint = document.getElementById('start').value
        endPoint = document.getElementById('end').value

        displayRoute(startPoint, endPoint, directionsService,
            directionsRenderer);
    })
}


function displayRoute(origin, destination, service, display) {
    service.route({
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        avoidTolls: true
    }, function (response, status) {
        if (status === 'OK') {
            display.setDirections(response);
        } else {
            alert('Could not display directions due to: ' + status);
        }
    });
}

// function computeTotalDistance(result) {
//     var total = 0;
//     var myroute = result.routes[0];
//     for (var i = 0; i < myroute.legs.length; i++) {
//         total += myroute.legs[i].distance.value;
//     }
//     total = total / 1000;
//     document.getElementById('total').innerHTML = total + ' km';
// }