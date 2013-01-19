var JsonSqlDataBaseObject =
{

// this.db = null;

 initialize : function()
 { 
 	
 
 	try 
 	{ 	if (!window.openDatabase) 
 		{
        alert('not supported');
 		}
 	
 	else 
    	{      
    	var shortName = 'mydatabase1';
        var version = '1.0';
        var displayName = 'My Important Database1';
        var maxSize = 65536; // in bytes 64kb
        this.db = openDatabase(shortName, version, displayName, maxSize);
        // You should have a database instance in db.
    	}
    } catch(e) {
      // Error handling code goes here.
      if (e == 2) {
          // Version number mismatch.
          alert("Invalid database version.");
      			} else 
         { alert("Unknown error "+e+".");}
			return; 
			}
			
  alert("Database is: " + this.db);
  
 },
 
 saveObjectInDatabase : function(anObject)
 {
 	if (!anObject === undefined)
 	{
 	
 	
 	
 	
 	}
 	else {
 		alert("Error not valid object");
 	}
 
 
 
 }








}