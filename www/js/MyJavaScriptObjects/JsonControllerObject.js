var JsonControllerObject = {

	initialize: function(DataBaseObject, WebDataObject)
	{
	
	 this.SqlDataBaseObject = JsonSqlDataBaseObject;
	 this.WebDataObject = JsonWebDataObject;
	 this.map = null;
	 this.bluedot = null;
	 
	 
	// this.GeoNameDataObject = c;
	
	
	
		
	},
	SetUpEventHandlers: function()
	{
		//Handle pageinit event for page #foo
		//
		$(document).delegate("#places","pageinit", function() 
	    {
	    	/*
	    	if (typeof device === "undefined")
	    	{
		    	console.log('A jquery mobile page with an ID of places was just created');	    	
		    }
	    	else 
	    	{
	    	*/
		    
		    // app.showAlert("A jquery mobile page with id of places was just created");
		    	
	    	// }
	       
        });

		//Handle $ event for page $
		//	
	
		$( document ).delegate("#map", "pageinit", function() 
		{

 		// app.showAlert('pageinit');
 
		JsonControllerObject.InitializeMap();
 
		});


		$(document).delegate("#map", "pageshow", function()
		{
	
		// app.showAlert("pageshow event");
		
		//console.log("resize maps on page #bar");
		
		var latlng = JsonControllerObject.map.getCenter();
	
		// app.showAlert("Center is: " + latlng );
		
		google.maps.event.trigger(JsonControllerObject.map,'resize');
		
		//Other events are zoom_changed & center_changed & bounds_changed
	
		JsonControllerObject.map.setCenter(latlng);



		});
	
	
		
	},
	InitializeMap: function()
	{


 	// var marker = new google.maps.Marker({  });

	var latlng = new google.maps.LatLng(39.98574444, -83.04474722);

	var myOptions = { zoom: 14, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};

	var w = $(window).width();
	
	//alert("width is: " + w);
	
	alert ("width is : " + $("div.maps").width() );
	
	
	
	//$("div.maps").width("95%");

	JsonControllerObject.map = new google.maps.Map($("div.maps")[0], myOptions); 	

	
	JsonControllerObject.bluedot = new google.maps.MarkerImage('img/purpledot.png',
	new google.maps.Size(38, 38), 
	new google.maps.Point(0, 0), 
	new google.maps.Point(19, 19) );

	JsonControllerObject.addMarker(latlng);
	

	JsonControllerObject.addMarker(new google.maps.LatLng(39.98540278, -83.04531944));
	JsonControllerObject.addMarker(new google.maps.LatLng(39.98600278, -83.04510000));
	JsonControllerObject.addMarker(new google.maps.LatLng(39.98670000, -83.04495833));
	JsonControllerObject.addMarker(new google.maps.LatLng(39.98721389, -83.04514444));


	

	// alert("Init Maps");

	},
	addMarker: function(latlon)
 	{
		var marker = new google.maps.Marker({
		position : latlon,
		map : JsonControllerObject.map,
		icon : JsonControllerObject.bluedot, 
		title : "Purple Dot Spot",
		clickable: true });
		
		//alert("Lat Lng : " + latlon);
	
		google.maps.event.addDomListener(marker, 'click', function() {
		
		//google.maps.event.addListener(marker, 'click', function() { 
	
		alert("Hello World " + this.title );
	
		// playAudio(markerCount);
	
		});
	
	}
	
	
	
	
	
	
	
	
	
	
}