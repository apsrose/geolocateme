/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
var app = 
{
    initialize: function() 
    { 
    
    this.bind();
        
    },
    bind: function() 
    {
    
    	/* && navigator.notification && navigator.compass */
    
    	if (window.cordova)
    	{
	    	
	    	// Register to listen to event on Phone
	    	document.addEventListener('deviceready', this.deviceready, false);
	
    	}
    	else
    	{
    		// jQuery event ready to be replaced with 
    		// jQuery Mobile event ready
    		
	    	$(document).ready( app.documentLoad );
	    		
    	}
    
	    
    },
    documentLoad: function()
    {
	    
	    	// alert("Document Ready for Web Browser");
	    	
	    	 console.log("document Load Event");
	    	 console.log('devicenotinPhoneGap');
	    	 app.setupJsonControllerForEvents();
	    
    },
    deviceready: function() 
    {
	    	//	Only called on Device
	    	// 
	        // This is an event handler function, which means the scope is the event.
	        // So, we must explicitly called `app.report()` instead of `this.report()`.
	        
	        console.log("Device Ready fired for PhoneGap");
	        
	        console.log('deviceready');
	        
	        app.setupJsonControllerForEvents();
            
    },
    report: function(id) {
    
        	// Report the event in the console
        
        	console.log("Report: " + id);
        
    },
    setupJsonControllerForEvents: function() 
    {
	    
	   		// alert("Hello World in setupJsonController");  
	   		// app.showAlert("Hello World");
	   		
	   		JsonControllerObject.initialize();
	   		JsonControllerObject.SetUpEventHandlers();
	   		
	   		
	      
    },
    showAlert: function (message, title)
    {
	    	// Native Alert for PhoneGap Application
	    	//
	    	
		    if (navigator.notification) {
			    navigator.notification.alert(message, null, title, 'OK');
		    } else {
			    alert(title ? (title + ":" + message) : message);
		    }
    }
    
    
};
