/**
 * Created by Dell on 16-May-17.
 */
var length =20;
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > length) {
        $('#header-fix').removeClass('header-f');
        $('#header-fix').addClass('header-fix');
    }
    else {

        $('#header-fix').removeClass('header-fix');
        $('#header-fix').addClass('header-f');
    }
});


new WOW().init();


$(function() {
    $('nav#menu').mmenu({
        extensions  : [ 'effect-slide-menu', 'pageshadow' ],
        searchfield : true,
        counters  : true,
        navbar    : {
            title   : 'Danh mục menu'
        },
        navbars   : [
            {
                position  : 'top',
                content   : [ 'searchfield' ]
            }, {
                position  : 'top',
                content   : [
                    'prev',
                    'title',
                    'close'
                ]
            }, {
                position  : 'bottom',
                content   : [
                ]
            }
        ]
    });
});


$(document).ready(function(){

    $('.tabs a').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tabs a').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})


// slide owl carosel
$(document).ready(function() {

    var owl = $("#slide-chinh");

    owl.owlCarousel({

        autoPlay: 5000,
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : [474, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : false,
        navigationText : ["",""],
        singleItem : true,
        autoHeight : true,
        transitionStyle : "goDown"

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});

// slide owl carosel
$(document).ready(function() {

    var owl = $("#slide-product");

    owl.owlCarousel({

        autoPlay: 5000,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : [474, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : false,
        navigationText : ["",""],

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});

/*
// slide owl carosel
$(document).ready(function() {

    var owl = $("#slide-xu-1");

    owl.owlCarousel({

        autoPlay: 5000,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : [474, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : false,
        navigationText : ["",""],

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});



// slide owl carosel
$(document).ready(function() {

    var owl = $("#slide-xu-2");

    owl.owlCarousel({

        autoPlay: 5000,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : [474, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : false,
        navigationText : ["",""],

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});





// slide owl carosel
$(document).ready(function() {

    var owl = $("#slide-xu-3");

    owl.owlCarousel({

        autoPlay: 5000,
        items : 4, //10 items above 1000px browser width
        itemsDesktop : [1000,4], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : [474, 1], // itemsMobile disabled - inherit from itemsTablet option
        navigation : false,
        navigationText : ["",""],

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});*/


$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})



$(document).ready(function() {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });




})