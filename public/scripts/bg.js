const funBg = () => {
    let bg = document.querySelector('.bg-logo');
    bg.setAttribute('style','height:' + (document.documentElement.scrollHeight || document.body.scrollHeight) + 'px');
}
addEventListener('load', funBg);
addEventListener('resize', funBg);
addEventListener('htmx:afterOnLoad', funBg);

funBg();

