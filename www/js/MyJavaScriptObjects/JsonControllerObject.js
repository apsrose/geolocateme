/*

	MVC Controller Object





*/



var JsonControllerObject = {

	initialize: function(DataBaseObject, WebDataObject)
	{
	
	 this.SqlDataBaseObject = JsonSqlDataBaseObject;
	 this.WebDataObject = JsonWebDataObject;
	 this.map = null;
	 this.bluedot = null;
	 
	 
	 //this.GeoNameArray = new Array();
	
	
	
		
	},
	SetUpEventHandlers: function()
	{
		// Dynamic links
		// 
		$(document).bind("pagebeforechange", function(e,data)
		{
			if (typeof data.toPage === "string")	
			{
				var u = $.mobile.path.parseUrl(data.toPage);
				var re = /^#nearby/;
				var re2 =/^#nearbyDetails/;
				
				if (u.hash.search(re) !== -1)
				{
					//alert("ok");
					JsonControllerObject.showCategory(u, data.options);
					e.preventDefault();	
				}
				else if (u.hash.search(re2) !== -1)
				{
					console.log("nearbyDetails Page");
					
				}
			}
		}
		
		);
		
		
		
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
 		
 		console.log('pageinit');
 		
 		if (JsonControllerObject.isThereAConnection() == true)
 		{
	 		JsonControllerObject.InitializeMap();
 		}
		else
		{
			app.ShowAlert("Network","No Network detected");
			
		}
 
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
		
		$(document).delegate("#nearby","pagebeforecreate",function(){
			var listViewDynamic = '<ul id="nearbyListView" data-role="listview" data-filter="true">';
			var listItem = '<li><a href="#">Place One</a></li>';
			var endOfList = '</ul>';
			//var testAppend = "Test :";
			
			
			/* Need to create in html listview with places found */
			
			if ( JsonWebDataObject !== typeof("undefined"))
			{
				if (JsonWebDataObject.currentItemsToReturn !== typeof("undefined"))
				{
					JsonWebDataObject.currentItemsToReturn.forEach(function(placeObject){
					
					// console.log("In Loop" + placeObject.title);
					
					//testAppend += placeObject.title + " ";
					
					
					
					listViewDynamic += '<li><a href="#"><h3>'  + placeObject.title + '</h3><p>' + placeObject.summary+ '</p></a></li>';
					
					});
					
				}
				
				
				
			}
			
			//console.log(testAppend);
			
			var outPut = listViewDynamic + endOfList;
			
			$("#nearbyListView").replaceWith(outPut);
		});
	
	
		
	},
	InitializeMap: function()
	{


	 	// var marker = new google.maps.Marker({  });
	
		var latlng = new google.maps.LatLng(39.98574444, -83.04474722);
	
		var myOptions = { zoom: 14, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};
	
		var w = $(window).width();
		
		//alert("width is: " + w);
		
		console.log("width is : " + $("div.maps").width() );
		
		
		
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
	
		console.log("Hello World " + this.title );
		
		//return true;
	
		// playAudio(markerCount);
	
		});
	
	},
	
	showCategory: function(urlObj, options)
	{
		var categoryName = urlObj.hash.replace( /.*category=/, "");
		//var category = categoryData[categoryName];
		var pageSelector = urlObj.hash.replace(/\?.*$/, "");
		
		console.log("categoryName is: " + categoryName);
		console.log("pageSelector is: " + pageSelector);
		
		//Check for Network Connection
		if (JsonControllerObject.isThereAConnection() == true)
 		{
 			
			
			//Create Visual Display Loading Dialog box
			console.log(" Start Seconds are: " + new Date().getSeconds().toLocaleString());
			 		
 		
 			//Make Json Call for Information
 			JsonWebDataObject.initialize();
 			
 			
 			//clear the Array with previous Found Items
 			//JsonControllerObject.GeoNameArray.length = 0;
 			
 			var $page = $(pageSelector);
 			
 			JsonWebDataObject.connectToDataSource(0,0,$page,options);
 			
 			
 			
 			
 			//Stop Loading Dialog box
 			//console.log(" End Time is: " + new Date().getTime());
 			
 		
	 	}
	 	else
	 	{
		 	app.ShowAlert("Network","No Network detected");
			

	 	}
		
		
		
		//Cannot simply switch to next Page without Ajax Data
		
		
		
		//console.log("pageSelector is: " + $page[0]);
		
				
		
		
	},
	
	switchToReadyPage: function($page, options){
		
		$.mobile.changePage($page, options);

		
	},
	
	isThereAConnection: function()
	{
		if (navigator.connection)
		{
			//PhoneGap Networking Check
			var networkState = navigator.connection.type;
			//var states = {};
			
			if ((networkState == Connection.UNKNOWN) || (networkState == Connection.NONE) )
			{
				app.showAlert("No Network", "Unable to receive data");
				console.log("UNKNOWN or NONE Network Connection");
				return false;
				
			}
			else
			{
				console.log("PhoneGap and Mobile Phone network");
				return true;
				
			}
			
			
			
			
		}
		else
		{
			console.log("Non Phonegap network");
			return true;
		}
		
		
		
	}
	
	
	
	
	
	
	
	
	
}