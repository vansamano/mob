$('input').click(function () {
    $(this).css({'background-image':'none','width':'200px','border-color':'#48cfad'})
});
$(':text').blur(function () {
    $(this).css({'width':'50px','height':'40px','background-image': 'url("img/放大镜 (1).png")','background-repeat':'no-repeat','background-size': '30px','background-position': 'center','font-size': '25px','border': '1px solid #48cfad'})
})

$('.title-right li').eq(2).mousemove(function(){
    $('.title-right li').eq(2).css({'color':'white','background': '#48cfad'});
    $('.title-right-box').eq(0).show()
});
$('.title-right li').eq(2).mouseleave(function(){
    if($('.title-right-box').eq(0).mouseleave(function () {
            $('.title-right-box').eq(0).hide()
            $('.title-right li').eq(2).css({'color':'#48cfad','background': 'white'})
        })){ }
});
$('.title-right li').eq(3).mousemove(function(){
    $('.title-right li').eq(3).css({'color':'white','background': '#48cfad'});
    $('.title-right-box').eq(1).show()
});
$('.title-right li').eq(3).mouseleave(function(){
    if($('.title-right-box').eq(1).mouseleave(function () {
            $('.title-right-box').eq(1).hide()
            $('.title-right li').eq(3).css({'color':'#48cfad','background': 'white'})
        })){ }
});
$('.title-right li').eq(4).mousemove(function(){
    $('.title-right li').eq(4).css({'color':'white','background': '#48cfad'});
    $('.title-right-box').eq(2).show()
});
$('.title-right li').eq(4).mouseleave(function(){
    if($('.title-right-box').eq(2).mouseleave(function () {
            $('.title-right-box').eq(2).hide()
            $('.title-right li').eq(4).css({'color':'#48cfad','background': 'white'})
        })){ }
});
$('.title-right li').eq(5).mousemove(function(){
    $('.title-right li').eq(5).css({'color':'white','background': '#48cfad'});
    $('.title-right-box').eq(3).show()
});
$('.title-right li').eq(5).mouseleave(function(){
    if($('.title-right-box').eq(3).mouseleave(function () {
            $('.title-right-box').eq(3).hide()
            $('.title-right li').eq(5).css({'color':'#48cfad','background': 'white'})
        })){ }
});
$('.title-right li').eq(6).mousemove(function(){
    $('.title-right li').eq(6).css({'color':'white','background': '#48cfad'});
    $('.title-right-box').eq(4).show()
});
$('.title-right li').eq(6).mouseleave(function(){
    if($('.title-right-box').eq(4).mouseleave(function () {
            $('.title-right-box').eq(4).hide()
            $('.title-right li').eq(6).css({'color':'#48cfad','background': 'white'})
        })){ }
});
/*$('.title-right-box').eq(0).mouseenter(function () {
    $(this).show()
})*/
/*$('.title-right li').eq(2).mouseenter(function () {
    $('.title-right-box').eq(2).fadeIn(500)
}).mouseleave(function () {
    $('.title-right-box').eq(2).fadeIn(500)
})
$('.title-right-box').mouseenter(function () {
    $(this).show()
}).mouseleave(function () {
    $(this).hide()
})*/
// $.each($('.title-right li'),function (j,s) {
//     $(this).eq(j).mouseenter(function () {
//         $('.title-right-box').eq(j).fadeIn(500)
//     }).mouseleave(function () {
//         $('.title-right-box').eq(j).fadeOut(500)
//     })
// })
// $.each($('.title-right-box'),function (j,s) {
//     $(this).eq(j).mouseenter(function () {
//         $('.title-right-box').eq(j).show()
//     }).mouseleave(function () {
//         $('.title-right-box').eq(j).hide()
//     })
// })


// $('.title-right-box').eq(0).mouseover(function () {
//     $('.title-right-box').eq(0).css('display','block')
// })