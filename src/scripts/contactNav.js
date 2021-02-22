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
            switch(active.innerHTML) {
                case 'Szczecin':
                    document.querySelector('.contact-photo__photo').innerHTML = '<img src="assets/szczecin.jpg" alt="caveral szczecin" class="contact-photo__img" />'
                    break;
                case 'Wrosław':
                    document.querySelector('.contact-photo__photo').innerHTML = `<img src="assets/photo1.jpg" alt="caveral wroclaw" class="contact-photo__img" />`
                    break;
                default:
                    document.querySelector('.contact-photo__photo').innerHTML = '<img src="assets/szczecin.jpg" alt="caveral szczecin" class="contact-photo__img" />'
            }
        })
    })
    const szczecin = document.querySelector('#contact-szczecin')

   /* szczecin.addEventListener('click', e=>{
        console.log(e.target.value)
    })*/
}

export default contactNav