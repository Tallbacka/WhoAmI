
// Calling the google API for inserting a map with a location marker without using an iframe

function initMap() {
    // The location of Tallbacka
    var tallBacka = { lat: 57.929239, lng: 13.964798 };
    // The map, centered at Tallbacka
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 8, center: tallBacka });
    // The marker, positioned at Tallbacka
    var marker = new google.maps.Marker({ position: tallBacka, map: map, title: 'Här bor jag!!' });
}




