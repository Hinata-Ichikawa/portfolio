var bar1,bar2,bar3,bar4;

$('.animation1').css('visibility','hidden');
$('.animation2').css('visibility','hidden');
$('.animation3').css('visibility','hidden');

window.onload = function(){  // ページ読み込み時に実行したい処理
  $('.header-li1').addClass('li-active');
  $('.header-li2').removeClass('li-active');
  $('.header-li3').removeClass('li-active');

  $('.animation1').addClass("fadeInDown");
}

$(function(){

  $('a[href^="#1"]').click(function(){
    $('.header-li1').addClass('li-active');
    $('.header-li2').removeClass('li-active');
    $('.header-li3').removeClass('li-active');

    bar1.animate(0);
    bar2.animate(0);
    bar3.animate(0);
    bar4.animate(0);
  });

  $('a[href^="#2"]').click(function(){
    $('.header-li1').removeClass('li-active');
    $('.header-li2').addClass('li-active');
    $('.header-li3').removeClass('li-active');

    setTimeout( function() {

      bar1.animate(0.7);
      bar2.animate(0.35);
      bar3.animate(0.7);
      bar4.animate(0.2);

      $('.animation2').addClass("fadeInDown");
    }, 400);

  });

  $('a[href^="#3"]').click(function(){
    $('.header-li1').removeClass('li-active');
    $('.header-li2').removeClass('li-active');
    $('.header-li3').addClass('li-active');

    bar1.animate(0);
    bar2.animate(0);
    bar3.animate(0);
    bar4.animate(0);

    setTimeout( function() {
      $('.animation3').addClass("fadeInDown");
    }, 400);
  });


  bar1 = new ProgressBar.Circle(container, {
    color: '#00d1ff',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 4,
    from: {color: '#00d1ff', a:0},
    to: {color: '#fc476c', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  bar2 = new ProgressBar.Circle(container2, {
    color: '#FF8235',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 4,
    from: {color: '#FF8235', a:0},
    to: {color: '#30E8BF', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });


  bar3 = new ProgressBar.Circle(container3, {
    color: '#30E8BF',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 4,
    from: {color: '#30E8BF', a:0},
    to: {color: '#FF8235', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

  bar4 = new ProgressBar.Circle(container4, {
    color: '#00d1ff',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 4,
    from: {color: '#00d1ff', a:0},
    to: {color: '#0021ff', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });

});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().left;
    $("html, body").animate({scrollLeft:position}, speed, "swing");
    return false;
  });
});
