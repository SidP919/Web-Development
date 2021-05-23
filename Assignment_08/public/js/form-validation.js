//Below code is taken from here: https://getbootstrap.com/docs/5.0/forms/validation/#custom-styles
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.form-validate')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  
  // On an another note, above is a good example of iife(imediately invoked function expression)
  // It has the syntax: 
  // ()()
  // OR
  // ( 
  //    function body comes here 
  // )( 
  //      arguments are defined here 
  // )