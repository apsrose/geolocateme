var JsonWebDataObject =
{
	initialize: function()
	{
	
	this.JsonString = "http://api.geonames.org/findNearbyWikipediaJSON?lat=-37.8413909625&lng=144.95602288625&maxRows=10&username=arose1234&callback=?";
	this.tempData = null;
	
	alert("init func");
	
	},
	connectToDataSource: function()
	{
	
	
	
	
	$.ajax( { url:this.JsonString, dataType: "json" }).
	done( function(data)
	{ 
		alert("ok" + " " + data); 
		/*
		if (data.geonames instanceof Array)
		{
			console.log(" Some Data Array: " + data.geonames.length);
		}
		*/
		
		$.each(data.geonames, function(i, obj)
		{
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
		
		
		});
		
		
		
		
		//this.tempData = data;
		
		//data typeof
		
	}).fail( function(error) { alert("error in Json Query"); });


	},
	storeDataInDatabaseObject: function()
	{
	
	
	





	}
}