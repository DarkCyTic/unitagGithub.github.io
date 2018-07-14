const ContactDirective = (() => {
    return {
        emailSent(){
            $("#contact-form").addClass("invisibleElement");
            $("#contactSubmitDiv").addClass("invisibleElement");
            $("#emailSentDiv").removeClass("invisibleElement");
        }
    };

})();
