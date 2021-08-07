

$(desp).hide()

    $(devp).hide(500)
    
    
        $("button").on('click',function() {
          $("design").toggle("");
      });
      $(document).ready(function(){
        $("#development-image").click(function(){
          $("#development-image").slideDown('').hide('Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing
          Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.');
          $("#development").show('');
        });
        $("#development").click(function(){
          $("#development").slideUp('1500');
          $("#development-image").slideDown('1500');
        });
      });
      
      $(document).ready(function(){
        $("#design-image").click(function(design-image){
          $("#design-image").slideDown('design-image').hide('design');
          $("#design").show('design');
        });
        $("#design").click(function(){
          $("#design").slideUp('1500');
          $("#design-image").slideDown('1500');
        });
      });
      a:hover {
        background-color: grey;
      }
      
      $(document).ready(function(){
        $("#product-image").click(function(){
          $("#product-image").slideDown('1500').hide('p');
          $("#product").show('p');
        });
        $("#product").click(function(){
          $("#product").slideUp('1500');
          $("#product-image").slideDown('1500');
        });
      });
      
      $(document).ready(function(){
        $("#work1").mouseover(function(){
          $("#overlay").show();
        }).mouseout(function(){
          $("#overlay").hide();
        });
      });
      $(document).ready(function(){
        $("#work2").mouseover(function(){
          $("#overlay2").show();
        }).mouseout(function(){
          $("#overlay2").hide();
        });
      });
      $(document).ready(function(){
        $("#work3").mouseover(function(){
          $("#overlay3").show();
        }).mouseout(function(){
          $("#overlay3").hide();
        });
      });
      $(document).ready(function(){
        $("#work4").mouseover(function(){
          $("#overlay4").show();
        }).mouseout(function(){
          $("#overlay4").hide();
        });
      });

      
      $(document).ready(function(){
        $("#work5").mouseover(function(){
          $("#overlay5").show();
        }).mouseout(function(){
          $("#overlay5").hide();
        });
        $("#work6").mouseover(function(){
          $("#overlay6").show();
        }).mouseout(function(){
          $("#overlay6").hide();
        });
        $("#work7").mouseover(function(){
          $("#overlay7").show();
        }).mouseout(function(){
          $("#overlay7").hide();
        });
        $("#work8").mouseover(function(){
          $("#overlay8").show();
        }).mouseout(function(){
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
      