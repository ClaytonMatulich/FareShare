//page functionality
$(document).ready(function(){
    // Add smooth scrolling to all links
    $('#begin-button').on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  function showInputs(){
    //hideResults();
    var inputs = document.getElementById("search-fields-container");
    inputs.style.visibility = 'visible';
    inputs.style.opacity = '1';
    
 
}

  function hideInputs(){
      var inputs = document.getElementById("search-fields-container");
      inputs.style.visibility = 'hidden';
      inputs.style.opacity = '0';
      var mpg = getMpg();
      showResults();
      
   
  }
  function showResults(){
     //hideInputs();
      var results = document.getElementById("results-container");
      results.style.visibility = 'visible';
      results.style.opacity = '1';
      
      
  }
  function hideStuff(){
      var resultsContainer = document.getElementById("results-container");
      resultsContainer.style.visibility = 'hidden';
      resultsContainer.style.opacity = '0';
      showInputs();
      
    }

