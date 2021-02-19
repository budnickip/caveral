const delayItems = () =>{
    window.addEventListener('scroll',()=>{
        const career = document.querySelector('.career-photo')

        if(career.getBoundingClientRect().top < window.innerHeight){
            career.classList.add('activePhoto')
        }
    })
}

export default delayItems