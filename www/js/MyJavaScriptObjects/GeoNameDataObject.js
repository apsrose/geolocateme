/*
	MVC 
	
	Model Helper Object
	
	GeoNameDataObject exists as Object with one location of 
	Interest

*/

// Function creates an object with GeoNames Data from Ajax Query

var GeoNameDataObject = 
	function (lang, title, summary, feature, countryCode, elevation, population, lat, lng, wikipediaUrl, thumbnailImg, rank)
{
  	this.lang = lang;
  	this.title = title;
  	this.summary = summary;
  	this.feature = feature;
  	this.countryCode = countryCode;
  	this.elevation = elevation;
  	this.population = population;
  	this.lat = lat;
  	this.lng = lng;
  	this.wikipediaUrl = wikipediaUrl;
  	this.thumbnailImg = thumbnailImg;
  	this.rank = rank;
	

}


// Function object creates an Image Reference from an Ajax Query

var ImageDataObject = 
		function(IdentificationNumber, lang, title, lat, lng, thumbnailImg)
{
		// this.IDNumber = DateTimeNowLong + title + lat + lng ToString()
		this.lang = lang;
		this.title = title;
		this.lat = lat;
		this.lng = lng;
		this.thumbnailImg = thumbnailImg;
		
		
		
		
}