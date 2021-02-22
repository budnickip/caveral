const counter = () =>{
    let yearDisplayed = 0
    let yearloaded = false;

    let customersDisplayed = 0
    let customersLoaded = false;

    let employersDisplayed = 0
    let employersLoaded = false;

    let officesDisplayed = 0
    let officesLoaded = false
    window.addEventListener('scroll',()=>{
        const year = document.querySelector('.about-counter__bigHeader')
        const yearValue = new Date().getFullYear()-2010;

        if((year.getBoundingClientRect().top < window.innerHeight) && !yearloaded){
            yearloaded = true;
            let yearInterval = setInterval(() => {
                  if(yearDisplayed <= yearValue){
                      yearDisplayed++
                      year.innerHTML = yearDisplayed
                  }
                  if(yearDisplayed > yearValue){
                      clearInterval(yearInterval)
                  }
                  yearDisplayed++
              }, 200);
        }


        const customers = document.querySelector('.customers__header')
        const customersValue = 100;

        if((customers.getBoundingClientRect().top < window.innerHeight) && !customersLoaded){
            customersLoaded = true;

            let customersInterval = setInterval(() => {
                if(customersDisplayed <= customersValue){
                    customers.innerHTML = `${customersDisplayed}%`
                    customersDisplayed++
                }
                customersDisplayed++
                if(customersDisplayed > customersValue){
                    clearInterval(customersInterval)
                }
            }, 50);
        }


        const employers = document.querySelector('.employers__header')
        const employersValue = 100;


        if((employers.getBoundingClientRect().top < window.innerHeight) && !employersLoaded){
            employersLoaded = true;

            let employersInterval = setInterval(() => {
                if(employersDisplayed <= employersValue){
                    employers.innerHTML = `+${employersDisplayed}`
                    employersDisplayed++
                }
                employersDisplayed++
                if(employersDisplayed > employersValue){
                    clearInterval(employersInterval)
                }
            }, 50);
        }


        const offices = document.querySelector('.offices__header')
        const officesValue = 5;

        if((offices.getBoundingClientRect().top < window.innerHeight) && !officesLoaded){
            officesLoaded = true;

            let officesInterval = setInterval(() => {
                if(officesDisplayed <= officesValue){
                    offices.innerHTML = `${officesDisplayed}`
                    officesDisplayed++
                }else{
                    officesDisplayed++
                }
                if(officesDisplayed > officesValue){
                    clearInterval(officesInterval)
                }
            }, 400);
        }

    })
}

export default counter