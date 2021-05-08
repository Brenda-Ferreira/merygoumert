$('#animaMenu').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();



    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);

});

$('#animaVip').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();



    $('html, body').animate({
        scrollTop: targetOffset - 135
    }, 500);

});

$('#animaCardapio').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();



    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);

});

$('#animaSobre').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();



    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);

});