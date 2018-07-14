const FormValidation = (() => {

    return {
        validateName(nameId){
            let name = document.getElementById(nameId).value;
            if (name == "") {
                FormValidation.showInvalidInput(nameId);
                return false;
            }else{
                FormValidation.hideInvalidInput(nameId);
                return true;
            }
        },
        validateEmail(emailId){
            let email = document.getElementById(emailId).value;
            if (email == "") {
                FormValidation.showInvalidInput(emailId);
                return false;
            } else {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(email)) {
                    FormValidation.showInvalidInput(emailId);
                    return false;
                }
                FormValidation.hideInvalidInput(emailId);
                return true;
            }
        },
        validateSubject(subjectId){
            let subject = document.getElementById(subjectId).value;
            if (subject == "") {
                FormValidation.showInvalidInput(subjectId);
                return false;
            }else{
                FormValidation.hideInvalidInput(subjectId);
                return true;
            }
        },
        validateMessage(messageId){
            let message = document.getElementById(messageId).value;
            if (message == "") {
                FormValidation.showInvalidInput(messageId);
                return false;
            }else{
                FormValidation.hideInvalidInput(messageId);
                return true;
            }
        },
        showInvalidInput(id){
            let elementId = "#" + id;
            $(elementId).siblings(".invalidInput").addClass("visibleInvalidInput");
            $(elementId).siblings(".validInput").removeClass("visibleValidInput");
        },
        hideInvalidInput(id){
            let elementId = "#" + id;
            $(elementId).siblings(".invalidInput").removeClass("visibleInvalidInput");
            $(elementId).siblings(".validInput").addClass("visibleValidInput");
        }
    }
})();
