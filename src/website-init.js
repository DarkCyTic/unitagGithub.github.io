const WebsiteInit = (() => {
    return {
        init(){
            (function initVM () {

            })();

            (function initDOM () {

                $(document).ready(function() {

                    // Add scrollspy to <body>
                    $('body').scrollspy({
                        target: ".navbar",
                        offset: 300
                    });
                });

                NavigationController.init();
                SmoothLinkScrollingController.init();
                ContactController.init();
                CountdownController.init();
                PartnersController.init();
                RegistrationController.init();
            })();
        }
    }
})();
