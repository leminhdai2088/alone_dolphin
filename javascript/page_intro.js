// document.addEventListener("DOMContentLoaded",function(){
    
// },false);
const imgDisplayNumber = 4;
const imgs = [
    "../assets/img_page_intro/imgslide1.webp",
    "../assets/img_page_intro/imgslide2.jpg",
    "../assets/img_page_intro/imgslide3.webp",
    "../assets/img_page_intro/imgslide4.webp",
    "../assets/img_page_intro/imgslide5.webp",
    "../assets/img_page_intro/imgslide6.webp",
    "../assets/img_page_intro/imgslide7.webp",
    "../assets/img_page_intro/imgslide8.webp",
    "../assets/img_page_intro/imgslide9.webp",
    "../assets/img_page_intro/imgslide10.webp",
    "../assets/img_page_intro/imgslide11.jpg",
    "../assets/img_page_intro/imgslide12.webp",
    "../assets/img_page_intro/imgslide13.webp",
    "../assets/img_page_intro/imgslide14.webp",
    "../assets/img_page_intro/imgslide15.jpg",
    "../assets/img_page_intro/imgslide16.webp",
    "../assets/img_page_intro/imgslide17.webp",
    "../assets/img_page_intro/imgslide18.webp",
    "../assets/img_page_intro/imgslide19.webp",
    "../assets/img_page_intro/imgslide20.webp",
    "../assets/img_page_intro/imgslide21.webp",
    "../assets/img_page_intro/imgslide22.webp",
    "../assets/img_page_intro/imgslide23.webp",
    "../assets/img_page_intro/imgslide24.jpg",
    "../assets/img_page_intro/imgslide25.webp",
    "../assets/img_page_intro/imgslide26.webp",
    "../assets/img_page_intro/imgslide27.webp",
    "../assets/img_page_intro/imgslide28.webp",
    "../assets/img_page_intro/imgslide29.webp",
    "../assets/img_page_intro/imgslide30.jpg",
    "../assets/img_page_intro/imgslide31.jpg",
    "../assets/img_page_intro/imgslide32.webp",
    "../assets/img_page_intro/imgslide33.webp",
    "../assets/img_page_intro/imgslide34.webp",
    "../assets/img_page_intro/imgslide35.webp",
    "../assets/img_page_intro/imgslide36.webp",
    "../assets/img_page_intro/imgslide37.webp",
    "../assets/img_page_intro/imgslide38.webp",
    "../assets/img_page_intro/imgslide39.webp",
    "../assets/img_page_intro/imgslide40.webp",
    "../assets/img_page_intro/imgslide41.webp",
    "../assets/img_page_intro/imgslide42.webp",
    "../assets/img_page_intro/imgslide43.jpg",
    "../assets/img_page_intro/imgslide44.webp",
    "../assets/img_page_intro/imgslide45.webp",
    "../assets/img_page_intro/imgslide46.jpg",
    "../assets/img_page_intro/imgslide47.webp",
    "../assets/img_page_intro/imgslide48.webp",
    "../assets/img_page_intro/imgslide49.webp",
    "../assets/img_page_intro/imgslide50.webp",
    "../assets/img_page_intro/imgslide51.webp",
    "../assets/img_page_intro/imgslide52.webp",
    "../assets/img_page_intro/imgslide53.webp",
    "../assets/img_page_intro/imgslide54.webp",
    "../assets/img_page_intro/imgslide55.webp",
    "../assets/img_page_intro/imgslide56.webp",
    "../assets/img_page_intro/imgslide57.webp",
    "../assets/img_page_intro/imgslide58.webp",
    "../assets/img_page_intro/imgslide59.webp",
    "../assets/img_page_intro/imgslide60.webp",
    "../assets/img_page_intro/imgslide61.jpg",
    "../assets/img_page_intro/imgslide62.webp",
    "../assets/img_page_intro/imgslide63.webp",
    "../assets/img_page_intro/imgslide64.webp",
    "../assets/img_page_intro/imgslide65.webp",
    "../assets/img_page_intro/imgslide66.webp",
    "../assets/img_page_intro/imgslide67.webp",
    "../assets/img_page_intro/imgslide68.webp",
    "../assets/img_page_intro/imgslide69.webp",
    "../assets/img_page_intro/imgslide70.webp",
    "../assets/img_page_intro/imgslide71.webp",
    "../assets/img_page_intro/imgslide72.webp",
    "../assets/img_page_intro/imgslide73.webp",
    "../assets/img_page_intro/imgslide74.webp",
    "../assets/img_page_intro/imgslide75.webp",
    "../assets/img_page_intro/imgslide76.webp",
    "../assets/img_page_intro/imgslide77.webp",
    "../assets/img_page_intro/imgslide78.webp",
    "../assets/img_page_intro/imgslide79.webp",
    "../assets/img_page_intro/imgslide80.webp"
    // "../assets/img_page_intro/imgslide81.webp"
];
let sliderWidth = 860;
console.log(sliderWidth);
for(var i = 0; i < imgs.length ; i++){
    var img = document.createElement("img");
    img.src = imgs[i];
    img.width = 215;
    document.getElementById("img-container").appendChild(img);
}
function animate({ timing, draw, duration }) {
    const start = performance.now();
    
    requestAnimationFrame(function animate(time) {
        // timeFraction goes from 0 to 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }

        // calculate the current animation state
        const progress = timing(timeFraction);

        draw(progress); // draw it

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
};
function easeInOutSine(timeFraction) {
    return -(Math.cos(Math.PI * timeFraction) - 1) / 2;
};

function letsScroll(direction) {
    const container = document.getElementById('img-container');
    let start = container.scrollLeft;
    console.log(start)
    console.log(container.scrollWidth - sliderWidth)
    if (start == container.scrollWidth - sliderWidth) {

        container.scrollLeft = 0;
    }
    start = container.scrollLeft;
    animate({
        timing: easeInOutSine,
        draw: progress => {
            container.scrollLeft = start + progress * (direction * (sliderWidth / imgDisplayNumber));
        },
        duration: 20,
    });
};