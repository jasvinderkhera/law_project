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