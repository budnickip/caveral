const hideNavbar = () => {
    let lastScrollTop = 1;
    const navbar = document.querySelector('.navigation');
    const header = document.querySelector('.header');
    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // żeby na iphone przy odbiciu od góry nie chowała się nawigacja
        if(window.pageYOffset > 2){
            navbar.style.position="fixed";
            header.style.marginTop="90px";
        }else{
            navbar.style.position="static";
            header.style.marginTop="0px";
        }
        if(window.pageYOffset > 200){
            if(scrollTop > lastScrollTop){
                navbar.style.top="-100px";
            } else {
                navbar.style.top="0";
            }
            lastScrollTop = scrollTop;
        }
    });
}
export default hideNavbar;