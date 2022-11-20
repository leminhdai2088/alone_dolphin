$(document).ready(function(){
    $('.image-slider-1').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true, //false: khong vo tan
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: true, //keo tha
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 1,
                    }
            },
        ]
    });
  });
  $(document).ready(function(){
    $('.image-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true, //false: khong vo tan
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: true, //keo tha
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3
                    }
            },
            {
                breakpoint: 740,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2
                    }
            },
            
        ]
    });
  });
  $(document).ready(function(){
    $('.image-slider-0').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true, //false: khong vo tan
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: true, //keo tha
        prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 2,
                    }
            },
        ]
    });
  });
  $(window).load(function() {
    $('#slider').nivoSlider({
        pauseTime: 2000,
        prevText:'<ion-icon class="nivo-arrow" name="chevron-back-outline"></ion-icon>',
        nextText:'<ion-icon class="nivo-arrow" name="chevron-forward-outline"></ion-icon>',
    });
    });
  
