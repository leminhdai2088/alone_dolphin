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