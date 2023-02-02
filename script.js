// Coordinates to center the map
    var myLatlng = new google.maps.LatLng(40.4107662,-80.061533);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
    {
        "stylers": [
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#0099dd"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#aadd55"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {}
]
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


// Chart Sample

var ctx = document.getElementById("profitChart").getContext('2d');
var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{ 
        data: [125, 300, 0, 340, 4500, 250, 200, 0, 0, 2500, 250, 300],
        label: "Expenses",
        borderColor: "rgba(214, 48, 49,1.0)",
        fill: true,
        backgroundColor: "rgba(214, 48, 49,0.4)",
        pointBackgroundColor: "rgba(214, 48, 49,1.0)"
      }, { 
        data: [550, 1250, 550, 550, 2500, 1250, 1250, 550, 1250, 2500, 2500, 2500],
        label: "Income",
        borderColor: "rgba(0, 184, 148,1.0)",
        fill: true,
        backgroundColor: "rgba(0, 184, 148,0.4)",
        pointBackgroundColor: "rgba(0, 184, 148,1.0)"
      }
    ]};

var profitChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                stacked: false
            }]
        },
        legend: {
              display: true,
              labels: {
                  fontColor: '#161616',
                  usePointStyle: true
              }
          }
    }
});
