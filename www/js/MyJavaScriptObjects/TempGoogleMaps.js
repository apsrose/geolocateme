var map;
var bluedot;

/*
$().ready( function() {


alert("Hello World");

//InitializeMap();

});

*/

$(document).delegate("#foo", "pageinit", function()
{
	var bigarray = ["one", "two", "three"];
	
	var joinarray = bigarray.join(",");
	
	
	var slicedarray = bigarray.slice(2,3);
	
	alert ("Test join: " + slicedarray);



});



$( document ).delegate("#bar", "pageinit", function() 
{



 //alert('pageinit');
 
 InitializeMap();
 
});


$(document).delegate("#bar", "pageshow", function()
{
	
	
	//alert("pageshow event");
	//console.log("resize maps on page #bar");
	var latlng = map.getCenter();
	
	alert("Center is: " + latlng );
	google.maps.event.trigger(map,'resize');
	//Other events are zoom_changed & center_changed & bounds_changed
	
	map.setCenter(latlng);



});




function InitializeMap()
{


 // var marker = new google.maps.Marker({  });

var latlng = new google.maps.LatLng(39.98574444, -83.04474722);

var myOptions = { zoom: 14, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP};

map = new google.maps.Map(document.getElementById("maps"), myOptions); 	

bluedot = new google.maps.MarkerImage('purpledot.png',
new google.maps.Size(38, 38), 
new google.maps.Point(0, 0), 
new google.maps.Point(19, 19) );

addMarker(latlng);
addMarker(new google.maps.LatLng(39.98540278, -83.04531944));
addMarker(new google.maps.LatLng(39.98600278, -83.04510000));
addMarker(new google.maps.LatLng(39.98670000, -83.04495833));
addMarker(new google.maps.LatLng(39.98721389, -83.04514444));


//alert("Init Maps");

}

function TestRefresh()
{
	//var map = this.get('map');
	
	var latLng = map.getCenter();
	$(map).triggerEvent('resize');
	
	//google.maps.event.trigger(map,'resize');
	
	map.setCenter(latLng);


}





function addMarker(latlon)
 {
	var marker = new google.maps.Marker({
	position : latlon,
	map : map,
	icon : bluedot, 
	title : "Purple Dot Spot",
	clickable: true });
	
	
	
	google.maps.event.addDomListener(marker, 'click', function() {
	
	
	//google.maps.event.addListener(marker, 'click', function() { 
	
	alert("Hello World " + this.title );
	
	// playAudio(markerCount);
	
	});
	
	
}