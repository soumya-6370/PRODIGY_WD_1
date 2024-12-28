window.addEventListener('scroll',function()
{
    var nav= document.querySelector('nav');
    if (window.scrolly > 50)
    {
        nav.style.backgroundcolor='#f0f0f0';
    } else {
        nav.style.backgroundcolor='#fff';
    }
});