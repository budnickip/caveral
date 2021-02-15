const baner = () =>{
    const banerText = document.querySelector('.baner-text-P')

        if(window.innerWidth < 600){
            if(window.innerHeight < window.innerWidth){
                banerText.style.display = "none";
            }else{
                banerText.style.display = "flex";
            }
        }else{
            banerText.style.display = "flex";
        }
    window.addEventListener("orientationchange", function(event) {
            console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
            if(event.target.screen.orientation.angle === 90){
                banerText.style.display = "none";
            }else{
                banerText.style.display = "flex";
            }
    });
  
}

export default baner