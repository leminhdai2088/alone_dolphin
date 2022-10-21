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










