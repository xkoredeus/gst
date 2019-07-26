$(function() {
  $('.header__banner').owlCarousel({
    nav: false,
    items: 1,
    loop: false,
    dots: true,
    smartSpeed: 700,
    navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
	});
  $('.header__banner_sol').owlCarousel('destroy');
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
  $('.sol-begin__slider').owlCarousel({
    nav: false,
    loop: false,
    smartSpeed: 700,
    dots: true,
    margin: 20,
    navText: ["<img src='img/prj-slider__arrow_prev.png'>", "<img src='img/prj-slider__arrow_next.png'>"],
    responsive : {
      0   : {
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
  //accordeon
  $('.sol-acc__item-cnt').hide();
  $('.sol-acc__item-btn').on('click', function () {
    $(this).toggleClass('active').siblings('.sol-acc__item-cnt').slideToggle();
  });
  //history slider
  $(document).ready(function() {
    var owl = $(".history__slider-bot"),
      inputType =$("input[type=range]");
      owl.owlCarousel({
        dots: false,
        startPosition: 4,
        center: true,
        nav: true,
        navText: ["<img src='img/prj-slider__arrow_prev.png'>", "<img src='img/prj-slider__arrow_next.png'>"],
        responsive: {
          0: {
            items: 1,
            slideBy: 1,
           
          },
          600: {
            items: 3,
            slideBy: 1
            
          },
          1280: {
            items: 5,
            slideBy: 1
          }
        }
      });
      owl.on('changed.owl.carousel', function(event) {
        console.log(event.item.index);
        inputType.val(event.item.index);
        $('.history__slider-info-item').hide();
        var his = (event.item.index);
        $('.history__slider-info-item[data-his="'+his+'"]').fadeIn();
      });
      $("input").on("change", function(e) {
        e.preventDefault();
        console.log(inputType.val());
        $('.owl-carousel').trigger('to.owl.carousel', [inputType.val(),1,true]);
      });
  });
  $('.history__slider-info-item').hide();
  $('.history__slider-info-item[data-his="4"]').fadeIn();
  //main-nav
  $('.header__nav-sub').hide();
  $('.header__nav-sub_2').hide();
  if ( $(window).width() > 1200 ) {
    $('.header__nav-link-wrp').hover(function() {
      $(this).toggleClass('hover').find('.header__nav-sub').slideToggle(30);
    });
    $('.header__nav-sub-link-wrp').hover(function() {
      $(this).toggleClass('hover-2').find('.header__nav-sub_2').slideToggle(30);
    });
  };
  if ( $(window).width() < 1199 ) {
    $('.header__nav-link-wrp_sub .header__nav-link').on('click', function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('hover').find('.header__nav-sub').slideToggle();
    });
    $('.header__nav-sub-link-btn').on('click', function(e) {
      e.preventDefault();
      $(this).parents('.header__nav-sub-link-wrp').toggleClass('hover-2').find('.header__nav-sub_2').slideToggle();
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
  //sidebar
  if ( $(window).width() < 1199 ) {
    $(function(){
     var topPos = $('.sidebar').offset().top; //topPos - это значение от верха блока до окна браузера
     $(window).scroll(function() { 
      var top = $(document).scrollTop();
      if (top > topPos) $('.sidebar').addClass('sticky'); 
      else $('.sidebar').removeClass('sticky');
     });
    });
    $('.sidebar__link').hide();
    $('.sidebar__ttl').on('click', function(){
      $(this).toggleClass('active').siblings('.sidebar__in').find('.sidebar__link').slideToggle();
    });
  };
  //current section
  jQuery(window).scroll(function(){
  var $sections = $('.section');
    $sections.each(function(i,el){
    var top  = $(el).offset().top-100;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
      if( scroll > top && scroll < bottom){
        $('.sidebar__link').removeClass('sidebar__link_here');
        $('.sidebar__link[href="#'+id+'"]').addClass('sidebar__link_here');
      }
    })
  });
  $(".sidebar__in").on("click","a", function (event) {
      event.preventDefault();
      if ( $(window).width() < 1199 ) {
        $(this).siblings('.sidebar__ttl').toggleClass('active');
        $('.sidebar__link').slideToggle();
      };
      var id  = $(this).attr('href'),
          top = $(id).offset().top - 170;
      $('body,html').animate({scrollTop: top}, 800);
  });
  // //sticky header
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 4){
  //   $('.header').addClass("sticky");
  //   }
  //   else{
  //   $('.header').removeClass("sticky");
  //   }
  // });
});