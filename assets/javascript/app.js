let currentPicture = "1"
$("#my-carousel").on('slide.bs.carousel', function(e) {
    $('#hero-banner2').animate({opacity: 0}, 0).css("background-image", `url(./assets/images/bgs/hero${e.to+1}.jpg)`).animate({opacity: 1}, 800);
    currentPicture = e.to+1;
})

let modal = document.getElementById("myModal");
let modalImg = document.getElementById('img01');
$('.expand').on('click', function() {
    modal.style.display = "block";
    modalImg.src = `./assets/images/pics/full/camera${currentPicture}.jpg`;
});

const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    modal.style.display = "none";
}
modal.onclick = function() {
    modal.style.display = "none";
}


var $form = $('#form-submission'),
        url = 'https://script.google.com/macros/s/AKfycbxJ0aFoZv0MhXNAncPRyUFcVfR0Y41lUJqtGeZ3QXdvBcnUZZA/exec';
$("#form-submission").submit(function(e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
    }).success(
        // do something
    )
    // console.log('hi');
    // var $form = $('#form-submission');
    // console.log($form.serializeObject());
})

// https://script.google.com/macros/s/AKfycbxJ0aFoZv0MhXNAncPRyUFcVfR0Y41lUJqtGeZ3QXdvBcnUZZA/exec