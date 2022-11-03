
$(document).ready(function(){
    $('.image-slider-2').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true, //false: khong vo tan
        // autoplay: true,
        // autoplaySpeed: 2000,
        draggable: true, //keo tha
        prevArrow:  $(".owl-prev"),
        nextArrow: $(".owl-next"),
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    lidesToShow: 4,    
                },
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    lidesToShow: 3,    
                },
                breakpoint: 0,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    lidesToShow: 2,    
                },
            },
        ]
    });
  });