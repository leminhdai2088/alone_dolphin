const btnPrice = document.querySelector('.price-js');
const btnColor = document.querySelector('.color-js');
const btnType = document.querySelector('.type-js');

btnPrice.addEventListener('click',function(){
    document.querySelector('.price-choice').classList.add('open-filter');
})

btnColor.addEventListener('click',function(){
    document.querySelector('.color-choice').classList.add('open-filter');
})

btnType.addEventListener('click',function(){
    document.querySelector('.type-choice').classList.add('open-filter');
})


function closeFilterprice(){
    document.querySelector('.price-choice').classList.remove('open-filter');
}










