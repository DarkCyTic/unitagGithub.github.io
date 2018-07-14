const PartnersDirective = (() => {

    return {
        init(){
            PartnersDirective.addHover();
        },
        addHover(){
            $('#partners-section img').hover(function() {
              $('#partners-section img').not(this).each(function(){
                  $(this).css('transform', 'scale(0.8)');
                  $(this).css('transition', 'transform 1s');
              });
              $(this).css('transform', 'scale(1.5)');
              $(this).css('transition', 'transform 1s');
            }, function() {
              $('#partners-section img').css('transform', 'scale(1.0)');
              $('#partners-section img').css('transition', 'transform 1s');
            });
        }
    };
})();
