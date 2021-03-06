// 'Friday, October 15th'
let currentDate = moment().format('dddd, MMMM Do')

// populate p tag with currentDate
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

// handles highlights
for (let i = 9; i <= 17; i++) {
  let timeCounter = "time" + i
  let timeString = document.getElementById(timeCounter).textContent //9AM
  let timeInteger = stringInteger(timeString) // 9

  if (presentHour == timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('present')
  }
  else if (presentHour < timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('future')
  }
  else if (presentHour > timeInteger) {
    document.getElementById(timeCounter).nextElementSibling.children[0].classList.add('past')
  }

  // handle populating textareas
  let planCounter = "plan" + i
}

let schedule = {
  'plan8': '',
  'plan9': '',
  'plan10': '',
  'plan11': '',
  'plan12': '',
  'plan13': '',
  'plan14': '',
  'plan15': '',
  'plan16': '',
  'plan17': ''
}


// handle saving
document.addEventListener('click', event => {
  if (event.target.classList.contains('saveBtn')) {

    let note = event.target.previousElementSibling.children[0].value

    let plan = event.target.previousElementSibling.children[0].id

  }
})