let currentPicture = "1"
$("#my-carousel").on('slide.bs.carousel', function(e) {
    $('#hero-banner2').animate({opacity: 0}, 0).css("background-image", `url(./assets/images/bgs/hero${e.to+1}.jpg)`).animate({opacity: 1}, 800);
    currentPicture = e.to+1;
})

$('.expand').on('click', function() {
    window.open('./assets/images/pics/camera'+currentPicture+'.jpg');
})