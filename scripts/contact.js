(function($) {
  "use strict";


  /*==================================================================
  [ Focus Contact2 ]*/
  document.querySelector('.input2').each(function() {
    document.querySelector(this).addEventListener('blur', function() {
      if (document.querySelector(this).value.trim() != "") {
        document.querySelector(this).classList.add('has-val');
      } else {
        document.querySelector(this).removeClass('has-val');
      }
    })
  })



  /*==================================================================
  [ Validate ]*/
  var name = document.querySelector('.validate-input input[name="name"]');
  var email = document.querySelector('.validate-input input[name="email"]');
  var message = document.querySelector('.validate-input textarea[name="message"]');


  document.querySelector('.validate-form').addEventListener('submit', function() {
    var check = true;

    if (document.querySelector(name).value.trim() == '') {
      showValidate(name);
      check = false;
    }


    if (document.querySelector(email).value.trim().match(/^([a-zA-Z0-9_-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(]?)$/) == null) {
      showValidate(email);
      check = false;
    }

    if (document.querySelector(message).value.trim() == '') {
      showValidate(message);
      check = false;
    }

    return check;
  });


  document.querySelector('.validate-form .input2').each(function() {
    document.querySelector(this).focus(function() {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = document.querySelector(input).parent();

    document.querySelector(thisAlert).classList.add('alert-validate');
  }

  function hideValidate(input) {
    var thisAlert = document.querySelector(input).parent();

    document.querySelector(thisAlert).removeClass('alert-validate');
  }



})(jQuery);
