'use strict';

window.addEventListener('load', () => {
    const form = document.forms['form'];
    let html = document.getElementById("verifyText");

    form.addEventListener('submit', (event) => {
        const name = form.elements['full-name'];
        const mail = form.elements['e-mail'];
        const confirm = form.elements['confirm-mail'];
        const phone = form.elements['phone'];
        const address = form.elements['address'];

        let isValid = true;

        //Name Validation
        if (name.value.trim().length === 0) {	
            document.getElementById("verifyName").innerHTML = "Name is missing";
            isValid = false;
        }else{
            document.getElementById("verifyName").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //E-mail Validation
        const gmail_re = /^[a-z0-9\.]+@gmail\.com$/i;
		
		if (mail.value.trim().length === 0) {
			document.getElementById("verifyMail").innerHTML = "E-mail is missing";
            document.getElementById("successText").innerHTML = "";
			isValid = false;
		} else if (!gmail_re.test(mail.value)) {
			document.getElementById("verifyMail").innerHTML = "E-mail is not valid";
            document.getElementById("successText").innerHTML = "";
			isValid = false;
		}else{
            document.getElementById("verifyMail").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //E-mail Confirmation
        if (confirm.value.trim().length === 0){
            document.getElementById("verifyConfirm").innerHTML = "Confirmation Mail is missing";
            document.getElementById("successText").innerHTML = "";
            isValid = false;
        }else if (!gmail_re.test(confirm.value)) {
			document.getElementById("verifyConfirm").innerHTML = "E-mail is not valid";
            document.getElementById("successText").innerHTML = "";
			isValid = false;
		}else{
            document.getElementById("verifyConfirm").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        if(mail.value.trim() != confirm.value.trim()){
            document.getElementById("verifyText").innerHTML = "Mail and Confirmation Mail do not match";
            document.getElementById("successText").innerHTML = "";
            isValid = false;    
        }else{
            document.getElementById("verifyText").innerHTML = "";
            document.getElementById("successText").innerHTML = "";     
        }

        //Phone Confirmation
        const phone_re = /^\d{3,5}[- ]?\d{5,}$/;

		if (phone.value.trim().length === 0) {			
			document.getElementById("verifyPhone").innerHTML ="Phone is missing";
            document.getElementById("successText").innerHTML = "";
			isValid = false;
		} else if (!phone_re.test(phone.value)) {	
			document.getElementById("verifyPhone").innerHTML = "Phone is not valid";
            document.getElementById("successText").innerHTML = "";
			isValid = false;
		}else{
            document.getElementById("verifyPhone").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }

        //Address Confirmation
        if (address.value.trim().length === 0){
            document.getElementById("verifyAddress").innerHTML = "Address is missing";
            document.getElementById("successText").innerHTML = "";
            isValid = false;
        }else{
            document.getElementById("verifyAddress").innerHTML = "";
            document.getElementById("successText").innerHTML = "";
        }
        

        //Validation Text
        if (!isValid){
            event.preventDefault();
        }else{
            document.getElementById("verifyText").innerHTML = "";
            document.getElementById("verifyName").innerHTML = "";
            document.getElementById("verifyMail").innerHTML = "";
            document.getElementById("verifyConfirm").innerHTML = "";
            document.getElementById("verifyPhone").innerHTML = "";
            document.getElementById("verifyAddress").innerHTML = "";
            document.getElementById("successText").innerHTML = "You are amazing!";
            event.preventDefault();
        }
    })

})