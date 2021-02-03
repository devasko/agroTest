// Скрипты страниц

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
    });


});


const burger = document.getElementById('burger');
const menu = document.getElementById('nav__list');
burger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
