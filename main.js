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

  function hideInputs(){
      var inputs = document.getElementById("search-fields-container");
      inputs.style.left = '-30%';
      showResults();
      var mpg = getMpg();
      console.log("Ooo shieeet we got MPG!!!: " +mpg);
  }
  function showResults(){
      var showResults = document.getElementById("results-container");
      setInterval(function(){ 

        showResults.style.left = '0';
       }, 500);
  }

