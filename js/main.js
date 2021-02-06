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


    // Галерея

    const buttons = document.querySelectorAll( '.gallery__item' );
    const overlay = document.querySelector( '.overlay' );
    const overlayImage = document.querySelector( '.overlay-inner' );

    function open( e ) {
        overlay.classList.add( 'open' );

        const src = e.currentTarget.querySelector( 'img' ).src;

        console.log( src );
        // overlayImage.src = src;
        overlayImage.innerHTML = '<img class="overlay__img" src="' + src +'" alt="">' + '<button class="closeBtn"><i class="fa fa-times" aria-hidden="true"></i></button>';
        console.log( overlayImage );
    }

    function close() {
        overlay.classList.remove( 'open' );
    }

    buttons.forEach( button => button.addEventListener( 'click', open ));
    overlay.addEventListener( 'click', close );
});

