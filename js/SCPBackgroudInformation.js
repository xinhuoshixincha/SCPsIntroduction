
window.onload = function(){
    setTimeout(function(){
        show()
    }, 1500);
};

function show(){
    if ('none' === $('#main-body').css('display')){
        $('#main-body').fadeIn(1000);
        $('#slogan-div').fadeOut(100);
    }else{
        $('#main-body').fadeOut(100);
        $('#slogan-div').fadeIn(1000);
    }
}