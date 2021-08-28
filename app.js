//consts

const theme = document.querySelector('.theme')
const circle = document.getElementById('circle')
const basicCost = document.getElementById('basic') 
const profCost = document.getElementById('prof') 
const masterCost = document.getElementById('master') 
let boolean = true
theme.addEventListener('click', function(e){
    if(boolean){
        circle.classList.toggle('circle1')
        circle.classList.toggle('circle2')
        basicCost.textContent = '19.99'
        profCost.textContent = '24.99'
        masterCost.textContent = '39.99'
        boolean = false
    }
    else{
        circle.classList.toggle('circle1')
        circle.classList.toggle('circle2')
        basicCost.textContent = '199.99'
        profCost.textContent = '249.99'
        masterCost.textContent = '399.99'
        boolean = true
    }
})