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
    initialize: function() {
       
        
        this.bind();
        
    },
    bind: function() {
    
    	// Register to listen to event on Phone
        document.addEventListener('deviceready', this.deviceready, false);
    
       // Method for testing in Web Browser
       // comment out before build
	   this.documentLoad();
	    
    },
    documentLoad: function(){
	    
	    	 console.log("document Load Event");
	    	 app.report('devicenotinPhoneGap');
	    	 app.setupjqueryMobileEvents();
	    
    },
    deviceready: function() {
    	//				Only called on Device
    	// 
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        
        
        app.report('deviceready');
        
        app.setupjqueryMobileEvents();
        
        
        
        
        
    },
    report: function(id) {
    
        // Report the event in the console
        
        console.log("Report: " + id);
        

    },
    setupjqueryMobileEvents: function() {
	    
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
	    
	    
	    
    }
    
};
