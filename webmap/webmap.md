<!DOCTYPE html>
<html lang="en">
<head>
	
	<title>Trails of the Kootenays</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="svg/trails.svg" />

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    
    <script src = "javascript/leaflet-providers.js"></script>

    <script src="javascript/leaflet-ajax.js"></script>
	
    <style>
		html, body {
			height: 100%;
			margin: auto;
		}
		.leaflet-container {
			height: 800px;
			width: 1000px;
			margin: auto;
			border: solid #000000;
			border-width: 5px
			/*max-width: 100%;
			max-height: 100%; */
		}
		body{
			background-image: url("svg/cornice.jpg");
			background-size: cover;
		}
		.main{color: #000000; text-align: center;}
    .head {
        color: rgb(0, 0, 0);
        text-align: center;
        text-decoration: solid;
        font-family: Arial, Helvetica, sans-serif;
    }


	</style>
</head>
    <body>
        <h1 class="head">Trail Map of the Kootenays</h1>
        <h2 class="head">A collection of hikes, bikes, and skis from 2021</h2>

    <div id = "map" style="width: 2000px; height: 700px; justify-content: center"></div>
    <script>

// Add map and call a layer from mapbox api
        var map = L.map('map').setView([56.674115132706575, -99.08156581509407], 4);
        
        

        var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                'Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
	    }).addTo(map);

        var placemark = L.icon({
            iconUrl: "svg/cornice.jpg",
            iconSize: [40, 40],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]        
        });

        const Gwaii = L.marker([54.04, -131.88]).addTo(map)
		.bindPopup('<h1 class = head>Haida Gwaii</h1><br />I lived in a shack on the beach for a year and I will be forever grateful for that');

        const arrow = L.marker([48.173, -90.138]).addTo(map)
        .bindPopup("<h1 class = head> My uncle's camp on Arrow Lake</h1><br /><img src ="+ placemark +"width = 200px; height = 200px; justify-content: center/><br /><b class = head>Many good days spent chopping wood, and reading in the sunshine</b>");

        // const popup = L.popup()
		// .setLatLng([51.513, -0.09])
		// .setContent('I am a standalone popup.')
		// .openOn(map);



	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	}

	map.on('click', onMapClick);
    
    
// Add map and call a layer from mapbox api


    

    </script>
    </body>
