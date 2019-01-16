let address = ""
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

// Google maps autocomplete
var placeSearch, autocomplete;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('home_address')),
      {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  address = place.formatted_address.split(", USA")[0];
  console.log(address);
  $('#home_address').val(address);
}

let modalSuccess = document.getElementById("success");
const successSpan = document.getElementsByClassName('closeSuccess')[0];
successSpan.onclick = function() {
    console.log('hi');
    modalSuccess.style.display = "none";
}
modalSuccess.onclick = function() {
    modalSuccess.style.display = "none";
}
$(".rsvp-form").submit(function(e) {
    var form = $(this),
        url = ``,
        rsvp = '';

    if(form.attr('id') == 'no-submission') {
        rsvp = 'no';
    } else if(form.attr('id') == 'form-submission') {
        rsvp = 'yes';
    }

    e.preventDefault();
    url = `https://script.google.com/macros/s/AKfycbxJ0aFoZv0MhXNAncPRyUFcVfR0Y41lUJqtGeZ3QXdvBcnUZZA/exec?rsvp=${rsvp}`;
    modalSuccess.style.display = "block";
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: form.serializeObject()
    }).then(function(res){
        if(res.result == 'success') {
            var successCheckmark = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                            <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
                        </svg>`;
            $("#yay").html(successCheckmark)
            $('.name').val('');
            $('#email_address').val('');
            $('#home_address').val('');
            $('#guests').val('');
        }
    });
});

$(document).ready(function(){
    $('#radio-one').on('click', function() {
        setTimeout(function() {
            window.location.href = "#form-submission";
        }, 0);
    })
    $('#check-one').click(function() {
        if($(this).is(':checked')) {
            $('#submissionBtn').removeAttr('disabled');
        } else {
            $('#submissionBtn').attr('disabled', true);
        }
    })
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    $('#radio-one').on('click', function() {
        $('#no-submission').addClass('hidden');
        $('#form-submission').removeClass('hidden');
    });
    $('#radio-two').on('click', function() {
        $('#form-submission').addClass('hidden');
        $('#no-submission').removeClass('hidden');
    })
})

// https://hjmai.github.io/lanviandjon2019