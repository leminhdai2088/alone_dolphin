
$(document).ready(function(){
    $('.img-container').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true, //false: khong vo tan
        // autoplay: true,
        // autoplaySpeed: 2000,
        
        draggable: true, //keo tha
        prevArrow:  `<div class="owl-prev">
                        <i class="fa fa-angle-left"></i>
                    </div>`,
        nextArrow: `<div class="owl-next">
                        <i class="fa fa-angle-right"></i>
                    </div>`,
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
            }
        ]
    });
});


