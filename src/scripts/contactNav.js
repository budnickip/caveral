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
                case 'Holandia':
                    printHolandia()
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
    document.querySelector('.boss').innerHTML = `
    <div class="contact-persons">
        <p class="contact-persons__header"><span class="fas fa-user">&nbsp;</span> Dyrektor finansowy</p>
        <p class="contact-persons__person">Marcin Budnicki</p>
        <p class="contact-persons__phone"><span class="fas fa-phone">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 91 884 16 14">+48 91 884 16 14</a></p>
        <p class="contact-persons__phone"><span class="fas fa-mobile">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 501 581 501">+48 501 581 501</a></p>
        <p class="contact-persons__mail"><span class="fas fa-envelope">&nbsp;</span> <a class="contact-persons__link" href="mailto:m.budnicki@caveral.pl">m.budnicki@caveral.pl</a></p>
    </div>
    <div class="tricky-line">
    </div>
    <div class="contact-persons">
        <p class="contact-persons__header"><span class="fas fa-user">&nbsp;</span> Dyrektor operacyjny</p>
        <p class="contact-persons__person">Marcin Szczepaniak</p>
        <p class="contact-persons__phone"><span class="fas fa-phone">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 91 884 16 15">+48 91 884 16 15</a></p>
        <p class="contact-persons__phone"><span class="fas fa-mobile">&nbsp;</span> <a class="contact-persons__link" href="tel:+48 519 333 680">+48 519 333 680</a></p>
        <p class="contact-persons__mail"><span class="fas fa-envelope">&nbsp;</span> <a class="contact-persons__link" href="mailto:m.szczepaniak@caveral.pl">m.szczepaniak@caveral.pl</a></p>
    </div>
    `
    document.querySelector('.contact-map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.8922205349463!2d14.508687315811077!3d53.45251288000141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0eae30ef38d9%3A0x39450e0298beca58!2saleja%20Wojska%20Polskiego%20184C%2C%2071-256%20Szczecin!5e0!3m2!1spl!2spl!4v1614014862249!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
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
    document.querySelector('.contact-map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.7010542631688!2d17.019105015722456!3d51.11397557957246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9e1fa8aad2f%3A0xe4dce5d60f3154bd!2sSikorskiego%205%2C%2053-659%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1614015051997!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
}

const printHolandia = () =>{
    document.querySelector('.contact-photo__photo').innerHTML = '<img src="assets/img/e853f99a4f09d239eaf75da4cd8d77f0.jpg" alt="caveral holandia" class="contact-photo__img" />'
    document.querySelector('.contact-text__adress').innerHTML = `Heemskerk`
    document.querySelector('.employers').style.display = "none";
    document.querySelector('.boss').innerHTML = `
    <div class="contact-persons">
    <p class="contact-persons__header"><span class="fas fa-user">&nbsp;</span> Kierownik Sprzedaży – Europa Zachodnia</p>
    <p class="contact-persons__person">Karina Kowara</p>
    <p class="contact-persons__phone"><span class="fas fa-mobile">&nbsp;</span> <a class="contact-persons__link" href="tel:+31 6 16 39 79 11">+31 6 16 39 79 11</a></p>
    <p class="contact-persons__mail"><span class="fas fa-envelope">&nbsp;</span> <a class="contact-persons__link" href="mailto:k.kowara@caveral.pl">k.kowara@caveral.pl</a></p>
    </div>
    `
    document.querySelector('.contact-map').innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9715.90891585311!2d4.676222243088865!3d52.49765177695808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fa715386f165%3A0x61545aaf072e6e94!2s1966%20RB%20Zuidbroek%2C%20Holandia!5e0!3m2!1spl!2spl!4v1614015193546!5m2!1spl!2spl" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
}

export default contactNav