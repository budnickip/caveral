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
                    printSzczecin()
                    break;
                case 'Wrocław':
                    printWroclaw()
                    break;
                default:
                    printSzczecin()
            }
        })
    })
}

const printSzczecin = () =>{
    document.querySelector('.contact-photo__photo').innerHTML = '<img src="assets/img/9e4195ccd6a99c0cf88d14f25d28b35c.jpg" alt="caveral szczecin" class="contact-photo__img" />'
    document.querySelector('.contact-text__adress').innerHTML = `ul. Wojska Polskiego 184c 71-256 Szczecin`
    document.querySelector('.employers').style.display = "flex";
}

const printWroclaw = () =>{
    document.querySelector('.contact-photo__photo').innerHTML = `<img src="assets/img/fed7bb59d41337151c36fa54610ef950.jpg" alt="caveral wroclaw" class="contact-photo__img" />`
    document.querySelector('.contact-text__adress').innerHTML = `ul. Władysława Sikorskiego 5/1 53-659 Wrocław`
    document.querySelector('.employers').style.display = "none";
    document.querySelector('.boss').innerHTML = `
    <div class="contact-persons">
    <p class="contact-persons__header"><span class="fas fa-user">&nbsp;</span> Kierownik oddziału</p>
    <p class="contact-persons__person">Mateusz Zawadka</p>
    <p class="contact-persons__phone"><span class="fas fa-phone">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 71 735 70 72">+48 71 735 70 72</a></p>
    <p class="contact-persons__phone"><span class="fas fa-mobile">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 797 707 992">+48 797 707 992</a></p>
    <p class="contact-persons__mail"><span class="fas fa-envelope">&nbsp;</span> <a class="contact-persons__link" href="mailto:m.zawadka@caveral.pl">m.zawadka@caveral.pl</a></p>
    </div>
    `
}

export default contactNav