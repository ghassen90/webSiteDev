jQuery(document).ready(function(){
  jQuery('#contact-form').on('submit',function(e) {  //Don't foget to change the id form
  jQuery.ajax({
      url:'contact.php', //===PHP file name====
      data:jQuery(this).serialize(),
      type:'POST',
      success:function(data){
          swal({
              title: "Merci !",
              text: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
              icon: "success",
             timer: 3000
           }).then(function() {
            jQuery('#contact-form')[0].reset();
                   });
        
      },
      error:function(data){

         swal({
              title: "Oups...",
              text: "Une erreur est survenue :(",
              icon: "error",
             timer: 3000
           })
      },
  
    });
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
  });
  
  
  jQuery('#subscribe-form').on('submit',function(e) {  //Don't foget to change the id form
  jQuery.ajax({
      url:'subs.php', //===PHP file name====
      data:jQuery(this).serialize(),
      type:'POST',
      success:function(data){
        //Success Message == 'Title', 'Message body', Last one leave as it is
	      swal({
              title: "Merci !",
              text: "Votre demande d'abonnement a été envoyée avec succès.",
              icon: "success",
              showCancelButton: false,
             showConfirmButton: false,
            timer: 3000
           }).then(function() {
            jQuery('#subscribe-form')[0].reset();
                   });

      },
      error:function(data){
        //Error Message == 'Title', 'Message body', Last one leave as it is

         swal({
              title: "Oups...",
              text: "Une erreur est survenue :(",
               icon: "error",
             timer: 3000
           });
      }
    });
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
  });
});