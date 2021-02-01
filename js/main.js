$( document ).ready( function () {
    $( window ).scroll(function () {
       if ( $( this ).scrollTop() > 500 ) {
           $( '.scrollTop' ).fadeIn();
       } else {
           $( '.scrollTop' ).fadeOut();
       }
    });

    $( '.scrollTop' ).click(function () {
        $( 'html, body' ).animate({scrollTop : 0}, 800);
    })
});
