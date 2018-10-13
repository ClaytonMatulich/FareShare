var platform = new H.service.Platform({
    'app_id': '7SDSJvoRdV0v2xZ0BrAV',
    'app_code': 'WPhUiT2gtYoIBPnzf0VoQg'
});

// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var landingMap = new H.Map(
    document.getElementById('landing-map-container'),
    defaultLayers.normal.map, {
        zoom: 12,
        center: {
            lat: 32.77,
            lng: -117.07
        }
    });

console.log(landingMap)
