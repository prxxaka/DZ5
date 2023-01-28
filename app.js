const som = document.querySelector('#som')
const usd =  document.querySelector('#usd')
const rub = document.querySelector('#rub')

const convert = (elem, target,target2) =>   {
    elem.addEventListener('input', () =>{
        const req = new XMLHttpRequest()
        req.open('GET','data.json')
        req.setRequestHeader('Content-type','application/json')
        req.send()
        req.addEventListener('load',() =>{
            const response = JSON.parse(req.response)
            if(elem === som){
                target.value = (elem.value / response.usd).toFixed(2)
                target2.value = (elem.value /response.rub).toFixed(2)
            }
            else if(elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2)
                target2.value = (elem.value * response.usd / response.rub).toFixed(2)
            }else if(elem === rub){
                target.value = (elem.value * response.rub / response.usd).toFixed(2)
                target2.value = (elem.value * response.rub).toFixed(2)
            }
            elem.value === "" && (target.value = "")
            elem.value === "" && (target2.value = "")
        })
    })
}

convert(som,usd,rub)
convert(usd,som,rub)
convert(rub,usd,som)