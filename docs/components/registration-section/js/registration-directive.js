const RegistrationDirective = (() => {
    return {
        emailSent(){
            $("#registrationForm").addClass("invisibleElement");
            $("#registerSumbitDiv").addClass("invisibleElement");
        }
    };

})();
