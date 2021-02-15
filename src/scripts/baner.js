const baner = () =>{
    const banerText = document.querySelector('.baner-text-P')
    console.log(screen.availHeight)
    console.log(screen.availWidth)
    if(screen.innerWidth < 600){
        if(screen.availHeight > screen.availWidth){
            banerText.style.display = "none";
        }
    }
}

export default baner