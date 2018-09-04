var bar1,bar2,bar3,bar4;

var speed = 500;

$(function(){
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().left;
    var scroll = $(window).scrollTop();
    if(scroll > 50){
      $('body,html').animate({scrollTop: 0},speed, "swing");
    }
    $("html, body").animate({scrollLeft:position}, speed, "swing");
    return false;
  });
});

var width = window.parent.screen.width;
var reverseWidth = width * (-1);

var boolpage1 = true;
var boolpage2 = false;
var boolpage3 = false;


document.onkeydown = function (event) {
  var position = $(window).scrollLeft();

  if(event.keyCode == 39){
    $("html, body").animate({scrollLeft:width + position}, speed, "swing");
    return false;
  };

  if(event.keyCode == 37){
    $("html, body").animate({scrollLeft:reverseWidth + position}, speed, "swing");
    return false;
  }


};

$(window).scroll(function (){
    $('.p-box').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/6){
            $(this).css("opacity","1" );
        }
    });
});

function page1(){
  $('.header-li1').addClass('li-active');
};

function page2(){
  $('.header-li2').addClass('li-active');
  bar1.animate(0.83);
  bar2.animate(0.65);
  bar3.animate(0.7);
  bar4.animate(0.3);
};

function page3(){
  $('.header-li3').addClass('li-active');
};


window.onload = function(){  // ページ読み込み時に実行したい処理
  var position = $(window).scrollLeft();

  if(position < width / 2){
    page1();
  }else if ((width / 2 <= position) && (position < width / 2 + width)){
    page2();
  }else if ((width / 2 + width <= position) && (position < width / 2 + width * 2)) {
    page3();
  }else{
    return;
  }
}


window.onscroll = function(){

  var position = $(window).scrollLeft();

  if(position < width / 2){
    boolpage1 = "true";
    if(boolpage1 == "true"){
      page1();
    }
  }else{
    $('.header-li1').removeClass('li-active');
    boolpage1 = "false";
  }

  if ((width / 2 <= position) && (position < width / 2 + width)) {
    boolpage2 = "true";
      if(boolpage2 == "true"){
        page2();
      }
    }else{
      $('.header-li2').removeClass('li-active');
      bar1.animate(0);
      bar2.animate(0);
      bar3.animate(0);
      bar4.animate(0);
      boolpage2 = "false";
    }


  if ((width / 2 + width <= position) && (position < width / 2 + width * 2)) {
    boolpage3 = "true";
      if(boolpage3 == "true"){
        page3();
      }
    }else{
    $('.header-li3').removeClass('li-active');
    boolpage3 = "false";
    }
}

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
    to: {color: '#3751ff', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
