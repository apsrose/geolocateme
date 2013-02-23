/*

	MVC Model Helper Object
	


*/

var JsonWebDataObject =
{
	initialize: function()
	{
	
	this.JsonGeoNamesString = "http://api.geonames.org/findNearbyWikipediaJSON?lat=-37.8413909625&lng=144.95602288625&maxRows=15&username=arose1234&callback=?";
	this.JsonFlikrString = "";
	this.JsonGooglePlacesString = "";
	
	this.tempData = null;
	
	console.log("JsonWebDataObject init function");
	
	},
	connectToDataSource: function(latitude,longitude)
	{
	// Latitude and Longitude to be passed in from Controller from GPS Co-ordinates
	
	
	
	$.ajax( { url:this.JsonGeoNamesString, dataType: "json" }).
	done( function(data)
	{ 
		console.log("ok" + " " + data); 
		/*
		if (data.geonames instanceof Array)
		{
			console.log(" Some Data Array: " + data.geonames.length);
		}
		*/
		
		$.each(data.geonames, function(i, obj)
		{
			/*
			console.log("Language is: " + obj.lang);
			console.log("Title is: " + obj.title);
			console.log("Summary is: " + obj.summary);
			console.log("Feature is: " + obj.feature);
			console.log("CountryCode is: " + obj.countryCode);
			console.log("Elevation is: " + obj.elevation);
			console.log("Population is: " + obj.population);
			console.log("lat is: " + obj.lat);
			console.log("lng is: " + obj.lng);
			console.log("Wikipedia URL is: " + obj.wikipediaUrl);
			console.log("Thumbnail link is: " + obj.thumbnailImg);
			console.log("Ranking is: " + obj.rank);
			*/
			console.log("Number of item is: " + i);
			console.log("Title is: " + obj.title);
			
			
			//Check if obj.thumbnailImg is undefined or null then get images
			
			
			
			// Create specific object for GeoName info
			var foundObject = 
			new GeoNameDataObject(obj.lang, obj.title, obj.summary, obj.feature, obj.countryCode, obj.elevation, obj.population, obj.lat, obj.lng,obj.wikipediaUrl, 	obj.thumbnailImg, obj.rank);
			
			
			JsonWebDataObject.storeDataInDatabaseObject(foundObject);
			
		
		});
		
		
		console.log(" End Seconds are: " + new Date().getSeconds().toLocaleString());
		
		//this.tempData = data;
		
		//data typeof
		
	}).fail( function(error) { console.log("error in Json Query"); });


	},
	storeDataInDatabaseObject: function(foundObject)
	{
	
		console.log("storeData " + foundObject.title);	
	
	
	},
	connectToFlikrDataSource: function(foundObject)
	{
		// We have an Object with no images so we need to find some
		
		
		
		
	},
	connectToGooglePlacesDataSource: function()
	{
		
		
	}
}