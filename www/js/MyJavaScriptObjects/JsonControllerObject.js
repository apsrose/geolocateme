var JsonControllerObject = {

	initialize: function(DataBaseObject, WebDataObject){
	
	 this.SqlDataBaseObject = DataBaseObject;
	 this.WebDataObject = WebDataObject;
	 
	// this.GeoNameDataObject = c;
	
	
	
		
	},
	SetUpEventHandlers: function()
	{
		//Handle pageinit event for page #foo
		//
		$(document).delegate("#foo","pageinit", function() 
	    {
	    
	    	if (typeof device === undefined)
	    	{
		    	alert("A jquery mobile page with id of foo was just created");
	    	}
	    	else 
	    	{
		    	console.log('A jquery mobile page with an ID of Foo was just created'); 
		    	
	    	}
	       
        });

		//Handle $ event for page $
		//	
	
	
	
	
		
	}
	
	
	
	
	
	
	
	
	
}