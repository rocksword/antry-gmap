function initialize() {
    var myLatlng = new google.maps.LatLng(31, 121);
    var mapOptions = {
        zoom : 6,
        center : myLatlng
    }

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var markerList = [];
    for (var i = 0; i < 100000; i++) {
        var marker = new google.maps.Marker({
            position : new google.maps.LatLng(31 - i * 0.0001, 121 - i * 0.0001),
            map : map,
            title : '156.25.131.' + i % 255
        });
        markerList.push(marker);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);