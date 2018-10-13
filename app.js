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
        zoom: 10,
        center: {
            lat: 13.4,
            lng: 52.51
        }
    });

