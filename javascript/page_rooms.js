

// xử lý filter
const btnPrice = document.querySelector('.price-js');
const btnColor = document.querySelector('.color-js');
const btnType = document.querySelector('.type-js');

btnPrice.addEventListener('click',function(){
  document.querySelector('.price-choice').classList.toggle('open-filter');
  document.querySelector('.price-js i').classList.toggle('ti-plus');
  document.querySelector('.price-js i').classList.toggle('ti-minus');
})

btnColor.addEventListener('click',function(){
    document.querySelector('.color-choice').classList.toggle('open-filter');
    document.querySelector('.color-js i').classList.toggle('ti-plus');
    document.querySelector('.color-js i').classList.toggle('ti-minus');
})

btnType.addEventListener('click',function(){
    document.querySelector('.type-choice').classList.toggle('open-filter');
    document.querySelector('.type-js i').classList.toggle('ti-plus');
    document.querySelector('.type-js i').classList.toggle('ti-minus');
})


function closeFilterPrice(){
    document.querySelector('.price-choice').classList.remove('open-filter');
    document.querySelector('.price-js i').classList.add('ti-plus');
    document.querySelector('.price-js i').classList.remove('ti-minus');
    
}

function closeFilterColor(){
    document.querySelector('.color-choice').classList.remove('open-filter');
    document.querySelector('.color-js i').classList.add('ti-plus');
    document.querySelector('.color-js i').classList.remove('ti-minus');
}

function closeFilterType(){
    document.querySelector('.type-choice').classList.remove('open-filter');
    document.querySelector('.type-js i').classList.add('ti-plus');
    document.querySelector('.type-js i').classList.remove('ti-minus');
}


document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (!event.target.closest(".price-choice") &&
      !event.target.closest(".price-js")
      ) {
        closeFilterPrice();
      }

      if (!event.target.closest(".color-choice") &&
      !event.target.closest(".color-js")
      ) {
        closeFilterColor();
      }

      if (!event.target.closest(".type-choice") &&
      !event.target.closest(".type-js")
      ) {
        closeFilterType();
      }
    },
    false
  )

// lọc giá tiền
// var price = $('.price-filter .title-filter');


// var filterPrice =document.querySelectorAll('.price-choice input');
// for(var i of filterPrice){
//   i.onclick= function(e){
//     price.innerText = e.target.value;
//   }
// }

// // lọc màu sắc


// var color = $('.color-js .title-filter');


// var filterColor =document.querySelectorAll('.color-choice input');
// for(var i of filterColor){
//   i.onclick= function(e){
//     color.innerText = e.target.value;
//   }
// }

// // lọc loại sản phẩm

// var type = $('.type-js .title-filter');


// var filterType =document.querySelectorAll('.type-choice input');
// for(var i of filterType){
//   i.onclick= function(e){
//     type.innerText = e.target.value;
//   }
// }



// slider

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





