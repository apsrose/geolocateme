var JsonControllerObject = {

	initialize: function(DataBaseObject, WebDataObject){
	
	 this.SqlDataBaseObject = JsonSqlDataBaseObject;
	 this.WebDataObject = JsonWebDataObject;
	 
	// this.GeoNameDataObject = c;
	
	
	
		
	},
	SetUpEventHandlers: function()
	{
		//Handle pageinit event for page #foo
		//
		$(document).delegate("#places","pageinit", function() 
	    {
	    
	    	if (typeof device === "undefined")
	    	{
		    	console.log('A jquery mobile page with an ID of places was just created');	    	
		    }
	    	else 
	    	{
		    	app.showAlert("A jquery mobile page with id of places was just created");
		    	
	    	}
	       
        });

		//Handle $ event for page $
		//	
	
	
	
	
		
	}
	
	
	
	
	
	
	
	
	
}