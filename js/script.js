

$(desp).hide()

    $(devp).hide(500)
    
    
        $("button").on('click',function() {
          $("design").toggle("Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');');");
      });
      $(document).ready(function(){
        $("#development-image").click(function(){
          $("#development-image").slideDown('').hide('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
          $("#development").show('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');');
        });
        $("#development").click(function(){
          $("#development").slideUp('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');');
          $("#development-image").slideDown('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');');
        });
      });
      
      $(document).ready(function(){
        $("#design-image").click(function(design-image){
          $("#design-image").slideDown('').hide('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
          $("#design").show('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
        });
        $("#design").click(function(){
          $("#design").slideUp('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
          $("#design-image").slideDown('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
        });
      });
      a:hover {
        background-color: grey;
      }
      
      $(document).ready(function(){
        $("#product-image").click(function(){
          $("#product-image").slideDown('All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>
        They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>
        ').hide("#product-image");
          $("#product").show('All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>
          They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>
        ');
        });
        $("#product").click(function(){
          $("#product").slideUp('All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>
          They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>
        ');
          $("#product-image").slideDown('All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>
          They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.</p>
        ');
        });
      });
      

      $(document).ready(function(){
        $("#work1").mouseover(function(work1){
          $("#overlay").show(work1);
        }).mouseout(function(work1){
          $("#overlay").hide();
        });
      });
      $(document).ready(function(){
        $("#work2").mouseover(function(work2){
          $("#overlay2").show(work2);
        }).mouseout(function(work2){
          $("#overlay2").hide();
        });
      });
      $(document).ready(function(){
        $("#work3").mouseover(function(work3){
          $("#overlay3").show(work3);
        }).mouseout(function(work3){
          $("#overlay3").hide();
        });
      });
      $(document).ready(function(work4){
        $("#work4").mouseover(function(work4){
          $("#overlay4").show(work4);
        }).mouseout(function(work4){
          $("#overlay4").hide();
        });
      });

      
      $(document).ready(function(work5){
        $("#work5").mouseover(function(work5){
          $("#overlay5").show(work5);
        }).mouseout(function(work5){
          $("#overlay5").hide();
        });
        $("#work6").mouseover(function(work6){
          $("#overlay6").show(work6);
        }).mouseout(function(work6){
          $("#overlay6").hide();
        });
        $("#work7").mouseover(function(work7){
          $("#overlay7").show(work7);
        }).mouseout(function(work7){
          $("#overlay7").hide();
        });
        $("#work8").mouseover(function(work8){
          $("#overlay8").show(work8);
        }).mouseout(function(work8){
          $("#overlay8").hide();
        });
      });
      
      $(document).ready(function(){
        $("form#form34A").submit(function(event){
          // event.preventDefault();
          var name = $("input#MERGE1").val();
          var email = $("input#MERGE0").val();
          var message = $("textarea#comment").val();
          if ($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert (name + ", we have received your message. Thank you for reaching out to us.");
          }
          else {
            alert("Please enter your name and email!");
          }
          
        });
      
      });
      function on() {
        document.getElementById("overlay").style.display = "workflow";
      }
      
      function off() {
        document.getElementById("overlay").style.display = "hide";
      }

      



      

      