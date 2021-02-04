// Скрипты страниц

$( document ).ready( function () {
    // Кнопка прокрутки вверх
    $( window ).scroll(function () {
        if ( $( this ).scrollTop() > 500 ) {
            $( '.scrollTop' ).fadeIn();

            $( '.top-nav__list.show' ).fadeOut();

        } else {
            $( '.scrollTop' ).fadeOut();
        }
    });

    $( '.scrollTop' ).click(function () {
        $( 'html, body' ).animate({scrollTop : 0}, 800);
    });

    //  Бургер главного меню
    const burger = document.getElementById('burger' ),
          times = document.getElementById('times' ),
          menu = document.getElementById('nav__list' );
    burger.addEventListener('click', () => {
        menu.classList.toggle('show');

        if ( $( 'top-nav__list' ).hasClass( 'show' ) ) {
            $( '.top-nav__list.show' ).fadeOut();
        } else {
            $( '.top-nav__list.show' ).fadeIn();
        }
    });

    times.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

});

