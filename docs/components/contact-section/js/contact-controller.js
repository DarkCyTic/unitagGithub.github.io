const ContactController = (() => {

    const nameContactId = "nameContact";
    const emailContactId = "emailContact";
    const subjectContactId = "subjectContact";
    const messageContactId = "messageContact";

    return {
        init(){

            (function initVM () {

            })();

            (function initDOM () {
                $("#sendContactButton").on('click', function(){
                    if(ContactController.validate()){
                        ContactService.postForm().done(function(data){
                            console.log(data);
                            ContactDirective.emailSent();
                        });
                    }
                });
            })();

        },
        validate() {

            if(!FormValidation.validateName(nameContactId)){
                return false;
            }

            if(!FormValidation.validateEmail(emailContactId)){
                return false;
            }

            if(!FormValidation.validateSubject(subjectContactId)){
                return false;
            }

            if(!FormValidation.validateMessage(messageContactId)){
                return false;
            }

            return true;
        }
    };
})();
