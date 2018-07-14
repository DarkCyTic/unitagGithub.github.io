const RegistrationController = (() => {

    const nameRegistrationId = "nameRegistration";
    const emailRegistrationId = "emailRegistration";

    return {
        init(){
            (function initVM () {

            })();

            (function initDOM () {
                $("#sendRegistrationForm").on('click', function(){
                    if(RegistrationController.validate()){
                        RegistrationService.postForm().done(function(data){
                            $("#registration-section .row").empty();
                            $("#registration-section .row").append(data);
                        });
                    }
                });
            })();
        },
        validate() {

            if(!FormValidation.validateName(nameRegistrationId)){
                return false;
            }

            if(!FormValidation.validateEmail(emailRegistrationId)){
                return false;
            }

            return true;
        }
    };
})();
