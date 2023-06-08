const headr = document.querySelector('content_1');
function changeBg(){
    var scrollValue = window.scrollY;
    console.log(scrollValue);
    if(scrollValue > 120)
    {
        headr.classList.add('scrolled');
    }
    else{
        headr.classList.remove('scrolled');
    }
}
document.addEventListener('scroll', changeBg());
