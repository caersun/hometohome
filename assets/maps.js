

// Attach your callback function to the `window` object
// window.initMap = function(lattitude, longitude) {
  // Initialize and add the map
  function initMap(lattitude, longitude) {
    // The location of Parameter Location
    var ParameterLocation = {lat: 30.3451668, lng: -97.9260464};
    if (lattitude && longitude){
       parameterLocation = {lat: lattitude, lng: longitude};
    }
    
    // The map, centered at Trail Location
    var map = new google.maps.Map(
        document.getElementById('gMap'), {zoom: 12, center: parameterLocation});
    // The marker, positioned at Trail Location
    var marker = new google.maps.Marker({position: parameterLocation, map: map});
  // }
};

function loadScript (){
  // Create the script tag, set the appropriate attributes
  var script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBbFv_DPCC6RcsThyeTpmc0yTqSMwh3XrQ&callback=initMap';
  script.defer = true;
  // Append the 'script' element to 'head'
  document.head.appendChild(script);
  }
  
  window.onload = loadScript;