let App = document.querySelector('.App')

let totalAmount = document.createElement('div')
totalAmount.className = 'total-amount'
totalAmount.innerHTML = 'Total Money : 0 THB'
App.appendChild(totalAmount)


let cinemaCol = 5
let cinemaRow = 5

let totalMoney = 0

let cinema = document.createElement('div')
cinema.className = 'cinema'
cinema.style.display = 'grid'
cinema.style.gridTemplateColumns = '1fr '.repeat(cinemaCol)
cinema.style.gridTemplateRows = '1fr '.repeat(cinemaRow)

for(let i = 0; i < cinemaCol * cinemaRow; i++){
    let seatOuter = document.createElement('div')
    seatOuter.className = 'seat-outer'
    
    let seatInner = document.createElement('div')
    seatInner.className = 'seat-inner'

    seatOuter.addEventListener('click',(e)=>{
        e.target.classList.toggle('active')
        if(e.target.className.includes('active')){
            totalMoney += 150
            document.querySelector('.total-amount').innerHTML = `Total Money : ${totalMoney} THB`
        }else{
            totalMoney -= 150
            document.querySelector('.total-amount').innerHTML = `Total Money : ${totalMoney} THB`
        }
    })

    seatOuter.appendChild(seatInner)
    cinema.appendChild(seatOuter)
}

App.appendChild(cinema)