$(window).scroll(function (){
    $('.works-detail').each(function(){
        var POS = $(this).offset().top;  //fade-inがついている要素の位置
        var scroll = $(window).scrollTop();  //スクロール一
        var windowHeight = $(window).height();  //ウィンドウの高さ

        if (scroll > POS - windowHeight + windowHeight/6){
            $(this).css("opacity","1" );
        }

        if (scroll > 200){
          $('.thumbnail-img').css("filter","opacity(30%)");
        }else{
          $('.thumbnail-img').css("filter","opacity(100%)");
        }
    });
});
