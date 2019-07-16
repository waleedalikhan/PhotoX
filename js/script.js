$(function() {
    $(' .nav-button ').click(function() {
        $(' .nav-button ').toggleClass(' change ')
    })
})
$(window).scroll(function() {
    let position = $(this).scrollTop()
    if(position >= 160){ 
        $('nav').addClass('custom-navbar')
        .removeClass('nav-menu');
    } else{
        $('nav').addClass('nav-menu')
        .removeClass('custom-navbar');
    }
})
$(window).scroll(function() {
    let position = $(this).scrollTop()
    if( position >= 710) {
        $('.camera-img').addClass('left')
        $('.mission-text').addClass('right')
    } else{
        $('.camera-img').removeClass('left')
        $('.mission-text').removeClass('right')
    }
})
$('.gallery-item').click(function() {
    let value = $(this).attr('data-filter')
    
     if(value === 'all'){
        $('.filter').show(600)
    }else {
        $('.filter').not('.' + value).hide(600)
        $('.filter').filter('.' + value).show(600)
    }
})
$('.gallery-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item')
})
$(window).scroll(function() {
    let position = $(this).scrollTop()
    if(position >= 4990) {
        $('.card-1').addClass('fromleft')
        $('.card-2').addClass('frombottom')
        $('.card-3').addClass('fromright')
    } else {
        $('.card-1').removeClass('fromleft')
        $('.card-2').removeClass('frombottom')
        $('.card-3').removeClass('fromright')        
    }
})


