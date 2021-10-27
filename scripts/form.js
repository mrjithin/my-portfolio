function validate() {
    "use strict";
    // Focus Contact2
    Array.from(document.querySelectorAll('.input2')).forEach(item => {
        item.addEventListener('blur', event => {
            if(event.target.value.trim() != "") {
                event.target.classList.add('has-val');
            }
            else {
                event.target.classList.remove('has-val');
            }
        })
    })
     
    // Validate 
    const name = document.querySelector('.validate-input input[name="name"]');
    const email = document.querySelector('.validate-input input[name="email"]');
    const message = document.querySelector('.validate-input textarea[name="message"]');


    document.querySelector('.validate-form').addEventListener('submit' ,event => {
        let check = true;
        if(name.value.trim() == ''){
            showValidate(name);
            check=false;
        }
        if(email.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if(message.value.trim() == ''){
            showValidate(message);
            check=false;
        }
        return check;
    });

    Array.from(document.querySelector('.validate-form .input2')).forEach(item => {
        item.addEventListener("focus", event => {
           hideValidate(item);
       });
    });

    function showValidate(input) {
        const thisAlert = document.querySelector(input).parentNode;
        thisAlert.classList.add('alert-validate');
    }

    function hideValidate(input) {
        const thisAlert = document.querySelector(input).parentNode;
        thisAlert.classList.remove('alert-validate');
    }
}
validate();
