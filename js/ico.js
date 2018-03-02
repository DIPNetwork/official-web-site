
$(".kf_cord").on('click',function(){
  if($(".timo").css("display")=="none"){
    $(".timo").show();
    $(".timo2").show();
    $(".kf_cord").css('color','#fff');
  }else{
    $(".timo").hide();
    $(".timo2").hide();
    $(".kf_cord").css('color','#fff');
  }
});

$(".paper_cord").on('click',function(){
  if($(".plane-timo").css("display")=="none"){
    $(".plane-timo").show();
    $(".paper_cord").css('color','#fff');
  }else{
    $(".plane-timo").hide();
    $(".paper_cord").css('color','#fff');
  }
});

$(function(){
//        获取屏幕宽度
$(".top-nav li").mousemove(function(){
  $(this).find('ul').fadeIn();
})
$(".top-nav li").mouseleave(function(){
  $(this).find('ul').fadeOut();
})
    if(document.body.scrollWidth<=750){
        $('.navbar-brand').attr('id',"nav_log");
    }else if(document.body.scrollWidth>=750){
        $('.navbar-brand').addClass('navbar-brand')
    }


    //公司团队
    //$.getJSON('/ico/script/person.json',function(data) {
    //    //渲染模板
    //    var t=$('#class-template').html();
    //    var f=Handlebars.compile(t);
    //    var h=f(data.person);
    //    $("#classes").html(h);
    //})
//        轮播分页
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        speed:800,
        autoplay:2500,
        effect: 'fade'
    });
    //		鼠标下上移动效果
    $(".thumbnail").hover(function(){
            $(this).addClass("selected");
        },function(){
            $(this).removeClass('selected');
        }
    );
    // tab切换的效果
    $('#tit span').click(function(){
        var i=$(this).index();//获取下标
        $(this).addClass('select').siblings().removeClass('select');
        $('#con li').eq(i).show().siblings().hide();
    });

    //鼠标移上去效果
    $(".paper").hover(function(){
        $(this).addClass("writepaper").stop().animate({opacity: '1'},1000);
    },function(){
        $(this).removeClass("writepaper");
    });
    // 微信二维码
    // $('.wechat').on('mouseenter',function(){
    //   $('.wechatCord').show()
    // }).on('mouseleave',function(){
    //   $('.wechatCord').hide()
    // })
    $('.wechat').click(function(){
      if($(".wechatCord").css("display")=="none"){
        $('.wechatCord').show()
      }else{
        $('.wechatCord').hide()
      }
    })

})

//字体打印显示效果
var text;//p标签里对应的字符串
var index = 0;//text字符串的下标
var id;//setTimeout()的返回值,用于关闭clearTimeout(id)
function typing(){
    text = $("#typing_val").val();
    $("#typing").text("");
    $("#typing").show();
    typed();
}
result = "";
function typed(){
    //charAt() 方法可返回指定位置的字符。
    result += text.charAt(index);
        $("#typing").text(result + (index & 1 ? "_" : " "));
        if(index <　text.length)
        {
            index++;
            id = setTimeout("typed()", 50);
        }
        else
            clearTimeout(id);
}


////禁止复制网页内容
//$(document).bind('contextmenu conpy selectstart',function(){
//    return false;
//});
//
////禁止ctrl+c 和ctrl+v(所有浏览器均支持)
//$(document).keydown(function(e){
//    if(e.ctrlKey && (e.keyCode == 65 || e.keyode == 67)){
//        return false;
//    }
//})
