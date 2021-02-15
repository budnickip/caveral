const baner = () =>{
    const changeScreen = () =>{
        const banerText = document.querySelector('.baner-text-P')
        console.log(`width: ${window.innerWidth}`)
        console.log(`height: ${window.innerHeight}`)
        if(window.innerWidth < 600){
            if(window.innerHeight < window.innerWidth){
                banerText.style.display = "none";
            }else{
                banerText.style.display = "flex";
            }
        }else{
            banerText.style.display = "flex";
        }
    }
    window.onresize = changeScreen
}

export default baner