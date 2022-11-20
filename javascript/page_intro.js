
// $(document).ready(function(){
    
// });

$('.img-container').slick({
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
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1 
            } 
        }
    ]
});
