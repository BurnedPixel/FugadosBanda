window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("pageNav").classList.toggle('fixed-top',true);
    }
    else {
        document.getElementById("pageNav").classList.toggle('fixed-top',false);
    }
}