// Map

    var map;

    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 48.922686,
                lng: 24.710722
            },
            zoom: 14
        });
    }

// Scroll    
       $('a[href*="#"]')
           .not('[href="#"]')
           .not('[href="#0"]')
           .click(function (event) {
               if (
                   location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                   location.hostname == this.hostname
               ) {
                   var target = $(this.hash);
                   target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                   if (target.length) {
                       event.preventDefault();
                       var menuHeight = $("html").outerHeight(true);
                       $('html, body').animate({
                           scrollTop: target.offset().top
                       }, 1000);
                   }
               }
           });

// Button
    $(document).ready(function(){
        $('.nav__mob').click(function () {
            $('.nav__mob').toggleClass('active')
        })
    })

