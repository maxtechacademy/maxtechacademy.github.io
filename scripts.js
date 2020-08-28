!(function ($){
    "use strict";
// Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

//sidebar toggle
$("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

//sweetalert functions
function sweetalert (){
				Swal.fire({ 
    title: 'Requirement is:',
 				html: '<i class="icofont-tick-mark"></i>A working laptop<i class="icofont-laptop-alt icofont-2x"></i> having a minimum of 2GB RAM', 
				icon: 'info', 
    confirmButtonColor:'#e82d00',
				confirmButtonText:'<i class="icofont-thumbs-up"></i>Got it!',
				confirmButtonAriaLabel: 'Thumbs up, great!',
  })
}

function sweetalert1 (){
				Swal.fire({ 
    title: 'Requirement is:',
 				html: '<i class="icofont-tick-mark"></i>A working laptop<i class="icofont-laptop-alt icofont-2x"></i> or smartphone<i class="icofont-smart-phone icofont-1x"></i> having a minimum of 2GB RAM',   								
				icon: 'info', 
    confirmButtonColor:'#e82d00',
				confirmButtonText:'<i class="icofont-thumbs-up"></i> Got it!',
				confirmButtonAriaLabel: 'Thumbs up, great!',
  })
}

function sweetalert2 (){
				Swal.fire({ 
    title: 'none',
 				html: '<i class="icofont-tick-mark"></i>There is no requirement for this programme<br><i class="icofont-wink-smile icofont-2x"></i>', 
				icon: 'info', 
    confirmButtonColor:'#e82d00',
				confirmButtonText:'<i class="icofont-thumbs-up"></i> Great!',
				confirmButtonAriaLabel: 'Thumbs up, great!',
  })
}

function change (){
  $("#Logo").html("Maxtech Computer Academy");
  $("#Logo").click(function(){
    $("#Logo").html("MCA");
    $("#Logo").off("click");
  });
};
  

function Change1 (){
  document.getElementById ("image").innerHTML="MCA";
}

