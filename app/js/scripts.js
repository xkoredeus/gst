$(function() {
  $('.header__banner').owlCarousel({
      nav: false,
      items: 1,
      loop: false,
      dots: true,
      smartSpeed: 700,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
	});
  $('.clients__in').owlCarousel({
    nav: true,
    loop: true,
    smartSpeed: 700,
    dots: false,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1,
      },
      380 : {
          items: 1,
      },
      480 : {
          items: 2,
      },
      768 : {
          items: 3,
      },
      1040 : {
          items: 5,
      }
    },
  });
  $('.prj__right').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 700,
    dots: false,
    navText: ["<img src='img/prj-slider__arrow_prev.png'>", "<img src='img/prj-slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1,
      },
      380 : {
          items: 1,
      },
      480 : {
          items: 2,
      },
      768 : {
          items: 3,
      }
    },
  });
  if ( $(window).width() < 1199 ) {
    $('.prj__left').addClass('owl-carousel');
    $('.prj__left').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      smartSpeed: 700,
      dots: false,
      autoHeight: true,
      navText: ["<img src='img/prj-slider__arrow_prev.png'>", "<img src='img/prj-slider__arrow_next.png'>"]
    });
  };
  $('.prj__right-item').hover(function(){
    var prj = $(this).attr('data-prj');
    $('.prj__left-item').removeClass('active');
    $('.prj__left-item[data-prj="'+prj+'"]').toggleClass('active');
  });
  $('.sol-page__list-item').hover(function(){
    var sol = $(this).attr('data-sol');
    $('.sol-page__right-img').removeClass('active');
    $('.sol-page__right-img[data-sol="'+sol+'"]').toggleClass('active');
    console.log(prj);
  });
  $('.news__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 700,
    dots: false,
    navText: ["<img src='img/prj-slider__arrow_prev.png'>", "<img src='img/prj-slider__arrow_next.png'>"],
    responsive : {
      0   : {
          items: 1,
      },
      380 : {
          items: 1,
      },
      768 : {
          items: 2
      }
    },
  });

  //main-nav
  $('.header__nav-sub').hide();
  $('.header__nav-sub_2').hide();
  if ( $(window).width() > 1200 ) {
    $('.header__nav-link-wrp').hover(function() {
      $(this).toggleClass('hover').find('.header__nav-sub').slideToggle();
    });
    $('.header__nav-sub-link-wrp').hover(function() {
      $(this).toggleClass('hover-2').find('.header__nav-sub_2').slideToggle();
    });
  };
  if ( $(window).width() < 1199 ) {
    $('.header__nav-link').on('click', function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('hover').find('.header__nav-sub').slideToggle();
    });
    $('.header__nav-sub-link-wrp').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('hover-2').find('.header__nav-sub_2').slideToggle();
    });
  };
	// tabs 
  $(document).ready(function () {
    $(".tabs__content-item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  if ( $(window).width() < 600 ) {
    $('.footer__link').hide();
    $('.footer__ttl_mobile').on('click', function(){
      $(this).toggleClass('active').siblings().find('.footer__link').slideToggle();
    });
  };
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
});