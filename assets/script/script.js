$('.document-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows:true,
    prevArrow:`<button type="button" class="slick-prev my-arrow">Previous</button>`,
    nextArrow:`<button type="button" class="slick-next my-arrow">Next</button>`
  });



  $('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows:true,
  });


$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1500,
  from: 200,
  to: 500
});



// --------------------------------------------------------------------Modal-------------------------------------------------------------

function show_modal(){
  let modal = document.querySelector(".form_modal")
  modal.style.display = "flex"
}

function hide_modal(){
  let modal = document.querySelector(".form_modal")
  modal.style.display = "none"
  window.location.href = "index.html"
}