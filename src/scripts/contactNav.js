const contactNav = () =>{
    const cities = document.querySelectorAll('.contact-details__item');
    let active = '';

    [...cities].forEach(city=>{
        city.addEventListener('click', (e)=>{
            active = e.currentTarget;
            e.currentTarget.classList.add('activeCity');
            [...cities].forEach(cityActive => {
                if(city.classList.contains('activeCity') && cityActive.innerHTML !== active.innerHTML){
                    cityActive.classList.remove('activeCity')
                }
            })
        })
    })
    const szczecin = document.querySelector('#contact-szczecin')

   /* szczecin.addEventListener('click', e=>{
        console.log(e.target.value)
    })*/
}

export default contactNav