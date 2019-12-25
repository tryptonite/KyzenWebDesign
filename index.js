// SLIDE DOWN ARROW HOMEPAGE

$('a[href^="#"]').click(function(e){
    e.preventDefault();
    let dest = $(this).attr('href');
    console.log(dest);
    $('html,body').animate({scrollTop:$(dest).offset().top}, 'slow');
})



