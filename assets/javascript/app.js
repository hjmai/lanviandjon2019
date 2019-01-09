$("#my-carousel").on('slide.bs.carousel', function(e) {
    $("#hero-banner").removeClass(`hero${e.from+1}`);
    $("#hero-banner").addClass(`hero${e.to+1}`);
    console.log(`from: ${e.from+1} to: ${e.to+1}`)
})