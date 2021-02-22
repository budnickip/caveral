const delayItems = () =>{
    window.addEventListener('scroll',()=>{
        const career = document.querySelector('.career-photo')

        if(career.getBoundingClientRect().top < window.innerHeight){
            career.classList.add('activePhoto')
        }

        const about1 = document.querySelector('.about-description1')
        const about2 = document.querySelector('.about-description2')
        const about3 = document.querySelector('.about-description3')
        if(about1.getBoundingClientRect().top < window.innerHeight){
            about1.classList.add('activeAbout')
            setTimeout(()=>{ about2.classList.add('activeAbout')  }, 200);
            setTimeout(()=>{ about3.classList.add('activeAbout')  }, 400);
        }
    })
}

export default delayItems