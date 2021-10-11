// 'Monday, October10 11th'
let currentDate = moment().format('dddd, MMMMM Do')

// populate p tag with current date
document.getElementById('currentDay').textContent = currentDate

let presentHour = moment().hour()

const stringInteger = (timeString) => {
  switch (timeString) {
    case '9AM': return 9
    case '10AM': return 10
    case '11AM': return 11
    case '12PM': return 12
    case '1PM': return 13
    case '2PM': return 14
    case '3PM': return 15
    case '4PM': return 16
    case '5PM': return 17
  }
}

for (let i = 9; i <= 17; i++) {
  let timeCounter = 'time' + i
  let timeString = document.getElementById(timeCounter).textContent //9AM
  let timeInteger = stringInteger(timeString) //9 

  if (presentHour === timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
  }

  else if (presentHour < timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
  }

  else if (presentHour > timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
  }
}

// handle saving
// document.addEventListener('click', event => {
//   if (event.target.classList.contains('saveBtn')) {

//     let note = event.target.previousElementSibling.children[0].vaule

//     let plan = event.target.previousElementSibling.children[0].id

//     workday[plan] = note

//     localStorage.setItem('workday', JSON.stringify(workday))



//   }
// })






